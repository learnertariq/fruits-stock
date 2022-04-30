// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7CQ2OfejTtoTu2Jnqqeq3Vz-Ei4T_Rqk",
  authDomain: "fruits-stock-93d52.firebaseapp.com",
  projectId: "fruits-stock-93d52",
  storageBucket: "fruits-stock-93d52.appspot.com",
  messagingSenderId: "914835548923",
  appId: "1:914835548923:web:a4c898c9b0781a67791e5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
