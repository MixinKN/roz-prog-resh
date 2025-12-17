import React from 'react';
import {Link} from "@mui/material";
import Box from "@mui/material/Box";

type ShowMoreLink = {
    text:string;
    href:string;
}
const ShowMoreLink = ({text,href}:ShowMoreLink) => {
    return (
        <Box sx={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%", marginBottom:"40px"}}>
            <Link
                component="a"
                variant="body2"
                href={href}
            >
                {text}
            </Link>
        </Box>
    );
};

export default ShowMoreLink;