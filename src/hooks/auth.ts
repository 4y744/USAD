import { collection } from 'firebase/firestore';
//Import React hooks
import { useState } from "react";

//Import Firebase hooks
import { auth } from "./firebase"
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

//Import Firebase hooks
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase.ts";
import firebase from 'firebase/compat/app';

// onAuthStateChanged(auth, (user) => {
    
// })




export const useSignUp = () => {
    const [loading, setLoading] = useState(true);

    const SignUp = async (username: string, email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", auth.currentUser!.uid), {
            username: username
        });
        setLoading(false);
    }

    return {SignUp, loading}
}

export const useSignIn = () => {
    const [loading, setLoading] = useState(true);

    const SignIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
    }

    return {SignIn, loading}
}

export const useSignOut = () => {
    const [loading, setLoading] = useState(true);

    const SignOut = async (email: string, password: string) => {
        await signOut(auth);
        setLoading(false);
    }

    return {SignOut, loading}
}