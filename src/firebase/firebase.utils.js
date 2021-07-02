import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDls820VKSN7xiCUVmX_frR8xktAOOPazU",
  authDomain: "hostel-mart.firebaseapp.com",
  projectId: "hostel-mart",
  storageBucket: "hostel-mart.appspot.com",
  messagingSenderId: "329764116445",
  appId: "1:329764116445:web:baf7aa8de5be5506660834",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
