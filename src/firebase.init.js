// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxsNq7hn4GUHPYnyp0PBJSU1jk7qhR0Sg",
  authDomain: "dental-care-6b48a.firebaseapp.com",
  projectId: "dental-care-6b48a",
  storageBucket: "dental-care-6b48a.appspot.com",
  messagingSenderId: "391841693685",
  appId: "1:391841693685:web:5fe08d6d7af8d51c336abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default  auth ;