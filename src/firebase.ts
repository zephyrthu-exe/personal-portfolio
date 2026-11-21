import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({apiKey:'AIzaSyCpKkCi2s2eovu0p-xovIn9w4mFPBkC5Oo',authDomain:'portfolio-dxdd.firebaseapp.com',projectId:'portfolio-dxdd',storageBucket:'portfolio-dxdd.firebasestorage.app',messagingSenderId:'627861344324',appId:'1:627861344324:web:f9731fccf89fbdd726ac11'});
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const adminEmail = 'zephyrminthukha@gmail.com';
