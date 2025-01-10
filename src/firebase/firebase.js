// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsKXvpzj_o-MTLyeqFJqaOKnZRBeNhL-k",
  authDomain: "pets-love-c6929.firebaseapp.com",
  projectId: "pets-love-c6929",
  storageBucket: "pets-love-c6929.firebasestorage.app",
  messagingSenderId: "523026318593",
  appId: "1:523026318593:web:20da8e97491721190e4700",
  measurementId: "G-4VC2H65J9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
