// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeU5i6ALjIRv-tGztJ_jySpjZGojKzl_0",
  authDomain: "ai-calc-1fcde.firebaseapp.com",
  databaseURL: "https://ai-calc-1fcde-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ai-calc-1fcde",
  storageBucket: "ai-calc-1fcde.firebasestorage.app",
  messagingSenderId: "35501675944",
  appId: "1:35501675944:web:d368660f789d239863b99d",
  measurementId: "G-MDXSD60XR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);