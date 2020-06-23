const controller = {}

controller.register = (registerInfo) => {
    if (registerInfo.firstName === '') {
        document.getElementById('error-first-name').innerText = 'Please input first name'
    } else {
        document.getElementById('error-first-name').innerText = ''
    }

    if (registerInfo.lastName === '') {
        document.getElementById('error-last-name').innerText = 'Please input last name'
    } else {
        document.getElementById('error-last-name').innerText = ''
    }
    if (registerInfo.email === '') {
        document.getElementById('error-email').innerText = 'Please input email'
    } else {
        document.getElementById('error-email').innerText = ''
    }
    if (registerInfo.password === '') {
        document.getElementById('error-password').innerText = 'Please input password'
    } else {
        document.getElementById('error-password').innerText = ''
    }
    if (registerInfo.confirmPassword === '') {
        document.getElementById('error-confirm-password').innerText = 'Please input confirm password'
    } else {
        if (registerInfo.confirmPassword !== registerInfo.password) {
            document.getElementById('error-confirm-password').innerText = "Your password didn't match"
        } else {
            document.getElementById('error-confirm-password').innerText = ''
        }
    }
}

controller.login = (loginInfo) => {
    if (loginInfo.email === '') {
        document.getElementById('error-email').innerText = 'Please input email'
    } else {
        document.getElementById('error-email').innerText = ''
    }
    if (loginInfo.password === '') {
        document.getElementById('error-password').innerText = 'Please input password'
    } else {
        document.getElementById('error-password').innerText = ''
    }
}