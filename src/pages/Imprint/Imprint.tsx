import ContentBox from "../../components/content/ContentBox";
import { useLanguage } from "../../components/localization/Localization";
import TextProcessor from "../../components/text/TextProcessor";
import SiteTitle from "../../components/title/SiteTitle";

export default function Imprint() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("imprint.title")}</SiteTitle>
        <TextProcessor>
            {lang("imprint.text")}
        </TextProcessor>
    </ContentBox>
}