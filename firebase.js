// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-2tHzmTbyCsS84yPqQRxENWBlNZPxUJU",
  authDomain: "pm-1ly.firebaseapp.com",
  projectId: "pm-1ly",
  storageBucket: "pm-1ly.firebasestorage.app",
  messagingSenderId: "403368489444",
  appId: "1:403368489444:web:6f0010fdfdace60347d7f1",
  measurementId: "G-GC510QCT11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);