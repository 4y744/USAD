//Import react hooks
import {useState, useEffect} from 'react';
//Import Firebase hooks

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase";

//Import React Router hooks
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import { LinkCard } from '../LinkCard';
import { Header } from '../../exports';

export function HomeFeatured(){
    
    const [isLoading, setLoading] = useState(true);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        getDocument();
    }, [])

    async function getDocument()
    {
        //Tries to get the documents from Firestore
        const docsRef = query(collection(db, "algorithms"));
        const docs = await getDocs(docsRef);
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

    if(isLoading) return <Loading/>
    
    return <div className='px-4'>
        <Header text='Featured'/>
        <div className='flex flex-wrap'>
            {documents.map((doc: any) => (
                    <LinkCard key={doc.id} algorithmId={doc.id} title={doc.title} author={doc.author} language="BG" date="28/12/23" updoots={5}/>
            ))}
        </div>
    </div>
}