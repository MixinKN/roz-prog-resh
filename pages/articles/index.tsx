import React from 'react';
import Container from "@mui/material/Container";
import ArticlesList from "../../src/ArticlesList";
import {apiClient} from "../../src/ApiClient";
import Typography from "@mui/material/Typography";
import {MOCK_ARTICLES} from "../../src/mock";

export async function getServerSideProps() {
    try {
        const articles = await apiClient.getArticles()
        return {props:{articles:articles.data}}
    }
    catch (e) {
        return {props:{articles:MOCK_ARTICLES.data}}
    }
}

const Articles = ({articles}) => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography sx={{paddingTop:"60px",paddingBottom:"40px"}} component={"h1"} variant={"h2"}>Блог</Typography>
                <ArticlesList articles={articles}/>
            </Container>
        </>
    );
};

export default Articles;