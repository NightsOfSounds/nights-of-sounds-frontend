import { Typography } from "@mui/material";
import { ContentBox, SiteTitle } from "./App";
import { useLanguage } from "./Localization";

export default function Privacy() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("privacy.title")}</SiteTitle>
        <Typography>{lang("privacy.text")}</Typography>
    </ContentBox>
}