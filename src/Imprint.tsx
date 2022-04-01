import { ContentBox, SiteTitle, TextProcessor } from "./App";
import { useLanguage } from "./Localization";

export default function Imprint() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("imprint.title")}</SiteTitle>
        <TextProcessor>
            {lang("imprint.text")}
        </TextProcessor>
    </ContentBox>
}