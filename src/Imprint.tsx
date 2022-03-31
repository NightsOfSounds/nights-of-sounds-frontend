import { Typography } from "@mui/material";
import { ContentBox, SiteTitle } from "./App";
import { useLanguage } from "./Localization";

export default function Imprint() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("imprint.title")}</SiteTitle>
        <Typography>
            {lang("imprint.text")}
        </Typography>
    </ContentBox>
}