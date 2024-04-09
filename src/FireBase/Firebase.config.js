// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    const auth = getAuth(app);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPcaPwPgw_7TyqGhAf8QaDARU1SZzj1-M",
  authDomain: "real-state-b6e35.firebaseapp.com",
  projectId: "real-state-b6e35",
  storageBucket: "real-state-b6e35.appspot.com",
  messagingSenderId: "892029918080",
  appId: "1:892029918080:web:00dd55e25b904fdcbd7f65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default auth;