import { Link } from "react-router-dom";
import { LinkCardAuthor, LinkCardAction } from "../exports";

export function LinkCard(props: {algorithmId: string, title: string, author: string, language: string, date: string, updoots: number})
{
    return (
    <div className="bg-zinc-900 text-white md:w-96 w-72 h-20 flex 
    flex-col justify-center items-start px-4 m-2
    border-l-green-700 border-l-4">
        <div className="flex items-center py-0.5">
            <Link to={`algorithm/${props.algorithmId}`} className="md:text-base text-sm md:max-w-72 max-w-52 font-bold hover:underline truncate">{props.title}</Link>
            <span className="text-xs px-2 py-1 ml-2 rounded-md bg-zinc-800 select-none">{props.language}</span>
        </div>

        <div className="flex items-center py-0.5">
            <span className="text-xs text-gray-300">{props.date}</span>
            <LinkCardAuthor username={props.author}></LinkCardAuthor>
            <div className="flex items-center justify-center">
                <LinkCardAction faClass="fa-caret-up" onclick={() => {}}/>
                <span className="text-xs text-gray-300 mx-1">{props.updoots}</span>
                <LinkCardAction faClass="fa-caret-down" onclick={() => {}}/>
            </div>
            <LinkCardAction faClass="fa-retweet" onclick={() => {}}/>
        </div>
    </div>
    )
}