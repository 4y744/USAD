import { useState } from "react"

export const useUsernameValidator = () : [(username: string) => boolean, string] => {
    const [error, setError] = useState("");
    
    const validateUsername = (username: string) => {

        return true;
    }

    return [validateUsername, error]
}

// export const usePasswordValidator = () : [(password: string, confirmPassword: string) => boolean | true | (() => boolean), string] => {
//     const [error, setError] = useState("");
    
//     const validatePassword = (password: string, confirmPassword: string) => {
//         password.length == 0 || confirmPassword.length == 0 && setError("input/empty-fields")
//         password != confirmPassword && setError("input/password-mismatch");


//         return (password.length > 0 && confirmPassword.length > 0 ? true : () => {setError("input/password-mismatch"); return false})
//             && (password == confirmPassword ? true : () => {setError("input/empty-fields"); return false});
            
//     }

//     return [validatePassword, error]
// }

// export const useEmailValidator = () : [(email: string) => boolean, string] => {
//     const [error, setError] = useState("");
    
//     const validateEmail = (email: string) => {
//         email.length == 0 && setError("input/empty-fields");
//         return email.length > 0;
//     }

//     return [validateEmail, error]
// }