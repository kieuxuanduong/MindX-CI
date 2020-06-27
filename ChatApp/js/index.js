window.onload = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA0d4x8L9I3moBCGXiBaqcEI5MQrDV2ltQ",
        authDomain: "chatapp-dd.firebaseapp.com",
        databaseURL: "https://chatapp-dd.firebaseio.com",
        projectId: "chatapp-dd",
        storageBucket: "chatapp-dd.appspot.com",
        messagingSenderId: "389335102992",
        appId: "1:389335102992:web:46a8c7e798ad604e877c95"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          model.currentUser = {
                displayName: user.displayName,
                email: user.email
            }
          view.setActiveScreen('chatScreen')
        } else {
          view.setActiveScreen('loginScreen')
        }
      });
    console.log(firebase.app().name)
    console.log('loaded!')
    // view.setActiveScreen('registerScreen')
    // view.setActiveScreen('loginScreen')
}