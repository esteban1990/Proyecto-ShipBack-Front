import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBFO6MMMUQOfIYmFch_BbXwMxmJ4uY-aJ8",
    authDomain: "shipback-76f0e.firebaseapp.com",
    databaseURL: "https://shipback-76f0e.firebaseio.com",
    projectId: "shipback-76f0e",
    storageBucket: "shipback-76f0e.appspot.com",
    messagingSenderId: "166491262839",
    appId: "1:166491262839:web:52c8fe1e93e82f939c9b72",
  };

  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();



