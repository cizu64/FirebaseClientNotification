  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhIdrBSI_eT4X4I85Pe1egSl6x5SQG7t0",
    authDomain: "fcmtest-5abf4.firebaseapp.com",
    databaseURL: "https://fcmtest-5abf4.firebaseio.com",
    projectId: "fcmtest-5abf4",
    storageBucket: "fcmtest-5abf4.appspot.com",
    messagingSenderId: "696782442490"
  };
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();
  messaging.requestPermission().then(function() {
     //getToken(messaging);
     return messaging.getToken();
  }).then(function(token){
  console.log(token);
  })
.catch(function(err) {
  console.log('Permission denied', err);
});

