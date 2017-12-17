importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


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
