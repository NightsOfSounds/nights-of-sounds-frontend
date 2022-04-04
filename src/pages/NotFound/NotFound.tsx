import { Box } from "@mui/material";
import { styled } from "@mui/system";
import SORRY_CAT from '../../img/sorry_cat.jpg'
import { useLanguage } from "../../components/localization/Localization";
import ContentBox from "../../components/content/ContentBox";
import SiteTitle from "../../components/title/SiteTitle";
import TextProcessor from "../../components/text/TextProcessor";

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