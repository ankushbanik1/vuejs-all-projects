import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCCp2_2neRx44PEojnyzj1lQQEFmiaiJ9Q",
    authDomain: "ninja-smothie-b5279.firebaseapp.com",
    databaseURL: "https://ninja-smothie-b5279.firebaseio.com",
    projectId: "ninja-smothie-b5279",
    storageBucket: "ninja-smothie-b5279.appspot.com",
    messagingSenderId: "416109982678",
    appId: "1:416109982678:web:367f095ecc61e4ad"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()