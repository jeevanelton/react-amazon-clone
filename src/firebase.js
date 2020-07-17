import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAMfrDvUE6G8q-KPRPkp7HFr-yQD8jgLFs",
  authDomain: "clone-2b00b.firebaseapp.com",
  databaseURL: "https://clone-2b00b.firebaseio.com",
  projectId: "clone-2b00b",
  storageBucket: "clone-2b00b.appspot.com",
  messagingSenderId: "106974610957",
  appId: "1:106974610957:web:5f21e38508807f0f377744",
  measurementId: "G-NJKJWXLH0G",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
