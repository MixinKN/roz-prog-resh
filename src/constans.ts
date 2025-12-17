import {defaultOverrides} from "mui-markdown";
import {Typography} from "@mui/material";

export const BASE_MEDIA_URL = "https://strapitest.ybru.ru"
export const MARCDOWN_OPTION = {
    ...defaultOverrides, // This will keep the other default overrides.
    h1: {
        component: Typography,
        props: {
            variant: "h3",
            component: "h2",

        },
    },
}