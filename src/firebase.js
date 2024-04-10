// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNrpabIC_IJ2LyTyIcKMNiSWVqcC6VDSM",
  authDomain: "pearly-pets.firebaseapp.com",
  projectId: "pearly-pets",
  storageBucket: "pearly-pets.appspot.com",
  messagingSenderId: "726623601862",
  appId: "1:726623601862:web:43fabe3c0bc106697bc3c7",
  measurementId: "G-R3Z4MCJ5BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;