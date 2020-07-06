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
    firebase.firestore().collection(model.collectionName)
    .where('users', 'array-contains', model.currentUser.email)
    .get()
    .then(res => {
        const data = utils.getDataFromDocs(res.docs)
        if (data.length > 0) {
            model.currentConversation = data[0]
            view.showCurrentConversation()
        }
        // console.log(data);

    })
}


model.addMessage = (message) => {
    const dataToUpdate = {
        messages: firebase.firestore.FieldValue.arrayUnion(message),
    }
    firebase.firestore()
    .collection('conversations')
    .doc(model.currentConversation.id)
    .update(dataToUpdate)
}

model.listenConversationChange = () => {
    let isFirstRun = false
    firebase.firestore().collection(model.collectionName)
    .where('users', 'array-contains', model.currentUser.email)
    .onSnapshot((res)=>{
        if (!isFirstRun) {
            isFirstRun = true
            return
        }
        console.log(res)
        const docChanges = res.docChanges()
        console.log(docChanges)

        
        for(oneChange of docChanges){
            const type = oneChange.type

            const oneChangeData = utils.getDataFromDoc(oneChange.doc)
            console.log(oneChangeData);
            if (oneChangeData.id === model.currentConversation.id) {
                model.currentConversation = oneChangeData
                view.addMessage(oneChangeData.messages[oneChangeData.messages.length-1])
            }
            
            
        }
        
    })
}