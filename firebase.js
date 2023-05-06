import { initializeApp } from "firebase/app";
//To use the auth service
import { getAuth } from "firebase/auth";

//To use the firestore service
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

// Here to set up our database access
const db = getFirestore(app);

// // Here set up firebase authentication variable
const auth = getAuth(app);

export { db };
