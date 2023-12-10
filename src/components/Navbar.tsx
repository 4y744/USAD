import style from '/src/css/navbar.module.css';

function Navbar()
{
    return (
    <nav>
        <ul className={style["navbar"]}>
            <li className={style["nav-item"]}>
                <a href="/">
                    <img src="/src/assets/images/logo.png" alt=""/>
                </a>
            </li>
            <li className={style["nav-item"]}>
                <div className={style["nav-search"]}>
                    <input className={style["nav-search-bar"]} type="text" placeholder="Search"/>
                    <button className={style["search-button"]}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </li>
            <li className={style["nav-item"]}>
                <a href="/math.html">
                    <i className="fa-solid fa-square-root-variable"></i>
                    <span className={style["nav-text"]}>Math</span>
                </a>
            </li>
            <li className={style["nav-item"]}>
                <a href="/physics.html">
                    <i className="fa-solid fa-atom"></i>
                    <span className={style["nav-text"]}>Physics</span>
                </a>
            </li>
            <li className={style["nav-item"]}>
                <a href="#">
                    <i className="fa-solid fa-heart-pulse"></i>
                    <span className={style["nav-text"]}>Health</span>
                </a>
            </li>
            <li className={style["nav-item"]}>
                <a href="#">
                    <i className="fa-solid fa-network-wired"></i>
                    <span className={style["nav-text"]}>Networking</span>
                </a>
            </li>
        </ul>
    </nav>
    );

}

export default Navbar;