export function LinkCardAction(props: {faClass: string, onclick: any})
{
    return (
        <button onClick={props.onclick} className="mx-0.5 rounded-md hover:bg-zinc-800 active:bg-zinc-700"><i className={`fa-solid ${props.faClass} py-1 px-2`}/></button>
    )
}