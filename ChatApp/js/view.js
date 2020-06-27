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
            document.getElementById('display-name').innerHTML = model.currentUser.displayName
            console.log(model.currentUser)
            break
    }
}

view.setErrorMessage = (id, message) => {
    document.getElementById(id).innerText = message
}