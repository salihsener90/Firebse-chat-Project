// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBvBj8QHPuA3MO2GrVC4HwEbqJru_HImkw",
  authDomain: "chat-project-c7161.firebaseapp.com",
  projectId: "chat-project-c7161",
  storageBucket: "chat-project-c7161.appspot.com",
  messagingSenderId: "1038669345389",
  appId: "1:1038669345389:web:2c6706643cf50e66ec8564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//auth referansını alma
export const auth = getAuth(app)
//sağlayıcınınn  kurulumunu yapma
export const provider = new GoogleAuthProvider()
//veritanının refransını alma
export const db = getFirestore(app); 