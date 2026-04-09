// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaEgkvsP601gRLH7RQ5wOQh2JFK5aHYFo",
  authDomain: "netflix-gpt-d4eb5.firebaseapp.com",
  projectId: "netflix-gpt-d4eb5",
  storageBucket: "netflix-gpt-d4eb5.firebasestorage.app",
  messagingSenderId: "25741715887",
  appId: "1:25741715887:web:bb1fa57fa1d7dcaa44a75a",
  measurementId: "G-9PSWKPRH8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);