import { Link } from "react-router-dom";

export function CardUserLink(props : {username : string})
{
    return (
    <Link to={`user/${props.username}`}>
        <span className="text-xs text-gray-300">by</span>
        <span className="text-xs text-gray-300 mx-0.5 underline">{props.username}</span>
    </Link>)
}