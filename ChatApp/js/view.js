const view = {}

view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = components.welcomeScreen
    switch (screenName) {
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const registerInfo = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(registerInfo)
            })

            const loginSpan = document.getElementById('redirect-to-login')
            loginSpan.addEventListener('click', (e) => {
                view.setActiveScreen('loginScreen')
            })
            break
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen
            const loginForm = document.getElementById('form-login')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const loginInfo = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(loginInfo)
            })
            const registerSpan = document.getElementById('redirect-to-register')
            registerSpan.addEventListener('click', (e) => {
                view.setActiveScreen('registerScreen')
            })
            break
        case 'chatScreen':
            document.getElementById('app').innerHTML = components.chatScreen
            const sendMessageForm = document.querySelector('#sendMessageForm')
            sendMessageForm.message.focus()
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                if (sendMessageForm.message.value.trim()) {
                    const message = {
                        owner: model.currentUser.email,
                        content: sendMessageForm.message.value,
                        createdAt: new Date().toISOString()
                    }
                    // view.addMessage(message)
                    model.addMessage(message)
                } else {
                    // alert('blank message?')
                }
            })
            model.loadConversations()
            model.listenConversationChange()
            break
    }
}

view.setErrorMessage = (id, message) => {
    document.getElementById(id).innerText = message
}

view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (message.owner === model.currentUser.email) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>
        `
    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>
        `
    }
    sendMessageForm.message.value = ''
    const listMessage = document.querySelector('.list-message')


    document.querySelector(".list-message").appendChild(messageWrapper);
    listMessage.scrollTop = listMessage.scrollHeight;
}

view.showCurrentConversation = () => {
    for (let oneMessage of model.currentConversation.messages) {
        view.addMessage(oneMessage)
    }
}

view.showConversation = () => {
    for (oneConversation of model.conversations) {
        view.addConversation(oneConversation)
    }
}

view.addConversation = (conversation) => {
    const conversationWrapper = document.createElement('div')
    conversationWrapper.classList.add('conversation')
    if (conversation.id === model.currentConversation.id) {
        conversationWrapper.classList.add('current')
    }
    conversationWrapper.innerHTML = `
        <div class ="conversation-title">${conversation.title}</div>
        <div class ="conversation-num-users">${conversation.users.length} users</div>
    `
    document.querySelector('.list-conversations').appendChild(conversationWrapper)
}