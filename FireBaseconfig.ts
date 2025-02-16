// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY_iUPeAJpPnG_zVvA04OCflLqoI4MvRg",
  authDomain: "lectornfcdatos.firebaseapp.com",
  projectId: "lectornfcdatos",
  storageBucket: "lectornfcdatos.firebasestorage.app",
  messagingSenderId: "702174471222",
  appId: "1:702174471222:web:c18b38a87e1a21b4626497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//lo que añado 
//auth tengo los usuarios
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
//db tengo la base de datos
export const db = getFirestore(app);