import { Link } from "react-router-dom";

export function LinkCardAuthor(props : {username : string})
{
    return (
    <Link className="text-gray-300 text-xs ml-2 hover:text-gray-200" to={`user/${props.username}`}>
        <span>by</span>
        <span className="mx-0.5 underline">{props.username}</span>
    </Link>)
}