import style from '/src/css/footer.module.css';

function Footer()
{
    return (
        <footer>
            <div className={style["footer-container"]}>
                <h3 className={style["footer-container-title"]}>Project</h3>
                <a href="https://github.com/4y744/online-calculator" rel="noopener" target="_blank" className={style["footer-container-link"]}>GitHub</a>
                <a href="#" className={style["footer-container-link"]}>Documentation</a>
            </div>
            <div className={style["footer-container"]}>
                <h3 className={style["footer-container-title"]}>Contact</h3>
                <a href="#" className={style["footer-container-link"]}>email@email.com</a>
                <a href="#" className={style["footer-container-link"]}>contact</a>
            </div>
            <div className={style["footer-container"]}>
                <h3 className={style["footer-container-title"]}>Copyright</h3>
                <a href="https://github.com/4y744/online-calculator" target="_blank" className={style["footer-container-link"]}>License (GitHub)</a>
                <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" className={style["footer-container-link"]}>GNU 3.0</a>
            </div>
        </footer>
    );

}

export default Footer;