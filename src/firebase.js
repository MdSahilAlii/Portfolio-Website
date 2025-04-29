import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL3G1AYsmqjj0ksRqBxZeSl9i5X6IXLF0",
  authDomain: "portfolio-website-f587e.firebaseapp.com",
  projectId: "portfolio-website-f587e",
  storageBucket: "portfolio-website-f587e.firebasestorage.app",
  messagingSenderId: "471461018678",
  appId: "1:471461018678:web:44262c1a407b1f6884ec97",
  measurementId: "G-9YM110GJX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };