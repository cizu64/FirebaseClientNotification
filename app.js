  
  // Initialize Firebase
  var config = {
    apiKey: "Api Key goes here",
    authDomain: "projectid.firebaseapp.com",
    databaseURL: "https://projectid.firebaseio.com",
    projectId: "projectid",
    storageBucket: "projectid.appspot.com",
    messagingSenderId: ""
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

