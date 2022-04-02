import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ContentBox, SiteTitle, TextProcessor } from "./App";
import SORRY_CAT from './img/sorry_cat.jpg'
import { useLanguage } from "./Localization";

export default function NotFound() {

    const StyledImage = styled("img")({
        width: "300px",
        maxWidth: "100%",
    })

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>404 - Not Found</SiteTitle>
        <Box sx={{paddingBottom: 4}}>
            <TextProcessor>
                {lang("404.text")}
            </TextProcessor>
        </Box>
        <StyledImage src={SORRY_CAT}/>
    </ContentBox>
}