import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVOBCkugH9koPeUptUmppIR-sxN5SCoAc",
  authDomain: "learnlingo-14081.firebaseapp.com",
  databaseURL:
    "https://learnlingo-14081-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-14081",
  storageBucket: "learnlingo-14081.appspot.com",
  messagingSenderId: "210324805563",
  appId: "1:210324805563:web:8549197faff68f54a0169e",
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);
