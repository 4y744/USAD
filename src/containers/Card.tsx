import { Link } from "react-router-dom";
import { CardUserLink } from "../exports";

export function Card(props: {url: string})
{
    return (
    <Link to={`algorithm/${props.url}`} className="
    bg-zinc-900 text-white w-96 h-20 flex flex-col justify-center items-start
    ">
        <div className="flex items-center">
            <span className="mx-2">Greates common divisor</span>
            <CardUserLink username="4y744"></CardUserLink>
            <span className="text-xs px-1 py-0.5 mx-1 rounded-md bg-zinc-800">EN</span>
        </div>

        {/* <span>author</span>
        <span>date</span>

        <span>Like</span>
        <span>Dislike</span>
        <span>Share</span> */}
    </Link>
    )
}