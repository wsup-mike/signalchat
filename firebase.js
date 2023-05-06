// // import * as firebase from "firebase"; //first import firebase
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// //Below to manually import the optional services we want:
// import "firebase/firestore";
import "firebase/auth";

// To initialize firebase:
// First here's your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCi3nH7srxwJbmEeo6DQNl2R2m8psPVuQI",
  authDomain: "signalchat-9ec52.firebaseapp.com",
  projectId: "signalchat-9ec52",
  storageBucket: "signalchat-9ec52.appspot.com",
  messagingSenderId: "818485681140",
  appId: "1:818485681140:web:9869ab4587c6e2d39d37a1",
  measurementId: "G-1K3GMHKFTS",
};

const app = initializeApp(firebaseConfig);

// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// Here to set up our database access
// const db = app.firestore();
const db = getFirestore(app);

// // Here set up firebase authentication variable
// const auth = getAuth(app);

export { db };
