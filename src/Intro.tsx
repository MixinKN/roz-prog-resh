import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import intro from "../public/intro.jpeg"
//https://yaart-web-alice-images.s3.yandex.net/3c47a2fcdc0311f0961d0e9d7ffa1ad0:1


const Intro = () => {
    return (
        <Box sx={{backgroundColor:"#2a2b38",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",columnGap:"40px",flexDirection:"column-reverse",marginTop:"60px"}}>
            <Box
                component={"img"}
                sx={{objectFit:"scale-down",width:"100%",height:"300px",display:"block"}}
                src={"/intro.jpeg"}
                alt="Logo"
            />
            <Typography sx={{paddingTop:"40px",color:"white",maxWidth:"100%",fontWeight:"600px",fontSize:"3.75rem",lineHeight:"1.25",fontFamily:"'Roboto','Helvetica','Arial', 'sans-serif'"}} component={"h1"}
            >Разумные программные решения</Typography>
        </Box>
    );
};

export default Intro;