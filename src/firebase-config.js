import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMQGDLUKqHqWyFa98LxVJfprn8l_FBMos",
  authDomain: "react-facebook-a853a.firebaseapp.com",
  projectId: "react-facebook-a853a",
  storageBucket: "react-facebook-a853a.appspot.com",
  messagingSenderId: "140529463723",
  appId: "1:140529463723:web:f19c839d7147e823e0e2ee"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);