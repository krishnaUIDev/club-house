import * as firebase from "firebase";
import { FIREBASE_APIKEY } from "@env";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "clubhouse-c0240.firebaseapp.com",
  projectId: "clubhouse-c0240",
  storageBucket: "clubhouse-c0240.appspot.com",
  messagingSenderId: "22968578632",
  appId: "1:22968578632:web:6d23dafa5b80a2b7bb1e7d",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const phoneAuthProvider = firebase.auth.PhoneAuthProvider();

export { db, auth, phoneAuthProvider };
