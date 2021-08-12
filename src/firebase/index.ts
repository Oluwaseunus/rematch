import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  measureId: process.env.REACT_APP_FIREBASE_MEASURE_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

const initializeFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
  }
};

initializeFirebase();

export const database = firebase.database();
