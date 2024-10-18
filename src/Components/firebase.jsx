// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWFXKRcvhNc_p8cUFlrmB0DRBlxV_QN8M",
  authDomain: "netflix-a913c.firebaseapp.com",
  projectId: "netflix-a913c",
  storageBucket: "netflix-a913c.appspot.com",
  messagingSenderId: "445106440955",
  appId: "1:445106440955:web:370bbee62bc2a33adbfe5e",
  measurementId: "G-HHQZ8C2J7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();