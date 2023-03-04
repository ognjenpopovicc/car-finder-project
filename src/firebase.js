// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ImvsZlvz7uQnHxXfgmYTx64NPJrp0a8",
  authDomain: "car-finder-e01fa.firebaseapp.com",
  projectId: "car-finder-e01fa",
  storageBucket: "car-finder-e01fa.appspot.com",
  messagingSenderId: "387647516172",
  appId: "1:387647516172:web:4a11aa108c00c103fc8829",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
