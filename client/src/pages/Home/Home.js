import { Input, Button } from "@mantine/core";
import style from "./style.module.scss";
import { IconSearch } from "@tabler/icons-react";
import { Pagination } from "@mantine/core";
import { useState } from "react";
import Header from "../../components/Header/Header";

function Home() {


    const arr = [{
        title: 'JS',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'TS',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'С++',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }, {
        title: 'Rubi',
        info: 'test',
        city: 'minsk'
    }]

    const [vacanciesOnThePage] = useState(4);
    const [paginalPageNumber, setPaginalPageNumber] = useState(1);

    const lastIndex = vacanciesOnThePage * paginalPageNumber;
    const firstIndex = lastIndex - vacanciesOnThePage;
    const displayedArray = arr.slice(firstIndex, lastIndex);

    return (
        <div className={style.wrapper}>
            <Header></Header>
            <Input
                leftSection={<IconSearch size={16} />}
                rightSectionWidth="80px"
                rightSection={<Button variant="filled">Поиск</Button>}
                placeholder="Введите название компании"
            />
            <div className={style.wripperBox}>

                {displayedArray.map((el) => <div className={style.box}><h2>{el.title}</h2><p>{el.info}</p><p>{el.city}</p></div>)}
            </div>

            <Pagination
                total={Math.ceil(arr.length / vacanciesOnThePage)}
                onChange={setPaginalPageNumber}
                mt="sm"
            />


        </div>);
}

export default Home;