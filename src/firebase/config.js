// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOJo8PdX4aaHN9BdXHjaN0ma6cg7PBgv8",
  authDomain: "sedra-project-2.firebaseapp.com",
  projectId: "sedra-project-2",
  storageBucket: "sedra-project-2.appspot.com",
  messagingSenderId: "145954651149",
  appId: "1:145954651149:web:2a90e6271271d731832944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
