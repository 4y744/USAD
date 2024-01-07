import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../hooks/firebase";


export const LoginPage = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function SignIn()
    {
        try
        {
            const user = await signInWithEmailAndPassword(auth, email, password);
        }
        catch(err){console.log(err)}
    }

    return (
    <div>
        <h1>Log in</h1>
        <input type="text" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
        <input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
        <button onClick={SignIn}>Login</button>
    </div>
    )
}