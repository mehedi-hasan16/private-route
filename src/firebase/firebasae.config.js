// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAux-scPH60oCq1yqje_Z0pxK--dY3CqZo",
  authDomain: "email-password-auth-af6a0.firebaseapp.com",
  projectId: "email-password-auth-af6a0",
  storageBucket: "email-password-auth-af6a0.appspot.com",
  messagingSenderId: "652655516724",
  appId: "1:652655516724:web:2beecd4b251faebb147e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;