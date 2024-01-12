// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDTzK_YKAOWjcfaqWuXTqDAMZOaRV7kbA",
  authDomain: "twitter-72afb.firebaseapp.com",
  projectId: "twitter-72afb",
  storageBucket: "twitter-72afb.appspot.com",
  messagingSenderId: "623278216478",
  appId: "1:623278216478:web:26559a17af47b7c3ea650f",
  measurementId: "G-YZF1HGP1B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);