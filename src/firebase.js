// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase, ref, set, get, child} from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRQjRsgFBoqaoulHGJ3p-GDTXMXLzTda0",
  authDomain: "patodalavida-b2993.firebaseapp.com",
  databaseURL: "https://patodalavida-b2993-default-rtdb.firebaseio.com",
  projectId: "patodalavida-b2993",
  storageBucket: "patodalavida-b2993.firebasestorage.app",
  messagingSenderId: "406974321010",
  appId: "1:406974321010:web:f0295f60b50db0b95a4deb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function updateFavorites(favoritesArray) {
    set(ref(db, 'favorites'), favoritesArray);
        // favorites is the database name (collection),
        // favoritesArray is my array with all the favs, it wil
        // we don't add, firebase replaces old array with new!!
}
export async function getFavorites() {
    const dbRef = ref(db);
    try {
        const snapshot = await get(child(dbRef, "favorites"));
        if(snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return [];
        }
    }catch(error){
        console.error(error);
    }
}