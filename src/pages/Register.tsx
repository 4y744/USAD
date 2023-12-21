import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Register()
    {
        try
        {
            const user = await createUserWithEmailAndPassword(auth, email, password);
        }
        catch(err){console.log(err)}
    }

    return (
    <div>
        <h1>Register</h1>
        <input type="text" placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
        <input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}/>
        <button onClick={Register}>Register</button>
    </div>
    )
}