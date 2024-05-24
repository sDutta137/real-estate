// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv';
dotenv.config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "realestate-80995.firebaseapp.com",
  projectId: "realestate-80995",
  storageBucket: "realestate-80995.appspot.com",
  messagingSenderId: "1065770231520",
  appId: "1:1065770231520:web:2c96843d75cf36431c9285",
  measurementId: "G-Z5FFLB3FNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };