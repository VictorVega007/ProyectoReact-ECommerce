import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCa1wxBoFGmG3XeDo8F83O4sY6KDf_Zmn8",
  authDomain: "proyectoreact-3ab0b.firebaseapp.com",
  projectId: "proyectoreact-3ab0b",
  storageBucket: "proyectoreact-3ab0b.appspot.com",
  messagingSenderId: "829896898173",
  appId: "1:829896898173:web:ab2deb2559cfec0d452314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getProductsDB = getFirestore(app);
