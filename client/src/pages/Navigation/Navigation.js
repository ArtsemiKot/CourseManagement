import { Input } from '@mantine/core';
import style from "./style.module.scss";
import Header from '../../components/Header/Header';
import { Button } from '@mantine/core';
function Navigation() {
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.name}>
                    <h3>Создание</h3>
                    <h3>Обновление</h3>
                    <h3>Удаление</h3>
                </div>
                <div className={style.course}>
                    <p>Курс</p>
                    <Input placeholder="Input component" />
                </div>
                <div className={style.direction}>
                    <p>Описание</p>
                    <Input placeholder="Input component" />
                </div>
                <Button fullWidth>Применить</Button>
            </div>
        </>
    );
}

export default Navigation;