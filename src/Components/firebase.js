// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmzq2ddFn7Qyx1lyhd4zQjyNhe_l5qKCY",
    authDomain: "blog-app-52b01.firebaseapp.com",
    projectId: "blog-app-52b01",
    storageBucket: "blog-app-52b01.appspot.com",
    messagingSenderId: "808853742234",
    appId: "1:808853742234:web:e72fa52cf6f9c2e7eef523",
    measurementId: "G-FHYDT6K27Y",
    databaseURL:"https://blog-app-52b01-default-rtdb.firebaseio.com"
  };
  
  debugger;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
