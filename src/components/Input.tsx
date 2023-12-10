import style from '/src/css/input.module.css';
import {useState} from 'react';

interface InputProps {
    type: string;
    inputs: Array<string>;
    algUrl: string;
}

function Input(props: InputProps)
{
    const [input_field, setInput_field] = useState("");
    const [input_box, setInput_box] = useState(Array<string>);
    const [result, setResult] = useState(0);

    function convertToArray(input_str : string)
    {
        return input_str.split(/(?:,|[.]| |[a-z]|[\n])+/);
    }




    //Gets called on button pres
    function calculateAlgorithm(input_arr : Array<string>)
    {
        input_arr = input_arr.filter(val => val !== "");
        //Returns if the user hasn't inputted any values
        if(input_arr.length == 0) return;

        try{
            //Creates a worker using the user input and the blob 
            const worker = new Worker(props.algUrl);
            worker.postMessage(input_arr);
            worker.onmessage = (event) => {setResult(event.data);} 

            //Terminates the process after a short duration of time
            //Necessary to prevent infinite loops
            setTimeout(() => worker.terminate(), 1000)
        }
        catch(err) {}
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
                    <button onClick={() => {calculateAlgorithm(input_box)}} className={style["calculate-button"]}>Calculate</button>
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
                <button onClick={() => {calculateAlgorithm(convertToArray(input_field))}} className={style["calculate-button"]}>Calculate</button>
                <span className={style["output-label"]} id={style["output-label"]}>{result}</span>
            </div>
        </div> 
        </>)

    
    
}

export default Input;