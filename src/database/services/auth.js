import firebaseConfig from "../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Signup

const auth = getAuth(firebaseConfig);
const provider = new GoogleAuthProvider();

//logic to register user
const signup = async (email, password) => {
  const userInfo = await createUserWithEmailAndPassword(auth, email, password);
  return userInfo;
};

//logic to signup with google
const signInWithGoogle = async () => {
  const userGoogleInfo = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(userGoogleInfo);
  const token = credential.accessToken;
  const user = userGoogleInfo.user;

  return user;
};

// SignIn
const signIn = async () => {
  const userSignIn = await signInWithEmailAndPassword(
    auth,
    user.username,
    user.password
  ).then((userCredential) => {
    // Signed in
    router.push("/dashboard");
  });
  return userSignIn;
  //   .then((userCredential) => {
  //     // Signed in
  //     router.push("/dashboard");
  //   });
};

// user Authorization

// Reset password

const authExports = {
  signup,
  signInWithGoogle,
  signIn,
};

export default authExports;

//.then logic to handle error for user signup
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
