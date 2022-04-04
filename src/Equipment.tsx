import { Typography } from "@mui/material";
import { ContentBox, ImageTextBox, ImageTextWrapper, ScrollInto, SiteTitle } from "./App";
import { useLanguage } from "./Localization";

export default function Equipment() {

    const lang = useLanguage()

    const content = [
        {
            "name": lang("equipment.mics.title"),
            "content": [
                {
                    "name": lang("equipment.mics.rodent1a.name"),
                    "text": lang("equipment.mics.rodent1a.text"),
                    "url": lang("equipment.mics.rodent1a.url"),
                },{
                    "name": lang("equipment.mics.shuresm7b.name"),
                    "text": lang("equipment.mics.shuresm7b.text"),
                    "url": lang("equipment.mics.shuresm7b.url"),
                },{
                    "name": lang("equipment.mics.tbonelucan.name"),
                    "text": lang("equipment.mics.tbonelucan.text"),
                    "url": lang("equipment.mics.tbonelucan.url"),
                },{
                    "name": lang("equipment.mics.rodem5mp.name"),
                    "text": lang("equipment.mics.rodem5mp.text"),
                    "url": lang("equipment.mics.rodem5mp.url"),
                },{
                    "name": lang("equipment.mics.tbonemb7beta.name"),
                    "text": lang("equipment.mics.tbonemb7beta.text"),
                    "url": lang("equipment.mics.tbonemb7beta.url"),
                },
            ],
        }, {
            "name": lang("equipment.audiointerfaces.title"),
            "content": [
                {
                    "name": lang("equipment.audiointerfaces.presonus1602usb.name"),
                    "text": lang("equipment.audiointerfaces.presonus1602usb.text"),
                    "url": lang("equipment.audiointerfaces.presonus1602usb.url"),
                },{
                    "name": lang("equipment.audiointerfaces.steinbergur12.name"),
                    "text": lang("equipment.audiointerfaces.steinbergur12.text"),
                    "url": lang("equipment.audiointerfaces.steinbergur12.url"),
                },{
                    "name": lang("equipment.audiointerfaces.steinbergur22c.name"),
                    "text": lang("equipment.audiointerfaces.steinbergur22c.text"),
                    "url": lang("equipment.audiointerfaces.steinbergur22c.url"),
                },{
                    "name": lang("equipment.audiointerfaces.yamahaag03.name"),
                    "text": lang("equipment.audiointerfaces.yamahaag03.text"),
                    "url": lang("equipment.audiointerfaces.yamahaag03.url"),
                },
            ],
        }, {
            "name": lang("equipment.speakers.title"),
            "content": [
                {
                    "name": lang("equipment.speakers.mackiemr524.name"),
                    "text": lang("equipment.speakers.mackiemr524.text"),
                    "url": lang("equipment.speakers.mackiemr524.url"),
                },{
                    "name": lang("equipment.speakers.presonustemblort10.name"),
                    "text": lang("equipment.speakers.presonustemblort10.text"),
                    "url": lang("equipment.speakers.presonustemblort10.url"),
                },
            ],
        }, {
            "name": lang("equipment.software.title"),
            "subtitle": lang("equipment.software.subtitle"),
            "content": [
                {
                    "name": lang("equipment.software.cubase.name"),
                    "text": lang("equipment.software.cubase.text"),
                    "url": lang("equipment.software.cubase.url"),
                },{
                    "name": lang("equipment.software.audacity.name"),
                    "text": lang("equipment.software.audacity.text"),
                    "url": lang("equipment.software.audacity.url"),
                },{
                    "name": lang("equipment.software.davinciresolve.name"),
                    "text": lang("equipment.software.davinciresolve.text"),
                    "url": lang("equipment.software.davinciresolve.url"),
                },{
                    "name": lang("equipment.software.blender.name"),
                    "text": lang("equipment.software.blender.text"),
                    "url": lang("equipment.software.blender.url"),
                },{
                    "text": lang("equipment.software.unrealengine5.text"),
                    "name": lang("equipment.software.unrealengine5.name"),
                    "url": lang("equipment.software.unrealengine5.url"),
                },
            ],
        }, {
            "name": lang("equipment.computers.title"),
            "content": [
                {
                    "name": lang("equipment.computers.soundpc.name"),
                    "text": lang("equipment.computers.soundpc.text"),
                },{
                    "name": lang("equipment.computers.cuttingpc.name"),
                    "text": lang("equipment.computers.cuttingpc.text"),
                },
            ],
        }, {
            "name": lang("equipment.instruments.title"),
            "content": [
                {
                    "name": lang("equipment.instruments.epiano.name"),
                    "text": lang("equipment.instruments.epiano.text"),
                    "experience": lang("equipment.instruments.epiano.experience"),
                },{
                    "name": lang("equipment.instruments.ukulele.name"),
                    "text": lang("equipment.instruments.ukulele.text"),
                    "experience": lang("equipment.instruments.ukulele.experience"),
                },{
                    "name": lang("equipment.instruments.aguitar.name"),
                    "text": lang("equipment.instruments.aguitar.text"),
                    "experience": lang("equipment.instruments.aguitar.experience"),
                },{
                    "name": lang("equipment.instruments.eguitar.name"),
                    "text": lang("equipment.instruments.eguitar.text"),
                    "experience": lang("equipment.instruments.eguitar.experience"),
                },{
                    "name": lang("equipment.instruments.ebass.name"),
                    "text": lang("equipment.instruments.ebass.text"),
                    "experience": lang("equipment.instruments.ebass.experience"),
                },{
                    "name": lang("equipment.instruments.accordion.name"),
                    "text": lang("equipment.instruments.accordion.text"),
                    "experience": lang("equipment.instruments.accordion.experience"),
                },{
                    "name": lang("equipment.instruments.violin.name"),
                    "text": lang("equipment.instruments.violin.text"),
                    "experience": lang("equipment.instruments.violin.experience"),
                },{
                    "name": lang("equipment.instruments.eviolin.name"),
                    "text": lang("equipment.instruments.eviolin.text"),
                    "experience": lang("equipment.instruments.eviolin.experience"),
                }
            ],
        }
    ]

    return <ContentBox>
            <SiteTitle>{lang("equipment.title")}</SiteTitle>
            <>
                {content.map((e,i)=> <Category key={`category.${i}`} {...e}/>)}
            </>
        </ContentBox>
}

type BoxType = {
    name: string,
    text: string,
    imgUrl?: string,
}
type CategoryType = {
    name: string,
    subtitle?: string,
    content: BoxType[]
}
function Category({name, subtitle, content}:CategoryType) {

    return <ScrollInto>
        <>
        <Typography variant="h3" sx={{display: "inline-block"}}>{name}</Typography>
        {subtitle && <Typography sx={{display: "inline-block", marginLeft: 2}}>{subtitle}</Typography>}
        <ImageTextWrapper sameHeight>
            {content.map((e, i) => <ImageTextBox key={`item.${i}`} {...e} />)}
        </ImageTextWrapper>
        </>
    </ScrollInto>
}