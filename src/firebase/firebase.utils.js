import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
console.log("rrrr");

const config = {
  apiKey: "AIzaSyDN82G5IM4dLIsQ-E2hl15ODdKAL8rbFiI",
  authDomain: "cloth-shop-34578.firebaseapp.com",
  databaseURL: "https://cloth-shop-34578.firebaseio.com",
  projectId: "cloth-shop-34578",
  storageBucket: "cloth-shop-34578.appspot.com",
  messagingSenderId: "350616293822",
  appId: "1:350616293822:web:17faa129c119d7423429ef",
  measurementId: "G-9F6GVB19MW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  console.log("sign in with google");
  auth.signInWithPopup(provider);
};

export default firebase;
