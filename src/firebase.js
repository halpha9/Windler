import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDrJzDdCwBo3wWXCGAXEXjFF0kRgGirtZg",
    authDomain: "windler-d5d4c.firebaseapp.com",
    projectId: "windler-d5d4c",
    storageBucket: "windler-d5d4c.appspot.com",
    messagingSenderId: "619094137854",
    appId: "1:619094137854:web:9e1e0871262cc6acdb3eaf",
    measurementId: "G-XH7GXX9CMK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;

  