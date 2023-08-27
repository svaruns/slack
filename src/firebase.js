import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB4C1WTjgJLAZAE1yk0BOA44PGxq8DWFMY",
  authDomain: "slack-clone-a435d.firebaseapp.com",
  projectId: "slack-clone-a435d",
  storageBucket: "slack-clone-a435d.appspot.com",
  messagingSenderId: "1085637535774",
  appId: "1:1085637535774:web:a54239bf9dddabc6a9260f",
  measurementId: "G-E50STMKHTY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
