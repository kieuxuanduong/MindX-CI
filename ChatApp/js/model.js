const model = {}
model.currentUser = undefined
model.collectionName = 'conversations'
model.currentConversation = undefined
model.register = (firstName, lastname, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        firebase.auth().currentUser.sendEmailVerification()
        firebase.auth().currentUser.updateProfile({
            displayName: firstName + ' ' + lastname
        })
        alert('Register success, please check your email!')
        view.setActiveScreen('loginScreen')
    }).catch((e) => {
        alert(e.message)
        console.log(e)
    })
}

model.login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        console.log(user)
        if (user.user.emailVerified) {
            // model.currentUser = user.user
            model.currentUser = {
                displayName: user.user.displayName,
                email: user.user.email
            }
            console.log(model.currentUser)
            view.setActiveScreen('chatScreen')
        } else {
            alert('Vefify your email!')
        }
    }).catch((e) => {
        alert(e.message)
    })
}

model.loadConversations = () => {
    firebase.firestore().collection(model.collectionName).get().then(res => {
        const data = utils.getDataFromDocs(res.docs)
        if (data.length > 0) {
            model.currentConversation = data[0]
            view.showCurrentConversation()
        }
        console.log(data);

    })
}

model.addMessage = (message) => {
    firebase.firestore().collection('conversations').doc(model.currentConversation.id).update(message).then(res => {
        alert('updated!')
      })
}