// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSVgl1dlmL_kXBicKQjDEaXRFRqFvjOC4",
  authDomain: "advmotos-685d4.firebaseapp.com",
  projectId: "advmotos-685d4",
  storageBucket: "advmotos-685d4.appspot.com",
  messagingSenderId: "83946379065",
  appId: "1:83946379065:web:9668ef5ff07c2c0bcffae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore initialize
const database = getFirestore(app) 

export default database