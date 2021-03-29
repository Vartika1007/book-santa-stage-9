import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDQn-fm5RLvmExS1VUamaf5_gE6o6pkqIA",
        authDomain: "book-santa-11705.firebaseapp.com",
        databaseURL: "https://book-santa-11705.firebaseio.com",
        projectId: "book-santa-11705",
        storageBucket: "book-santa-11705.appspot.com",
        messagingSenderId: "570024860444",
        appId: "1:570024860444:web:56fe074322d99210e078d9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
