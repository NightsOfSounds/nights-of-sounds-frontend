import {Paper, Stack, Typography, experimental_sx as sx} from '@mui/material';
import { ContentBox, SiteTitle, TextProcessor } from "./App";
import { useLanguage } from "./Localization";

export default function Privacy() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("privacy.title")}</SiteTitle>
        <Paper sx={{textAlign: "left", marginBottom:4, p:2}}>
            <TextProcessor>
                {lang("privacy.text")}
            </TextProcessor>
        </Paper>
    </ContentBox>
}