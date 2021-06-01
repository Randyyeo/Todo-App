import firebase from 'firebase/app'
import 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDjRxxU7ErdOKCpP2Lay7IewA8Kp-bCtOU",
    authDomain: "todo-70cc4.firebaseapp.com",
    projectId: "todo-70cc4",
    storageBucket: "todo-70cc4.appspot.com",
    messagingSenderId: "79341932152",
    appId: "1:79341932152:web:9ed6c7b169c43b9170678d",
    measurementId: "G-EPJZHC7BCR"
  };
  var app = null

  // Initialize Firebase
  if (!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig);
  }
  
  