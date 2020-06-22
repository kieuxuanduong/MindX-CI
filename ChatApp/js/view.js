const view = {}

view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML=components.welcomeScreen
    switch(screenName)
    {
        case 'registerScreen':
            document.getElementById('app').innerHTML = components.registerScreen
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit',(e)=>{
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
            break
    }
}