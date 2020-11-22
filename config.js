import * as firebase from 'firebase'
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaPb0g22QvBXVzO4XsIUslRSa6-O4rrBI",
    authDomain: "willy-app-e4d5c.firebaseapp.com",
    databaseURL: "https://willy-app-e4d5c.firebaseio.com",
    projectId: "willy-app-e4d5c",
    storageBucket: "willy-app-e4d5c.appspot.com",
    messagingSenderId: "439092584649",
    appId: "1:439092584649:web:b6a6b2002842eaa69ced18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
