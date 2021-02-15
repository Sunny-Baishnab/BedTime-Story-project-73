import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAmsaBT85vgi8o9QEWDd3MPf5fI6jSYKBs",
    authDomain: "story-hub-f81b9.firebaseapp.com",
    projectId: "story-hub-f81b9",
    storageBucket: "story-hub-f81b9.appspot.com",
    messagingSenderId: "493296499329",
    appId: "1:493296499329:web:cc9b05d40b57c43340ab80"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()