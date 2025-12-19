import * as React from 'react';
import Container from '@mui/material/Container';
import ArticlesList from "../src/ArticlesList";
import {apiClient} from "../src/ApiClient";
import {MOCK_ARTICLES, MOCK_PROJECTS} from "../src/mock";
import Typography from "@mui/material/Typography";
import ProjectsList from "../src/ProjectsList";
import Intro from "../src/Intro";
import ControlledAccordions from "../src/acordion";

export async function getServerSideProps() {
    try {
        const [articles, projects] = await Promise.all([apiClient.getArticles(),apiClient.getProjects()])
        return {props:{articles:articles.data,projects:projects.data}}
    }
    catch (e) {
        return {props:{articles:MOCK_ARTICLES.data,projects:MOCK_PROJECTS.data}}
    }
}

export default function Home({articles,projects}) {
  return (
      <Container maxWidth="lg">
          <Intro/>
          <Typography sx={{paddingTop:"60px",paddingBottom:"40px"}} component={"h2"} variant={"h2"}>Блог</Typography>
          <ArticlesList itemsLimit={3} articles={articles}/>
          <Typography sx={{paddingTop:"60px",paddingBottom:"40px"}} component={"h2"} variant={"h2"}>Проекты</Typography>
          <ProjectsList itemsLimit={3} projects={projects}/>
          <ControlledAccordions />
      </Container>
  );
}
