import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD-JfsRaPETEtr-8GNtkpOHrGFTkqvE1wM",
    authDomain: "ecommerce-db-e7642.firebaseapp.com",
    projectId: "ecommerce-db-e7642",
    storageBucket: "ecommerce-db-e7642.appspot.com",
    messagingSenderId: "346544237576",
    appId: "1:346544237576:web:cdd3c5f9b72a03a5eef5bd",
    measurementId: "G-0X68K42095"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters ( { prompt  : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;