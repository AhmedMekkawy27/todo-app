
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseApp = initializeApp({

    apiKey: "AIzaSyA-AOIVxcHFNm_wMOmupkiWq27GWG0u0FA",

    authDomain: "todo-list-fe261.firebaseapp.com",

    projectId: "todo-list-fe261",

    storageBucket: "todo-list-fe261.appspot.com",

    messagingSenderId: "943923593202",

    appId: "1:943923593202:web:7aa45b3b39050ba1cb356b",

    measurementId: "G-CJ2XYEZ2CX"

});
const db = getFirestore(firebaseApp);

export default db;