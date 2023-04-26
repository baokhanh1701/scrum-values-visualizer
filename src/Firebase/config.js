// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy5UWm7zDQBF23X4UaFiDNa8jlTaeaZYM",
  authDomain: "beehexa-sc-personal-visualizer.firebaseapp.com",
  projectId: "beehexa-sc-personal-visualizer",
  storageBucket: "beehexa-sc-personal-visualizer.appspot.com",
  messagingSenderId: "477230948083",
  appId: "1:477230948083:web:67237adaa6eb5bcacbe186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//database
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };