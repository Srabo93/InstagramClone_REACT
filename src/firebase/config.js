import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyCTNrrcRjiSmyRC14OVmOyi3rNfy5z9-I4",
  authDomain: "photo-gallery-d7cb4.firebaseapp.com",
  projectId: "photo-gallery-d7cb4",
  storageBucket: "photo-gallery-d7cb4.appspot.com",
  messagingSenderId: "556396338327",
  appId: "1:556396338327:web:d97ce3d2a659bb87919dd2",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
export const db = getFirestore();
