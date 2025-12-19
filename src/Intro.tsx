import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import intro from "../public/intro.jpeg"


const Intro = () => {
    return (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",columnGap:"40px"}}>
            <Box
                component={"img"}
                sx={{width:"100%",height:"300px",display:"block",borderRadius:"20px",marginTop:"40px"}}
                src={"https://yaart-web-alice-images.s3.yandex.net/3c47a2fcdc0311f0961d0e9d7ffa1ad0:1"}
                alt="Logo"
            />
            <Typography sx={{maxWidth:"100%",fontWeight:"600px",fontSize:"3.75rem",lineHeight:"1.25",fontFamily:"'Roboto','Helvetica','Arial', 'sans-serif'"}} component={"h1"}
            >Разумные программные решения</Typography>
        </Box>
    );
};

export default Intro;