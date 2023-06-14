// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBHGsv8QpJH9R9NmhFkDMsKOP1sJnksQ7k",
    authDomain: "clone-a0a98.firebaseapp.com",
    projectId: "clone-a0a98",
    storageBucket: "clone-a0a98.appspot.com",
    messagingSenderId: "572903319347",
    appId: "1:572903319347:web:2dbd6c03bcba4cb2280046",
    measurementId: "G-2SHVLC2EWL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };