import style from '/src/css/input.module.css';
import {useState, useEffect} from 'react';
//import functionBuilder from './FunctionBuilder.tsx';

interface InputProps {
    type: string;
    inputs: Array<string>;
    function: string;
}


export function Input(props: InputProps)
{
    const [input_field, setInput_field] = useState("");
    const [input_box, setInput_box] = useState(Array<string>);
    const [result, setResult] = useState("0");
    const [algUrl, setAlgUrl] = useState("");
    //const errorMessage = `postMessage("ERROR");`;

    useEffect(() => {
        //setAlgUrl(URL.createObjectURL(new Blob([`
        //let run = (input) => {${getAlgorithm(props.function)}};
        //self.onmessage= (event) => run(event.data)`], {type: 'application/javascript'})));
        setAlgUrl(URL.createObjectURL(new Blob([`
        let run = (input) => {${atob(props.function)}};
        self.onmessage= (event) => run(event.data)`], {type: 'application/javascript'})));
    }, [])
    
    function convertToArray(input_str : string)
    {
        return input_str.split(/(?:,|[.]| |[a-z]|[\n])+/);
    }

    //Builds a JS script from the flow array
    // function getAlgorithm(arr_str : string)
    // {
    //     try
    //     {
    //         JSON.parse(atob(arr_str));
    //     }
    //     catch{
    //         return errorMessage;
    //     }
    //     let arr = JSON.parse(atob(arr_str));
    //     let alg_str = "";
    //     for(let i = 0; i < arr.length; i++) alg_str += functionBuilder(arr[i].args, arr[i].func);
    //     return alg_str;
    // }


    //Gets called on button pres
    function calculateAlgorithm(input_arr : Array<string>)
    {
        input_arr = input_arr.filter(val => val !== "");
        //Returns if the user hasn't inputted any values
        if(input_arr.length == 0) return;
        try{
            //Creates a worker using the user input and the blob 
            const worker = new Worker(algUrl);
            worker.postMessage(input_arr);
            worker.onmessage = (event) => {setResult(event.data);} 
            //Terminates the process after a short duration of time
            //Necessary to prevent infinite loops
            setTimeout(() => worker.terminate(), 1000)
        }
        catch(err) {console.log(err);}
    }

    //If the input type is a box renders this
    if(props.type == "box")
    {
        return (<>
            <div className={style["calculator-container"]}>
                {props.inputs.map((item : string, index : number) => (
                    <input onChange={(event) => {input_box[index] = event.target.value; setInput_box(input_box)}}  key={item} className={style["input-box"]} type="number" placeholder={item}/>
                ))}
                <div>
                    <button onClick={() => {calculateAlgorithm(input_box)}} className={style["calculate-button"]}>Изчисли</button>
                    <span className={style["output-label"]} id={style["output-label"]}>{result}</span>
                </div>
            </div> 
            </>)
    }
    //If the input type is a field or is undefined renders this
    return (<>
        <div className={style["calculator-container"]}>
            <textarea id="input-box" onChange={(event) => setInput_field(event.target.value)} className={style["input-field"]} placeholder={props.inputs[0]}></textarea>
            <div>
                <button onClick={() => {calculateAlgorithm(convertToArray(input_field))}} className={style["calculate-button"]}>Изчисли</button>
                <span className={style["output-label"]} id={style["output-label"]}>{result}</span>
            </div>
        </div> 
        </>)

    
    
}
 