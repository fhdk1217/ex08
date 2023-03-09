// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBIR-_1gtOZ2ZBXwR1iUP_iTJpthcsOT4",
  authDomain: "fir-a257e.firebaseapp.com",
  projectId: "fir-a257e",
  storageBucket: "fir-a257e.appspot.com",
  messagingSenderId: "297651934127",
  appId: "1:297651934127:web:9980ead1e962d62530955a",
  measurementId: "G-DYNLWG1DQ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);