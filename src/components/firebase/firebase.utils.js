import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvWPG-cbH0SHHMpQDy4wla0LretcDZHJw",
  authDomain: "crwn-clothing-9bbdd.firebaseapp.com",
  projectId: "crwn-clothing-9bbdd",
  storageBucket: "crwn-clothing-9bbdd.appspot.com",
  messagingSenderId: "165320848347",
  appId: "1:165320848347:web:de02bc109f6c1c43f5edfe",
  measurementId: "G-FSX90GDJ5E",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
