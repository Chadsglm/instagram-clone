import firebase from "firebase";

const firebaseConfig = {
  // Add Your API Details
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };