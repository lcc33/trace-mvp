
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBdoKucolU7CHxXFK7HFO7IXD19pLQQhaE",
  authDomain: "tracevault-6d151.firebaseapp.com",
  projectId: "tracevault-6d151",
  storageBucket: "tracevault-6d151.firebasestorage.app",
  messagingSenderId: "78588631265",
  appId: "1:78588631265:web:801572dc39dc8144287fa0",
  measurementId: "G-P3645X6MHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);