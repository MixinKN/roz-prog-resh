import React from 'react';
import Container from "@mui/material/Container";
import {apiClient} from "../../src/ApiClient";
import Typography from "@mui/material/Typography";
import {MOCK_PROJECTS} from "../../src/mock";
import ProjectsList from "../../src/ProjectsList";

export async function getServerSideProps() {
    try {
        const projects = await apiClient.getProjects()
        return {props:{projects:projects.data}}
    }
    catch (e) {
        return {props:{projects:MOCK_PROJECTS.data}}
    }
}

const Projects = ({projects}) => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography sx={{paddingTop:"60px",paddingBottom:"40px"}} component={"h1"} variant={"h2"}>Проекты</Typography>
                <ProjectsList projects={projects}/>
            </Container>
        </>
    );
};

export default Projects;