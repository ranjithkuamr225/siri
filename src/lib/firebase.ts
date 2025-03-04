import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAE5z3fDxJaxp2ouxHrFPfr7cu6c5VAMCk",
  authDomain: "studio1-5716b.firebaseapp.com",
  projectId: "studio1-5716b",
  storageBucket: "studio1-5716b.appspot.com",
  messagingSenderId: "896621725440",
  appId: "1:896621725440:web:6484b00cd36b28f31455e5",
  measurementId: "G-J38J3L1DSK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);