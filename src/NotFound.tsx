import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ContentBox, SiteTitle } from "./App";
import SORRY_CAT from './img/sorry_cat.jpg'

export default function NotFound() {

    const StyledImage = styled("img")({
        width: "300px",
        maxWidth: "100%",
    })

    return <ContentBox>
        <SiteTitle>404 - Not Found</SiteTitle>
        <Typography>
            We are so sorry 😭
        </Typography>
        <Typography sx={{paddingBottom: "30px"}}>
            We searched everywhere, but could not find the website you requested.
            Please make sure, the url you typed in is correct.
        </Typography>
        <StyledImage src={SORRY_CAT}/>
    </ContentBox>
}