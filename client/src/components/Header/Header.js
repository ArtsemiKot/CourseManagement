import style from "./style.module.scss";
function Header() {
    return (
        <>
            <div className={style.wrapper}>
                <h1>CoursesRUD.</h1>
                <div className={style.admin}>
                    <p>Администрирование</p>
                    <p>Просмотр</p>
                </div>
            </div>
        </>
    );
}

export default Header;