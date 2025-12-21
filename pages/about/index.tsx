import React from 'react';
import Container from "@mui/material/Container";
import Intro from "../../src/Intro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import ControlledAccordions from "../../src/acordion";

const About = () => {
    return (
        <>
            <Container maxWidth={"lg"}>
                <Intro/>
                <Box sx={{display:"flex",columnGap:"150px",marginTop:"120px",marginBottom:"120px"}}>
                    <Typography sx={{width:"100%"}} component={"h2"} variant={"h3"}
                    >О нас</Typography>
                    <Typography component={"span"} variant={"h5"}
                    >Создаём масштабируемые цифровые продукты и сервисы с нуля, оптимизируем уже существующие решения. Поддерживаем внедрение алгоритмов и оптимизационных решений, способных создать будущее и вывести бизнес на новый уровень.</Typography>
                </Box>
                <ControlledAccordions/>
            </Container>
        </>
    );
};

export default About;