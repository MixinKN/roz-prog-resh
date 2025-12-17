import React from 'react';
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import { MuiMarkdown} from "mui-markdown";
import {BASE_MEDIA_URL, MARCDOWN_OPTION} from "../../src/constans";
import {apiClient} from "../../src/ApiClient";

export async function getServerSideProps(context) {
    const {
        article:articleId
    } = context.params
    const article = await apiClient.getArticleById(articleId)
    return {props:{article}}
}

const Article = ({article}) => {
    return (
        <Container maxWidth={"lg"}>
            <Typography sx={{paddingTop:"60px",paddingBottom:"40px"}} variant="h2" component="h1">
                {article.data.attributes.title}
            </Typography>
            <Box
                component={"img"}
                sx={{width:"100%",height:"auto",display:"block",borderRadius:"20px",marginBottom:"20px"}}
                src={`${BASE_MEDIA_URL}${article.data.attributes.cover.data.attributes.url}`}
                alt={article.data.attributes.title}
            />
            <MuiMarkdown overrides={MARCDOWN_OPTION}>{article.data.attributes.content}</MuiMarkdown>
        </Container>
    );
};

    export default Article;