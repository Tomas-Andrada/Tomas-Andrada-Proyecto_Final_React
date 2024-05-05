import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWy6m3DsRBOrHGNiiGMXA4oyO5dMmi41k",
  authDomain: "productosreact-bdca8.firebaseapp.com",
  projectId: "productosreact-bdca8",
  storageBucket: "productosreact-bdca8.appspot.com",
  messagingSenderId: "561171021169",
  appId: "1:561171021169:web:d6022e21c441239a1c8ad0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);