//Import React Router hooks
import { Link } from 'react-router-dom';

export default function DropdownLink(props : {url : string, text : string}) {
  return (
    <Link className={'text-gray-200 font-inter py-1 px-3 my-0.5 w-full rounded-md text-base hover:bg-gray-700'} to={props.url}>{props.text}</Link>
  )
}
