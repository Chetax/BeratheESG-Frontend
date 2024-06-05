import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCgbMrgf_41xalmwR3Q10BiAj9U_vZzJNM",
  authDomain: "breathe-esg-96ce3.firebaseapp.com",
  projectId: "breathe-esg-96ce3",
  storageBucket: "breathe-esg-96ce3.appspot.com",
  messagingSenderId: "842763722522",
  appId: "1:842763722522:web:916a92028f1766ed17d6a3",
  measurementId: "G-TVLN1C98TG",
  databaseUrl:"https://breathe-esg-96ce3-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);