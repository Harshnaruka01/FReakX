// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_TVnKDaCnuNPnlJh327pd6--z9JtdFsk",
  authDomain: "freakx-auth.firebaseapp.com",
  projectId: "freakx-auth",
  storageBucket: "freakx-auth.firebasestorage.app",
  messagingSenderId: "503716286515",
  appId: "1:503716286515:web:78ce40de5f6cfabdf3d346",
  measurementId: "G-W7R3PBQQ03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Verify Firebase is initialized
console.log('Firebase initialized:', {
  app: !!app,
  auth: !!auth,
  db: !!db,
  projectId: firebaseConfig.projectId
});

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Firebase Analytics initialization failed:', error);
  }
}

export { app, auth, db, analytics };