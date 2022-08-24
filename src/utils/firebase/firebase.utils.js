import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4G-bk9OMQ5DvetjH1AITyED0N7M-EM6Q",
    authDomain: "chara-bd5d5.firebaseapp.com",
    projectId: "chara-bd5d5",
    storageBucket: "chara-bd5d5.appspot.com",
    messagingSenderId: "963352821627",
    appId: "1:963352821627:web:455263829685dc5b2d07de"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);


  export const auth = getAuth();

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  
