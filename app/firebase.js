import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBbSgj11FI2BQlurhG3RV6RUhx_vFndRaU",
  authDomain: "neurolinguas-85aa2.firebaseapp.com",
  projectId: "neurolinguas-85aa2",
  storageBucket: "neurolinguas-85aa2.appspot.com",
  messagingSenderId: "914234553340",
  appId: "1:914234553340:web:c73bcf60d3f7caf6823879",
  measurementId: "G-850NRDTVJP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 
  const storage = getStorage(app);

export { db, auth, storage }; // Exporta el objeto auth