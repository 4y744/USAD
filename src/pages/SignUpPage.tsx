//Import React hooks
import { useEffect, useState } from "react"

//Import React Router hooks
import { Link } from "react-router-dom"

//Import auth hooks
import { useSignUp } from "../hooks/auth";


export const SignUpPage = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [buttonPressed, setButtonPressed] = useState(false);

    const {SignUp, loading} = useSignUp();

    const handleSignUp = () => {
        setButtonPressed(true);
        if(password != confirmPassword) return handlePasswordMismatch();
        if(!username || !email || !password) return;
        SignUp(username, email, password);
    }

    const handlePasswordMismatch = () => {

    }

    

    return (
        <div className="flex justify-center items-center w-full my-36">
            <div className="flex justify-start items-start flex-col rounded-md p-6 shadow-md text-white bg-zinc-900 sm:w-96 w-80">
                <h1 className="text-2xl font-bold mb-1">Sign Up</h1>
                <span className="mb-2">Create an account to join and contribute.</span>

                <InputField type="text" placeholder="Username" setState={setUsername} error={!username && buttonPressed}/>
                <InputField type="text" placeholder="Email" setState={setEmail} error={!email && buttonPressed}/>
                <InputField type="password" placeholder="Password" setState={setPassword} error={!password && buttonPressed}/>
                <InputField type="password" placeholder="Confirm password" setState={setConfirmPassword} error={!confirmPassword && buttonPressed}/>

                <Link to="" className="text-sm font-semibold mb-2 text-green-700 hover:underline">Forgot my password</Link>

                <button className="bg-green-700 hover:bg-green-600 active:outline outline-offset-2 outline-2 outline-green-600
                w-full p-3 mt-2 rounded-md" onClick={handleSignUp}>Sign up</button>
            </div>
        </div>
    )
}

const InputField = (props : {type: string, placeholder: string, setState: React.Dispatch<React.SetStateAction<any>>, error: boolean}) => (
    <input className={`p-3 my-2 rounded-md w-full bg-zinc-800 
    focus:outline outline-offset-2 outline-2 outline-green-600 ${
       props.error ?  "outline outline-red-600" : "outline-green-600"
    }`}
    type={props.type} placeholder={props.placeholder}
    onChange={(event) => props.setState(event.target.value)}/>
)
  