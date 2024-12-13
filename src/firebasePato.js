// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';
// Your web app’s Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQjRsgFBoqaovUHGJ3p-GDTXXML7cTda0',
  authDomain: 'patodalavida-b2993.firebaseapp.com',
  databaseURL: 'https://patodalavida-b2993-default-rtdb.firebaseio.com',
  projectId: 'patodalavida-b2993',
  storageBucket: 'patodalavida-b2993.appspot.com',
  messagingSenderId: '406974321010',
  appId: '1:406974321010:web:f0295f60b50dbb95a4de'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export function updateDatabaseFam(databaseFamArray) {
  set(ref(db, "databaseFam"), databaseFamArray);
}
export async function getDatabaseFam() {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, `databaseFam`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No data available');
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}









