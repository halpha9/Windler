import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCJ_RZMbSoMsrQFSPtAQQTdJL6KqUWcUmo",
    authDomain: "tinder-b6c0a.firebaseapp.com",
    projectId: "tinder-b6c0a",
    storageBucket: "tinder-b6c0a.appspot.com",
    messagingSenderId: "539826082108",
    appId: "1:539826082108:web:46eab8eab46a31bc060e39"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { database, auth };
