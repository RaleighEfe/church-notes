// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
//   projectID: NEXT_PUBLIC_PROJECT_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
// export default app;
"use client";
import { GoogleAuthProvider } from "firebase/auth";
import initFirebase from "@/services/firebase";
import "firebase/auth";
import "firebase/app";
import { useState } from "react";

initFirebase();

const provider = new GoogleAuthProvider();

export default function fireBase() {
  const [authorizing, setAuthorizing] = useState(false);
  const handleAuthentication = async () => {
    setAuthorizing(true);
  };
  return <div> </div>;
}
