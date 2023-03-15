import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3SS49_xanoQ1pxVFRv56MlqMK6DuMCMc",
    authDomain: "cool-clothing-db-f7319.firebaseapp.com",
    projectId: "cool-clothing-db-f7319",
    storageBucket: "cool-clothing-db-f7319.appspot.com",
    messagingSenderId: "446947272860",
    appId: "1:446947272860:web:b1c336c97431c842cb6559"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
}