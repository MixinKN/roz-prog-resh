import {BASE_MEDIA_URL} from "./constans";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

export default function ProjectCard(props) {
    const {project} = props
    const imageUrl = `${BASE_MEDIA_URL}${project.attributes.cover.data.attributes.url}`
    const title = project.attributes.title
    const description = project.attributes.description
    return (
        <Card sx={{textDecoration: "none",maxWidth:365}} component={"a"} href={`/projects/${project.id}`}>
            <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageUrl}
                        alt="green iguana"
                    />
                    <CardContent sx={{flex:"1"}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {description}
                        </Typography>
                    </CardContent>
            </CardActionArea>
        </Card>
    );
}