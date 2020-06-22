const controller = {}

controller.register = (registerInfo) => {
    if (registerInfo.firstName === '') {
        document.getElementById('error-first-name').innerText = 'Please input first name'
    }
}