//Import React Router hooks
import { Link } from 'react-router-dom';

export function DropdownLink(props : {url : string, text : string, onclick : any}) {
  return (
    <Link className={
      'text-zinc-200 font-inter py-1 px-3 my-1 w-full rounded-md text-base hover:bg-green-600 active:bg-green-600 transition-background duration-100 active:outline outline-offset-2 outline-2 outline-green-600'
    } to={props.url} onClick={props.onclick}>{props.text}</Link>
  )
}
