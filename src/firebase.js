import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIK,
  authDomain: process.env.REACT_APP_AUDOMAIN,
  projectId: process.env.REACT_APP_PROID,
  storageBucket: process.env.REACT_APP_STBUCKET,
  messagingSenderId: process.env.REACT_APP_MID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEAID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // Setup storage

export { db, auth, storage };
