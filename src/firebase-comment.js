import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//phle yeh tha
// const firebaseConfig = {
//     apiKey: "AIzaSyCL3G1AYsmqjj0ksRqBxZeSl9i5X6IXLF0",
//     authDomain: "portfolio-website-f587e.firebaseapp.com",
//     projectId: "portfolio-website-f587e",
//     storageBucket: "portfolio-website-f587e.firebasestorage.app",
//     messagingSenderId: "471461018678",
//     appId: "1:471461018678:web:44262c1a407b1f6884ec97",
//     measurementId: "G-9YM110GJX6"
//   };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5RTprSnjuJZ8tlfvDajF0fxa6qNccowA",
  authDomain: "final-portfilio.firebaseapp.com",
  projectId: "final-portfilio",
  storageBucket: "final-portfilio.firebasestorage.app",
  messagingSenderId: "161590000849",
  appId: "1:161590000849:web:e37c06de9778fdce5099f0",
  measurementId: "G-YCW9QM187G"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };