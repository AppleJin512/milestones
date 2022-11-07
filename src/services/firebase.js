// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKlZgYUEIxVenDb1H78l5F9MoLJjkB-w",
  authDomain: "milestones-adefc.firebaseapp.com",
  projectId: "milestones-adefc",
  storageBucket: "milestones-adefc.appspot.com",
  messagingSenderId: "525195921768",
  appId: "1:525195921768:web:6c1755a969f84a248a6edd",
  measurementId: "G-1X1W3YVRS8"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;