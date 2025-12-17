import {BASE_MEDIA_URL} from "./constans";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

export default function ArticleCard(props) {
    const {article} = props
    const imageUrl = `${BASE_MEDIA_URL}${article.attributes.cover.data.attributes.url}`
    const title = article.attributes.title
    const description = article.attributes.description
    return (
        <Card sx={{textDecoration: "none"}} component={"a"} href={`/articles/${article.id}`}>
            <CardActionArea>
                <Box sx={{display:"flex", flexDirection:{xs:"column",sm:"row"}}}>
                    <CardMedia
                        component="img"
                        sx={{width:{xs:"100%",sm:"300px"}, height:"300px"}}
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
                </Box>
            </CardActionArea>
        </Card>
    );
}