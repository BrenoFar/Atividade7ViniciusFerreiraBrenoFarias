import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5IK6y4GRGJ9TPPTqUxYP7AOsFz_tYYSA",
    authDomain: "crudatividade7viniciusferreira.firebaseapp.com",
    projectId: "crudatividade7viniciusferreira",
    storageBucket: "crudatividade7viniciusferreira.appspot.com",
    messagingSenderId: "669133046515",
    appId: "1:669133046515:web:cda5698b24595917b42d86"
  };
// Inicializa o Firebase

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getDatabase(app);

export {
    app,
    db,
    auth,
}