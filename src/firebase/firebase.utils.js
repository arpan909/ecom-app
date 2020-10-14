import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBBacrsAqee77wQZvPij7kccLdRStJx2lU",
  authDomain: "ecom-db-3d78a.firebaseapp.com",
  databaseURL: "https://ecom-db-3d78a.firebaseio.com",
  projectId: "ecom-db-3d78a",
  storageBucket: "ecom-db-3d78a.appspot.com",
  messagingSenderId: "389382480062",
  appId: "1:389382480062:web:2b60ba3c5578cc1c65beef",
  measurementId: "G-0RY8XT3N31",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
