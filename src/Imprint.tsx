import { Paper, Stack, Typography, experimental_sx as sx} from '@mui/material';
import { ContentBox, SiteTitle, TextProcessor } from "./App";
import { useLanguage } from "./Localization";

export default function Imprint() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("imprint.title")}</SiteTitle>
        <Paper sx={{textAlign: "left", marginBottom: 4, p:2}}>
            <TextProcessor>
                {lang("imprint.text")}
            </TextProcessor>
        </Paper>
    </ContentBox>
}