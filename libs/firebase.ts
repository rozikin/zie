import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId:"",
};

// initialize firebase

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;