import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {firebaseConfig} from "../config";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, db, googleAuthProvider};