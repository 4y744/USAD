import { Link } from 'react-router-dom';
import style from '/src/css/navbar.module.css';
import image from "/src/assets/images/logo.png";

function Navbar()
{
    return (
    <nav>
        <ul className={style["navbar"]}>
            <li className={style["nav-item"]}>
                <Link to="/">
                    <img src={image} alt=""/>
                </Link>
            </li>
            <li className={style["nav-item"]}>
                <Link to="/">
                    <i className="fa-solid fa-house"></i>
                    <span className={style["nav-text"]}>Начало</span>
                </Link>
            </li>
            <li className={style["nav-item"]}>
                <a href="https://github.com/4y744/USAD" target="_blank">
                    <i className="fa-brands fa-github"></i>
                    <span className={style["nav-text"]}>GitHub</span>
                </a>
            </li>

        </ul>
    </nav>
    );

}

export default Navbar;