const model = {}
model.currentUser = undefined
model.register = (firstName, lastname, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        console.log(user)
        alert('register success')
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