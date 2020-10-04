import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3N8aALigH6Np0Kl5c_OvLYriChZ-McjQ",
    authDomain: "react-instagram-clone-60f45.firebaseapp.com",
    databaseURL: "https://react-instagram-clone-60f45.firebaseio.com",
    projectId: "react-instagram-clone-60f45",
    storageBucket: "react-instagram-clone-60f45.appspot.com",
    messagingSenderId: "375368855592",
    appId: "1:375368855592:web:7ef32acc592958f990851d",
    measurementId: "G-JTQG3QH9YQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };