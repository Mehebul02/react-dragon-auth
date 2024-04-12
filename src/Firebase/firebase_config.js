// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh_DKurIEbw7-kG_k7leAHlnoJlAjyF4U",
  authDomain: "react-dragon-news-auth-5bc78.firebaseapp.com",
  projectId: "react-dragon-news-auth-5bc78",
  storageBucket: "react-dragon-news-auth-5bc78.appspot.com",
  messagingSenderId: "325379825929",
  appId: "1:325379825929:web:44626c56bd2dbae571b3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app