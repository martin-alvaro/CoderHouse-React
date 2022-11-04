import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxBzGOEQUbLUdyOdkao8NIdOSSz_ZNaYo",
  authDomain: "coderhouse-react-e93c3.firebaseapp.com",
  projectId: "coderhouse-react-e93c3",
  storageBucket: "coderhouse-react-e93c3.appspot.com",
  messagingSenderId: "526037410200",
  appId: "1:526037410200:web:dc8b879e87606be1cc4bed"
};

const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app)