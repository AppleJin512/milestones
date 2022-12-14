// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBPKlZgYUEIxVenDb1H78l5F9MoLJjkB-w",
    authDomain: "milestones-adefc.firebaseapp.com",
    projectId: "milestones-adefc",
    storageBucket: "milestones-adefc.appspot.com",
    messagingSenderId: "525195921768",
    appId: "1:525195921768:web:6c1755a969f84a248a6edd",
    measurementId: "G-1X1W3YVRS8"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage }