import { getauth } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBqJYGuiUZk0jXqzrlDJql1zomHgS_PTfE",
  authDomain: "jueves-oct-6.firebaseapp.com",
  projectId: "jueves-oct-6",
  storageBucket: "jueves-oct-6.appspot.com",
  messagingSenderId: "56936551609",
  appId: "1:56936551609:web:a7469277176f28a4d47768",
  measurementId: "G-MLMCVH13VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getauth() 

export {app, auth}

