import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBJ79qyVT5unjT7-v-jkX4Ado3ogA0tSE8",
    authDomain: "noccnoccbet.firebaseapp.com",
    projectId: "noccnoccbet",
    storageBucket: "noccnoccbet.appspot.com",
    messagingSenderId: "329387635274",
    appId: "1:329387635274:web:01a621d3dfcab2dfadacb3",
    measurementId: "G-MPTVG9H86Y"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);

export { app, storage };
export default db;
