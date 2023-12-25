//Import React Router hooks
import { Link } from 'react-router-dom';

export function NavLink(props : {url : string, text : string}) {
  return (
    <Link className={
      'text-zinc-200 font-inter py-1 px-3 mx-1 rounded-md text-base hover:bg-green-600 active:bg-green-600 transition-background duration-100 active:outline outline-offset-2 outline-2 outline-green-600'
    } to={props.url}>{props.text}</Link>
  )
}
