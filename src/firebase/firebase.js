import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsvbaU9eonk6lGyQ52pAv6IXrYMTNxbio",
  authDomain: "insta-clone-74b19.firebaseapp.com",
  projectId: "insta-clone-74b19",
  storageBucket: "insta-clone-74b19.appspot.com",
  messagingSenderId: "1062015628701",
  appId: "1:1062015628701:web:8ad869bf9121696f852b74",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};
