// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbyAknLybMne2CXt1CAu3z7m0ev8-Zck",
  authDomain: "auth-context-router-firebase.firebaseapp.com",
  projectId: "auth-context-router-firebase",
  storageBucket: "auth-context-router-firebase.appspot.com",
  messagingSenderId: "725624313806",
  appId: "1:725624313806:web:4fa5f2b317727aa817fd9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
export default auth;