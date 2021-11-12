import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseinitializeauth = () => {
    initializeApp(firebaseConfig);
};

export default firebaseinitializeauth;