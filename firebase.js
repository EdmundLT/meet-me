import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCwh7XZIHaR0bNgIUF-Z2fBlYgW_BuHSWc",
  authDomain: "meetme-5a7be.firebaseapp.com",
  projectId: "meetme-5a7be",
  storageBucket: "meetme-5a7be.appspot.com",
  messagingSenderId: "921545325438",
  appId: "1:921545325438:web:619f6ae95f355eb489512f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
