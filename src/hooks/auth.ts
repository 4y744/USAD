import { collection, getDoc } from 'firebase/firestore';
//Import React hooks
import { useEffect, useState } from "react";

//Import Firebase hooks
import { auth } from "./firebase"
import { User, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword, signOut } from "firebase/auth";

//Import Firebase hooks
import { doc, setDoc, writeBatch } from "firebase/firestore"; 
import { db } from "./firebase.ts";
import { useUsernameValidator } from './validate.ts';


// onAuthStateChanged(auth, (user) => {
    
// })


export const useSignUp = () : [(username: string, email: string, password: string, confirmPassword: string) => void, boolean, string] => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [validateUsername, usernameError] = useUsernameValidator();

    useEffect(() => {
        setError(usernameError);
    }, [usernameError])

    const SignUp = async (username: string, email: string, password: string, confirmPassword: string) => {
        if(username.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) return setError("input/empty-fields");
        if(!validateUsername(username)) return setError("auth/invalid-username");
        if((await getDoc(doc(db, "usernames", username))).exists()) return setError("auth/username-taken");

        await createUserWithEmailAndPassword(auth, email, password).then(() => {
            const batch = writeBatch(db);
            batch.set(doc(db, "users", auth.currentUser!.uid), {username: username});
            batch.set(doc(db, "usernames", username), {uid: auth.currentUser!.uid})
            batch.commit()
            .then(() => console.log("REDIRECT"))
            .catch((err) => setError(err.code));
        }).catch((err) => setError(err.code))

        setLoading(false);
    }

    return [SignUp, loading, error]
}

export const useSignIn = () : [(email: string, password: string) => void, boolean, string] => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const SignIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password).then(() => console.log("LOGGED"))
        .catch((err) => setError(err.code));
        setLoading(false);
    }

    return [SignIn, loading, error]
}

export const useSignOut = () : [() => void, boolean] => {
    const [loading, setLoading] = useState(true);

    const SignOut = async () => {
        await signOut(auth);
        setLoading(false);
    }

    return [SignOut, loading]
}

// export const useGetUsername = () : [(uid: string) => void, string] => {
//     const [username, setUsername] = useState("");
  
//     const getUsername = async (uid: string) => {
//       await setUsername((await getDoc(doc(db, "users", uid))).data()?.username)
//     }
  
//     return [getUsername, username]
//}

 
 
export const useGetUsername = () => {
    const [username, setUsername] = useState("");
    onAuthStateChanged(auth, () => {
        auth.currentUser && getDoc(doc(db, "users", auth.currentUser.uid)).then((doc) => {
            setUsername(doc.data()?.username);
        })
    })

    return username;
}