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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    console.log("in the snap");
    const { displayName, email } = userAuth;
    const createdAt = Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
