import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_R8vct_wDbYSiNVV2qwMEHV8U-LPpA8M",
    authDomain: "clone-with-reactjs-95611.firebaseapp.com",
    projectId: "clone-with-reactjs-95611",
    storageBucket: "clone-with-reactjs-95611.appspot.com",
    messagingSenderId: "452657718042",
    appId: "1:452657718042:web:b3c8f04b028bb79c7282a3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider();

export { db, auth, provider }