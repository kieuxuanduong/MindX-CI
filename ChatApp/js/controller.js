const controller = {}

controller.register = (registerInfo) => {
    if (registerInfo.firstName === '') {
        view.setErrorMessage('error-first-name', 'Please input first name')

    } else {
        view.setErrorMessage('error-first-name', '')
    }
    if (registerInfo.lastName === '') {
        view.setErrorMessage('error-last-name', 'Please input last name')
    } else {
        view.setErrorMessage('error-last-name', '')
    }
    if (registerInfo.email === '') {
        view.setErrorMessage('error-email', 'Please input email')
    } else {
        view.setErrorMessage('error-email', '')
    }
    if (registerInfo.password === '') {
        view.setErrorMessage('error-password', 'Please input password')
    } else {
        view.setErrorMessage('error-password', '')
    }
    if (registerInfo.confirmPassword === '') {
        view.setErrorMessage('error-confirm-password', 'Please input confirm password')
        return
    } else if (registerInfo.confirmPassword !== registerInfo.password) {
        view.setErrorMessage('error-confirm-password', "Your password didn't match")
        return
    } else {
        view.setErrorMessage('error-confirm-password', '')
    }

    if (registerInfo.firstName && registerInfo.lastName && registerInfo.email && registerInfo.password) {
        model.register(registerInfo.firstName, registerInfo.lastName, registerInfo.email, registerInfo.password)
    }
}

controller.login = (loginInfo) => {
    if (loginInfo.email === '') {
        view.setErrorMessage('error-email', 'Please input email')
    } else {
        view.setErrorMessage('error-email', '')
    }
    if (loginInfo.password === '') {
        view.setErrorMessage('error-password', 'Please input password')
    } else {
        view.setErrorMessage('error-password', '')
    }

    if (loginInfo.email && loginInfo.password) {
        model.login(loginInfo.email, loginInfo.password)
    }
}

controller.createConversation = ({ title, friendEmail }) => {
    view.setErrorMessage('conversation-name-error', !title?'Please input title':'')
    view.setErrorMessage('conversation-email-error', !friendEmail?'Please input friend email':'')

    if(title && friendEmail){
        model.createConversation({
            title,
            users: [friendEmail, model.currentUser.email],
            createdAt: new Date().toISOString(),
            messages: []
        })
    }
}

