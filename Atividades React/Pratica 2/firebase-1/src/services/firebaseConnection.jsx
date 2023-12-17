// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrpTcnbo-G9CszOuYiozSDi9G-uMEhBkY",
  authDomain: "topicos-fd29f.firebaseapp.com",
  projectId: "topicos-fd29f",
  storageBucket: "topicos-fd29f.appspot.com",
  messagingSenderId: "926453040895",
  appId: "1:926453040895:web:e86aea68a8faf54142eeca"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db =getFirestore(firebaseApp)
export {db}