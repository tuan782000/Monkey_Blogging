import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlbHlHFgDIjvWezek6TiT7_AsSOEOz7CI",
  authDomain: "monkey-blogging-ca62c.firebaseapp.com",
  projectId: "monkey-blogging-ca62c",
  storageBucket: "monkey-blogging-ca62c.appspot.com",
  messagingSenderId: "873485389891",
  appId: "1:873485389891:web:5fc0f508e190818bce84f6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);