import { Input, InputLabel } from '@mantine/core';
import style from "./style.module.scss";
import Header from '../../components/Header/Header';
import { Button } from '@mantine/core';
import { useState } from 'react';
import { useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from '../../services/course';

function Navigation() {
    const [createCourse] = useCreateCourseMutation()
    const [updateCourse] = useUpdateCourseMutation()
    const [deleteCourse] = useDeleteCourseMutation()

    const [data, setData] = useState()

    const [actBtn, setActBtn] = useState('Создание')

    const [inp, setInp] = useState({
        id: '',
        title: '',
        info: '',
        city: ''
    })

    const changeLayoutInputs = (event) => {
        if (event.target.textContent == 'Создание') {
            setData([{
                titleRU: 'Курс',
                place: 'Введите название курса',
                titleEn: 'title',
            }, {
                titleRU: 'Описание',
                place: 'Введите описание курса',
                titleEn: 'info'
            }, { titleRU: 'Город', place: 'Введите город', titleEn: 'city' }])
            setActBtn(event.target.textContent)
        } else if (event.target.textContent == "Обновление") {
            setData([{
                titleRU: 'ID',
                place: 'Введите ID курса',
                titleEn: 'id'
            }, {
                titleRU: 'Курс',
                place: 'Введите название курса',
                titleEn: 'title'
            }, {
                titleRU: 'Описание',
                place: 'Введите описание курса',
                titleEn: 'info'
            }, { titleRU: 'Город', place: 'Введите город', titleEn: 'city' }])
            setActBtn(event.target.textContent)
        } else if (event.target.textContent == "Удаление") {
            setData([{
                titleRU: 'ID',
                place: 'Введите ID курса',
                titleEn: 'id'
            }])
            setActBtn(event.target.textContent)
        }
    }

    const sendRequest = async () => {
        switch (actBtn) {
            case 'Создание':
                const result = await createCourse(inp)
                console.log(result);
                break;
            case 'Обновление':
                const result2 = await updateCourse(inp)
                console.log(result2);
                break;
            case 'Удаление':
                const result3 = await deleteCourse(inp)
                console.log(result3);
                break;

            default:
                break;
        }
    }

    const changeInp = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <div className={style.name}>
                    <h3 onClick={changeLayoutInputs}>Создание</h3>
                    <h3 onClick={changeLayoutInputs}>Обновление</h3>
                    <h3 onClick={changeLayoutInputs}>Удаление</h3>
                </div>
                {data?.map((el) => <div className={style.course}><p>{el.titleRU}</p> <Input name={el.titleEn} onChange={changeInp} placeholder={el.place} /></div>)}
                <Button style={{ borderRadius: 5 }} onClick={sendRequest} fullWidth>Применить</Button>
            </div >
        </>
    );
}

export default Navigation;