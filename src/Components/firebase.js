// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl0QX524zh1jZNsPJKClwM_VSzpwyl8PQ",
  authDomain: "aludaweb.firebaseapp.com",
  projectId: "aludaweb",
  storageBucket: "aludaweb.appspot.com",
  messagingSenderId: "278480353553",
  appId: "1:278480353553:web:49033faa4df11a9d3bb4b0",
  measurementId: "G-WQFMPRDQVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };