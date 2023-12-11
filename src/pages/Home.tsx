import style from '/src/css/home.module.css';
//Import react hooks
import {useState, useEffect} from 'react';
//Import Firebase hooks
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../firebase.tsx";
import { Link } from 'react-router-dom';


function Home()
{
    const [isLoading, setLoading] = useState(true);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        getDocument();
    }, [])

    async function getDocument()
    {
        //Tries to get the documents from Firestore
        const q = query(collection(db, "algorithms"));
        const docs = await getDocs(q);
        let tempDocs : any = [];
        docs.forEach((doc) => {
            tempDocs.push({
                ...doc.data(),
                id: doc.id
              });
        })
        setDocuments(tempDocs);

        setLoading(false);     
    }

    if(isLoading)
    {
        return <div className={style.container}><div className={style.loading}>Зареждане...</div></div>
    }
    return <div className={style.container}>
    {documents.map((item : any) => (
                    <Link key={item.id} to={`algorithm/${item.id}`} className={style["link-container"]}>
                        <h2 className={style["link-title"]}>{item.name}</h2>
                    </Link>
                ))}
    </div>
}

export default Home;