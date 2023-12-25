
//Import components
import {Input} from '../containers/Input.tsx';
import {NotFoundPage} from './NotFoundPage.tsx';
//Import css files
import style from '/src/css/algorithm.module.css';
//Import react hooks
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
//Import Firebase hooks
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.ts";


interface alg_interface{
    name: string;
    description: string;
    input_type: string;
    inputs: Array<string>;
    function: string;
}

export function AlgorithmPage()
{
    const [alg, setAlg] = useState<alg_interface>();
    const [isLoading, setLoading] = useState(true);
    const [canAccess, setCanAccess] = useState(true);
    const {id} = useParams();

    //Gets called on page load or when params are changed
    useEffect(() => {
        getDocument();
    }, [id])

    async function getDocument()
    {
        //Tries to get the document from Firestore
        const docRef = doc(db, `algorithms/${id}`);
        const document = await getDoc(docRef);
        setAlg(document.data() as alg_interface);

        //Checks if document in empty (was not received)
        if(document.data() == undefined) setCanAccess(false);

        setLoading(false);
    }

    //Displays while the page is loading
    if (isLoading) 
    {
        return <div className={style.container}><div className={style.loading}>Зареждане...</div></div>
    }
    
    //If the Firestore document isn't found returns 404
    if(!canAccess)
    {
        return <NotFoundPage/>
    }
    return (
        <div className={style.container}>
            <div className={style["wrapper"]}>
                <h1 className={style.name}>{alg?.name || "No name"}</h1>
                <Input inputs={alg?.inputs || [""]} type={alg?.input_type || "field"} function={alg?.function || ""}></Input>
            </div>
            <div className={style["wrapper"]}>
                <h1 className={style.name}>Описание</h1>
                <p className={style.description}>{alg?.description || "No description"}</p>
            </div>
        </div>
    )
}
