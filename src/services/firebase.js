import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATxvpY8Eh6Cst8jvonLec7m6GAkmMmnp8",
    authDomain: "react-proyecto-3ddb6.firebaseapp.com",
    projectId: "react-proyecto-3ddb6",
    storageBucket: "react-proyecto-3ddb6.appspot.com",
    messagingSenderId: "953431362799",
    appId: "1:953431362799:web:acee1bfbd4d64a57c89f1a",
    measurementId: "G-REHT5GX5TZ"
}; 


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 


export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "item"));
    const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return products; 
}

export { db };