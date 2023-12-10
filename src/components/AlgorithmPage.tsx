interface alg_interface{
    id: number;
    name: string;
    input_type: string;
    inputs: Array<string>;
    function: string;
}

import Input from './Input.tsx';
import functionBuilder from './FunctionBuilder.tsx';
import {useState} from 'react';

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.tsx";

function AlgorithmPage()
{
    const docRef = doc(db, "algorithms/DaXmIPKYUg4bigOqnSb2");

    const [alg, setAlg] = useState<alg_interface>();
    const [algUrl, setAlgUrl] = useState("");
    let worker_func = `
    `;
    const errorMessage = `let run = (input) => {console.log("ERROR");};
    self.onmessage= (event) => run(event.data)`;

    const [isLoading, setLoading] = useState(true);




    async function readDoc()
    {
        //Tries to get the document from Firestore
        try{
            const snapshot = await getDoc(docRef);
            let docData = snapshot.data();
            setAlg(docData as alg_interface);
            worker_func = `
            let run = (input) => {${getAlgorithm(docData!.function)}};
            self.onmessage= (event) => run(event.data)`;
        }
        catch{}

        //docData is used instead of alg, because
        

        //Creates a blob from the script and maps it to an URL
        setAlgUrl(URL.createObjectURL(new Blob([worker_func], {type: 'application/javascript'})));
        setLoading(false);
    }
    
    //Builds a JS script from the flow array
    function getAlgorithm(arr_str : string)
    {
        try
        {
            JSON.parse(atob(arr_str));
        }
        catch{
            return errorMessage;
        }
        let arr = JSON.parse(atob(arr_str));
        let alg_str = "";
        for(let i = 0; i < arr.length; i++) alg_str += functionBuilder(arr[i].args, arr[i].func);
        return alg_str;
    }

    //TODO: ADD PROPER EVENT FOR CATCH
    if(isLoading == true)
    {
        try{readDoc();}
        catch(err){
            setLoading(false);   
        }
    }


    //Displays while the page is loading
    if (isLoading) 
    {
        return <div>Loading...</div>;
    }

    //If the Firestore document isn't found returns 404
    if(alg == undefined)
    {
        //TODO: Create a 404 component and add it here
        return <div>404</div>
    }
    return (
        <>
            <Input inputs={alg.inputs || [""]} type={alg!.input_type || "field"} algUrl={algUrl}></Input>
            <p></p>
        </>
    )
}

export default AlgorithmPage;