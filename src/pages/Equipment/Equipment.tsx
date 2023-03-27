import ContentBox from "../../components/content/ContentBox";
import { useLanguage, useLanguageTree } from "../../components/localization/Localization";
import SiteTitle from "../../components/title/SiteTitle";
import Category from "../../components/wrapper/Category";

export default function Equipment() {

    const lang = useLanguage()

    const rawContent = useLanguageTree()("equipment");

    const content = Object.values(rawContent)
        .filter(v => typeof(v) == "object")
        .map(v => v as any)
        .map(v => ({
            "name": v.title,
            "subtitle": v.subtitle,
            "content": Object.values(v)
                .filter(v => typeof(v)=="object")
                .map(v => v as any)
                .map(v => ({
                    "name": v.name,
                    "text": v.text,
                    "url": v.url,
                    "experience": v.experience,
                }))
        }))

    return (
        <ContentBox>
            <SiteTitle>{lang("equipment.title")}</SiteTitle>
            <>
                {content.map((e,i)=> <Category key={`category.${i}`} {...e}/>)}
            </>
        </ContentBox>
    )
}