import firebase from 'firebase/app'
import 'firebase'
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
  var app = null

  // Initialize Firebase
  if (!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig);
  }
  
  