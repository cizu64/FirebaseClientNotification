importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


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