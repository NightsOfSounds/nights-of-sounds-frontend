import ContentBox from "../../components/content/ContentBox";
import { useLanguage } from "../../components/localization/Localization";
import TextProcessor from "../../components/text/TextProcessor";
import SiteTitle from "../../components/title/SiteTitle";

export default function Privacy() {

    const lang = useLanguage()

    return <ContentBox>
        <SiteTitle>{lang("privacy.title")}</SiteTitle>
        <TextProcessor>{lang("privacy.text")}</TextProcessor>
    </ContentBox>
}