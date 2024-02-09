import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFVfCBxgYjlFFVlLLcN0GaKEOC-xqL33Y",
  authDomain: "kia-admin-1cda2.firebaseapp.com",
  projectId: "kia-admin-1cda2",
  storageBucket: "kia-admin-1cda2.appspot.com",
  messagingSenderId: "568010506843",
  appId: "1:568010506843:web:bed16823c83637c31e757e",
  measurementId: "G-RC12XSK48P",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
