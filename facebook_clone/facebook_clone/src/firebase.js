// import  firebase from "./firebase";

// var firebaseConfig = {
//     //...
//     apiKey: "AIzaSyBaFI2pu9rODCOyjtXgZXxeaC3_9A_HyPY",
//   authDomain: "facebookclone-1b074.firebaseapp.com",
//   projectId: "facebookclone-1b074",
//   storageBucket: "facebookclone-1b074.appspot.com",
//   messagingSenderId: "723667842253",
//   appId: "1:723667842253:web:f0952fa50c19961a8ce584",
//   measurementId: "G-K9BH6QTB53"
//   };
//   firebase.initializeApp(firebaseConfig);
//   //const app = initializeApp(firebaseConfig);
//   export  default {firebase};
import firebase from 'firebase/compat/app';


const firebaseConfig = {
  apiKey: "AIzaSyBaFI2pu9rODCOyjtXgZXxeaC3_9A_HyPY",
  authDomain: "facebookclone-1b074.firebaseapp.com",
  projectId: "facebookclone-1b074",
  storageBucket: "facebookclone-1b074.appspot.com",
  messagingSenderId: "723667842253",
  appId: "1:723667842253:web:f0952fa50c19961a8ce584",
  measurementId: "G-K9BH6QTB53"
}

// Initialize Firebase and Firebase Authentication
firebase.initializeApp(firebaseConfig);
export {firebase}