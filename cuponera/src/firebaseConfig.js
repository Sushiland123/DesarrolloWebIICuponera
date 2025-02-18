// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDscY6VIiHNhRL_Q1S-GhUJXSEqB2DIMHI",
  authDomain: "desarrollo-web-ii-5d0cb.firebaseapp.com",
  projectId: "desarrollo-web-ii-5d0cb",
  storageBucket: "desarrollo-web-ii-5d0cb.firebasestorage.app",
  messagingSenderId: "211880810268",
  appId: "1:211880810268:web:d4304e2f959bd4f8728cd9",
  measurementId: "G-9N9V8FXV35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);