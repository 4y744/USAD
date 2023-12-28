export function Header(props: {text: string})
{
    return <h1 className='font-bold text-white xl:text-4xl lg:text-3xl text-2xl my-3 sm:text-start text-center'>{props.text}</h1>
}