// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXLPfTVcJlWUz_kdlXVF45OOO-qlPeTA0",
  authDomain: "reactcrud-fe10d.firebaseapp.com",
  projectId: "reactcrud-fe10d",
  storageBucket: "reactcrud-fe10d.appspot.com",
  messagingSenderId: "1033560978071",
  appId: "1:1033560978071:web:53b29ecbcbe8c392196fd2",
  measurementId: "G-CYXHJ072KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);