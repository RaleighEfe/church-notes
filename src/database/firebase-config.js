// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  // apiKey: "AIzaSyCG7mXu1YbFNq77IHTtLaoA51FhVz_lRMk",
  // authDomain: "book-closet-ale3e.firebaseapp.com",
  // projectId: "book-closet-ale3e",
  // storageBucket: "book-closet-ale3e.appspot.com",
  // messagingSenderId: "285665367071",
  // appId: "1:285665367071:web:9f276e6c63dd8d8e70312a",
  // measurementId: "G-M2B6WQYGGG",
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectID: process.env.NEXT_PUBLIC_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export default app;
