//Import React Router hooks
import { Link } from 'react-router-dom';

export default function NavLink(props : {url : string, text : string}) {
  return (
    <Link className={'text-gray-200 font-inter py-1 px-3 mx-1 rounded-md text-base hover:bg-gray-700'} to={props.url}>{props.text}</Link>
  )
}
