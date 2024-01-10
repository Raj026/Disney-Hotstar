// import firebase from "firebase"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvpbqnymMoiumtX3ueGZyMr61YUUdoZOI",
  authDomain: "disneyplus-clone-dd4d9.firebaseapp.com",
  projectId: "disneyplus-clone-dd4d9",
  storageBucket: "disneyplus-clone-dd4d9.appspot.com",
  messagingSenderId: "797074617985",
  appId: "1:797074617985:web:55c1812f8ea5765dbcff80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;