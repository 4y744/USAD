//Import React hooks
import { useEffect, useState } from "react"

//Import React Router hooks
import { Link } from "react-router-dom"

//Import auth hooks
import { useSignIn } from "../hooks/auth";

export const SignInPage = () => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [currentError, setCurrentError] = useState("");
    const [buttonPressed, setButtonPressed] = useState(false);

    const [SignIn, loading, error] = useSignIn();

    const handleSignIn = () => {
        setButtonPressed(true);

        SignIn(email, password);
    }

    useEffect(() => {
        setCurrentError(error);
    }, [error])

  
    return (
        <div className="flex justify-center items-center w-full my-36">
            <div className="flex justify-start items-start flex-col rounded-md p-6 shadow-md text-white bg-zinc-900 sm:w-96 w-80">
                <h1 className="text-2xl font-bold mb-1">Sign In</h1>
                <span className="mb-2">Sign into your account.</span>
                <InputField type="text" placeholder="Email" setState={setEmail} fieldError={!email && buttonPressed}/>
                <InputField type="password" placeholder="Password" setState={setPassword} fieldError={!password && buttonPressed}/>
                <span className="text-red-600 font-bold text-sm h-4">{currentError}</span>
                <Link to="" className="text-sm font-semibold my-1 text-green-700 hover:underline">Forgot my password</Link>

                <button className="bg-green-700 hover:bg-green-600 active:outline outline-offset-2 outline-2 outline-green-600
                w-full p-3 mt-2 rounded-md" onClick={handleSignIn}>Sign in</button>
                <span className="text-zinc-300 text-sm w-full text-center mt-1">
                    Don't have an account? 
                    <Link to="/signup" className="text-green-600 font-bold ml-1 hover:underline">Sign up!</Link>
                </span>
            </div>
        </div>
    )

}

const InputField = (props : {type: string, placeholder: string, setState: React.Dispatch<React.SetStateAction<any>>, fieldError: boolean}) => (
    <div className="flex flex-col w-full mt-3 mb-1">
        <input className={`p-3 rounded-md bg-zinc-800 
        focus:outline outline-offset-2 outline-2 outline-green-600 ${
       props.fieldError ? "outline outline-red-600" : "outline-green-600"
        }`}
        type={props.type} placeholder={props.placeholder}
        onChange={(event) => props.setState(event.target.value)}/>
    </div>

)