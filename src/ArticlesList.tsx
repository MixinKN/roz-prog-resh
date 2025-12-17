import React from 'react';
import {Grid, Link} from "@mui/material";
import ArticleCard from "./ArticleCard";
import ShowMoreLink from "./ShowMoreLink";

type ArticlesListProps = {
    articles: any[];
    itemsLimit?: number;
}

const ArticlesList = ({articles, itemsLimit}:ArticlesListProps) => {
    const isLimitedMod = itemsLimit !== undefined
    const itemsToRender = isLimitedMod ? articles.slice(0,3) : articles
    return (
        <Grid container spacing={3}>
            {itemsToRender.map(article => <ArticleCard article = {article}/>)}
            {isLimitedMod && <ShowMoreLink text={'Больше статей в нашем блоге'} href={'/articles'}/>}
        </Grid>
    );
};

export default ArticlesList;