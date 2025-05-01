import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };