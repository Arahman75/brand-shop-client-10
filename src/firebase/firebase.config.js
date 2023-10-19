// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3yb5bXssIlidwsqYZ0mCrKfva0hUhaMQ",
    authDomain: "automotive-brand-321a1.firebaseapp.com",
    projectId: "automotive-brand-321a1",
    storageBucket: "automotive-brand-321a1.appspot.com",
    messagingSenderId: "170881166210",
    appId: "1:170881166210:web:2bb3dcc0262c45f2a43d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
