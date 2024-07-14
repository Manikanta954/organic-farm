// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD57t8CClTNgwcgF5-Z86bFGYrPIJnIsnc",
//   authDomain: "organic-farm-39ec5.firebaseapp.com",
//   projectId: "organic-farm-39ec5",
//   storageBucket: "organic-farm-39ec5.appspot.com",
//   messagingSenderId: "957548368646",
//   appId: "1:957548368646:web:c6dc5370b90a30659fc487",
//   measurementId: "G-LT1HSK59JJ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD57t8CClTNgwcgF5-Z86bFGYrPIJnIsnc",
  authDomain: "organic-farm-39ec5.firebaseapp.com",
  projectId: "organic-farm-39ec5",
  storageBucket: "organic-farm-39ec5.appspot.com",
  messagingSenderId: "957548368646",
  appId: "1:957548368646:web:c6dc5370b90a30659fc487",
  measurementId: "G-LT1HSK59JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// eslint-disable-next-line no-unused-vars

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider,db };
