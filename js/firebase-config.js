import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVeOISnuLXbV-JVv9ZPvMFkxICLEQxhe8",
  authDomain: "neu-library-sahipaa.firebaseapp.com",
  projectId: "neu-library-sahipaa",
  storageBucket: "neu-library-sahipaa.firebasestorage.app",
  messagingSenderId: "160591326304",
  appId: "1:160591326304:web:7c5e3c74d325bf7149a705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);