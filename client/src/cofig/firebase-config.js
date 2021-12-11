import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// const firebaseConfig = {
//   apiKey: "AIzaSyBxYJtxjhQayOMxyc52NyTDrmtmY1CJrd0",
//   authDomain: "instagram-clone-d6074.firebaseapp.com",
//   projectId: "instagram-clone-d6074",
//   storageBucket: "instagram-clone-d6074.appspot.com",
//   messagingSenderId: "1021004168916",
//   appId: "1:1021004168916:web:7978e5267bc22b9f434541"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBiDUfjO9Mvr-loNpQBGJMXOryT5s2DviQ",
  authDomain: "socialmedia-app-8d050.firebaseapp.com",
  projectId: "socialmedia-app-8d050",
  storageBucket: "socialmedia-app-8d050.appspot.com",
  messagingSenderId: "143122934817",
  appId: "1:143122934817:web:53ef5e9c60e2ef42a90760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage() 