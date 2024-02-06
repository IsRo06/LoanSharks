import {getFirestore} from "@firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBvn4x0naAnqK-gAB7WHgWOtrAav8vLqi0",
  authDomain: "loansharks-a9621.firebaseapp.com",
  projectId: "loansharks-a9621",
  storageBucket: "loansharks-a9621.appspot.com",
  messagingSenderId: "596688882216",
  appId: "1:596688882216:web:9de2872c35793d8877c31d"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
