import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvIcJRqgu2J9F7osG5_oRw8aHly3N9s3o",
    authDomain: "socialmediaapp-cf633.firebaseapp.com",
    projectId: "socialmediaapp-cf633",
    storageBucket: "socialmediaapp-cf633.appspot.com",
    messagingSenderId: "1004151231094",
    appId: "1:1004151231094:web:1b45e0941c1656496d8557",
    measurementId: "G-SLGKX84SLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const dataBase = getFirestore(app);