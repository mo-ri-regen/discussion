import firebase from "firebase/app";

import "firebase/auth";  // 認証
import "firebase/firestore";  // DB

const firebaseApp:firebase.app.App = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db:firebase.firestore.Firestore = firebaseApp.firestore();
export const auth:firebase.auth.Auth = firebase.auth();