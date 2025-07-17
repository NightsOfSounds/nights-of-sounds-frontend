import {useLanguage, useLanguageTree} from "../../components/localization/Localization";
import SiteTitle from "../../components/title/SiteTitle";
import ContentBox from "../../components/content/ContentBox";

export default function Stream() {
    const language = useLanguage();


    return (
        <ContentBox>
            <SiteTitle>{language("stream.title")}</SiteTitle>
            <>
                {/*TODO*/}
            </>
        </ContentBox>
    )
}