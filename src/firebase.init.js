// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIyohsHPwYYCwzXl54fqKGMG5Ahpk6M-g",
    authDomain: "router-firebase-integrat-30ded.firebaseapp.com",
    projectId: "router-firebase-integrat-30ded",
    storageBucket: "router-firebase-integrat-30ded.appspot.com",
    messagingSenderId: "52515721782",
    appId: "1:52515721782:web:a324d376c4b54eee8f3e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;