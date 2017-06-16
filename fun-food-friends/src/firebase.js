import firebase from 'firebase'
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBWc9XDwaCQB2JV6DtKWT8DvttWRb65io",
    authDomain: "fun-food-friends-66beb.firebaseapp.com",
    databaseURL: "https://fun-food-friends-66beb.firebaseio.com",
    projectId: "fun-food-friends-66beb",
    storageBucket: "fun-food-friends-66beb.appspot.com",
    messagingSenderId: "477605623166"
  };
  firebase.initializeApp(config);
  export default firebase;