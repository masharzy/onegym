// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSTruhcA3uAgX-l2q3wKKepFqruDoNSIU",
  authDomain: "onegym-f75b6.firebaseapp.com",
  projectId: "onegym-f75b6",
  storageBucket: "onegym-f75b6.appspot.com",
  messagingSenderId: "902242663481",
  appId: "1:902242663481:web:51a0ee468482f61ab3a1e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth}