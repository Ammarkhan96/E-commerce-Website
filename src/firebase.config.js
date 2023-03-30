
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDCO4J67RoVFtXSuzZS5035sJ1Rtvwhvmk",
  authDomain: "flybuy-a57a9.firebaseapp.com",
  projectId: "flybuy-a57a9",
  storageBucket: "flybuy-a57a9.appspot.com",
  messagingSenderId: "761691451621",
  appId: "1:761691451621:web:27e36e7af857e5ed3ce40c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;