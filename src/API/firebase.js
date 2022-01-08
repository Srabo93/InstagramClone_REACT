// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTNrrcRjiSmyRC14OVmOyi3rNfy5z9-I4",
  authDomain: "photo-gallery-d7cb4.firebaseapp.com",
  projectId: "photo-gallery-d7cb4",
  storageBucket: "photo-gallery-d7cb4.appspot.com",
  messagingSenderId: "556396338327",
  appId: "1:556396338327:web:d97ce3d2a659bb87919dd2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
