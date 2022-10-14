// import { getauth } from 'firebase/auth'
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyBqJYGuiUZk0jXqzrlDJql1zomHgS_PTfE",
//   authDomain: "jueves-oct-6.firebaseapp.com",
//   projectId: "jueves-oct-6",
//   storageBucket: "jueves-oct-6.appspot.com",
//   messagingSenderId: "56936551609",
//   appId: "1:56936551609:web:a7469277176f28a4d47768",
//   measurementId: "G-MLMCVH13VK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getauth() 

// export {app, auth}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const firebaseStorage=getStorage(app)

//const analytics = getAnalytics(app);
export const auth= getAuth(app);


export default app



