import { Input, Button } from "@mantine/core";
import style from "./style.module.scss";
import { IconSearch } from "@tabler/icons-react";
import { Pagination } from "@mantine/core";
import { useState } from "react";
import Header from "../../components/Header/Header";
import { useGetCourseQuery } from "../../services/course";
function Home() {
    const { data } = useGetCourseQuery()
    console.log(data);
    
    const [vacanciesOnThePage] = useState(4);
    const [paginalPageNumber, setPaginalPageNumber] = useState(1);

    const lastIndex = vacanciesOnThePage * paginalPageNumber;
    const firstIndex = lastIndex - vacanciesOnThePage;
    const displayedArray = data?.slice(firstIndex, lastIndex);

    return (
        <>
            <Header></Header>
            <div className={style.wrapper}>
                <Input
                    leftSection={<IconSearch size={16} />}
                    rightSectionWidth="80px"
                    rightSection={<Button variant="filled">Поиск</Button>}
                    placeholder="Введите название компании"
                />
                <div className={style.wripperBox}>

                    {displayedArray?.map((el) => <div className={style.box}><h2>{el.title}</h2><p>{el.info}</p><p>{el.city}</p></div>)}
                </div>

                <Pagination
                    total={Math.ceil(data?.length / vacanciesOnThePage)}
                    onChange={setPaginalPageNumber}
                    mt="sm"
                />
            </div>;
        </>
    )
}

export default Home;