// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDoW1tLt1p6vc-rVJCxn91RbxtJ8zyISjI",
    authDomain: "challenge-3f25c.firebaseapp.com",
    projectId: "challenge-3f25c",
    storageBucket: "challenge-3f25c.appspot.com",
    messagingSenderId: "670616874600",
    appId: "1:670616874600:web:669b5053b4f5ee544fd5dd",
    measurementId: "G-TGJPGZV8J7"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {db, auth};
