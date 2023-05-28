// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr811Rz8CFUhxBpARTXgdzg3TB2QV8oeg",
  authDomain: "dentalplaza-376d3.firebaseapp.com",
  projectId: "dentalplaza-376d3",
  storageBucket: "dentalplaza-376d3.appspot.com",
  messagingSenderId: "774885901566",
  appId: "1:774885901566:web:7b5e9aa767f25064bf11af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);