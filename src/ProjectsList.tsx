import React from 'react';
import {Grid, Link} from "@mui/material";
import ArticleCard from "./ArticleCard";
import ShowMoreLink from "./ShowMoreLink";
import ProjectCard from "./ProjectCard";

type ProjectsListProps = {
    projects: any[];
    itemsLimit?: number;
}

const ProjectsList = ({projects, itemsLimit}:ProjectsListProps) => {
    const isLimitedMod = itemsLimit !== undefined
    const itemsToRender = isLimitedMod ? projects.slice(0,3) : projects
    return (
        <Grid container spacing={3}>
            {itemsToRender.map(project => <ProjectCard project = {project}/>)}
            {isLimitedMod && <ShowMoreLink text={'Больше проектов'} href={'/projects'}/>}
        </Grid>
    );
};

export default ProjectsList;