// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYBzmcunHEzRCb8XhFSffix-5x1mnahek",
  authDomain: "chat-app-be2a9.firebaseapp.com",
  projectId: "chat-app-be2a9",
  storageBucket: "chat-app-be2a9.appspot.com",
  messagingSenderId: "1031739628746",
  appId: "1:1031739628746:web:50ad051ad21996168fe833",
  measurementId: "G-7LFZESH08L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
