import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAYBzmcunHEzRCb8XhFSffix-5x1mnahek",
  authDomain: "chat-app-be2a9.firebaseapp.com",
  projectId: "chat-app-be2a9",
  storageBucket: "chat-app-be2a9.appspot.com",
  messagingSenderId: "1031739628746",
  appId: "1:1031739628746:web:50ad051ad21996168fe833",
  measurementId: "G-7LFZESH08L",
};
const app = initializeApp(firebaseConfig);
export { getAuth, onAuthStateChanged };
// const analytics = getAnalytics(app);
