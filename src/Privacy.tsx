import { ContentBox, SiteTitle, TextProcessor } from "./App";
import { useLanguage } from "./Localization";

export default function Privacy() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("privacy.title")}</SiteTitle>
        <TextProcessor>{lang("privacy.text")}</TextProcessor>
    </ContentBox>
}