import style from '/src/css/notFound.module.css';

function NotFound()
{
    return <div className={style.container}><div className={style["not-found"]}>404</div></div>
}

export default NotFound;