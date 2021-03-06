import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD_wq6NdAvByd7GUcJCFWorEZY4MB03JRY",
    authDomain: "diary-app-148c0.firebaseapp.com",
    databaseURL: "https://diary-app-148c0.firebaseio.com",
    projectId: "diary-app-148c0",
    storageBucket: "diary-app-148c0.appspot.com",
    messagingSenderId: "731366878168",
    appId: "1:731366878168:web:ef6ce3253ce732b5ea20ad",
    measurementId: "G-SD6GX8MB6E"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
