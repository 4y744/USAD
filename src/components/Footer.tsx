import style from '/src/css/footer.module.css';

function Footer()
{
    return (
        <footer>
            <div className={style["footer-container"]}>
                <h3 className={style["footer-container-title"]}>Проект</h3>
                <a href="https://github.com/4y744/USAD" target="_blank" className={style["footer-container-link"]}>GitHub</a>
            </div>
            <div className={style["footer-container"]}>
                <h3 className={style["footer-container-title"]}>Контакти</h3>
                <a href="mailto:ayta42007@abv.bg" className={style["footer-container-link"]}>ayta42007@abv.bg</a>
            </div>

            {/* <div className={style["footer-container"]}>
                <h3 className={style["footer-container-title"]}>Copyright</h3>
                <a href="https://github.com/4y744/online-calculator" target="_blank" className={style["footer-container-link"]}>License (GitHub)</a>
                <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" className={style["footer-container-link"]}>GNU 3.0</a>
            </div> */}
        </footer>
    );

}

export default Footer;