import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAq4ITtogYa4CDtTubB9kC4ccutVBj--0",
  authDomain: "museum-6c0e4.firebaseapp.com",
  projectId: "museum-6c0e4",
  storageBucket: "museum-6c0e4.appspot.com",
  messagingSenderId: "442209168585",
  appId: "1:442209168585:web:9cbcafdbb5e1b581c9f118",
  measurementId: "G-YH4GKN637Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);