import firebaseConfig from "../firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";

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
const signIn = async (user) => {
  const userSignIn = await signInWithEmailAndPassword(
    auth,
    user.username,
    user.password
  );
  return userSignIn;
};

// user Authorization
const Authentication = async (user) => {
  const userAuth = await onAuthStateChanged(auth, user.user);
    // const uid = user.uid;
  return userAuth;
};


//sign out


// Reset password

const authExports = {
  signup,
  signInWithGoogle,
  signIn,
  Authentication,
};

export default authExports;

