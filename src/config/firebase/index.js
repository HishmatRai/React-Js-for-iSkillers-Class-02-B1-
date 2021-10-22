import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAlD_8mqrovT5W9cjo0IFJxZ4ZmS-MJ6D0",
    authDomain: "app-test-19a74.firebaseapp.com",
    databaseURL: "https://app-test-19a74.firebaseio.com",
    projectId: "app-test-19a74",
    storageBucket: "app-test-19a74.appspot.com",
    messagingSenderId: "246326178182",
    appId: "1:246326178182:web:1006a76aeaf2b01f13fc07",
    measurementId: "G-ER5103EX21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;