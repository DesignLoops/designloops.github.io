// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCirJL80pSRRztuFhXcuKrtQfQBiK5vc5c",
  authDomain: "designloops-d430e.firebaseapp.com",
  projectId: "designloops-d430e",
  storageBucket: "designloops-d430e.appspot.com",
  messagingSenderId: "203635670512",
  appId: "1:203635670512:web:a7547cc54163850059f135",
  measurementId: "G-LLJXPRXDBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);