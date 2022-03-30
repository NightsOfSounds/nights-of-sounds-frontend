import { Stack, Typography } from "@mui/material";
import { ContentBox, ImageTextBox, ImageTextWrapper, SiteTitle } from "./App";
import IMG from './img/th.jpg'
import { SocialWrapper } from "./Social";

export default function Equipment() {

    const content = [
        {
            "name": "Mics",
            "content": [
                {
                    "name": "Rode NT1-A",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Shure SM7B",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "the t.bone Lucan System",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Rode M5 MP",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "the t.bone MB7 Beta",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },
            ],
        }, {
            "name": "Audio Interfaces",
            "content": [
                {
                    "name": "Presous 16.0.2 USB",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Steinberg UR12",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Steinberg UR22C",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Yamaha AG03",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },
            ],
        }, {
            "name": "Speakers",
            "content": [
                {
                    "name": "Mackie MR524",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Presonus Temblor T10",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },
            ],
        }, {
            "name": "Software",
            "content": [
                {
                    "name": "Cubase 12 Pro",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Audacity",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "DaVinci Resolve 12",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Blender 3.0",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Unreal Engine 5",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },
            ],
        }, {
            "name": "Computers",
            "content": [
                {
                    "name": "Sound Computer",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Cutting Computer",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },
            ],
        }, {
            "name": "Instruments",
            "content": [
                {
                    "name": "E-Piano",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Ukulele",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "A-Guitar",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "E-Guitar",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "E-Bass",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },{
                    "name": "Accordion",
                    "text": "Lorem ipsum dolor sit amet.",
                    "imgUrl": IMG,
                },
            ],
        }
    ]

    return <ContentBox>
            <SiteTitle>Our Equipment</SiteTitle>
            <>
                {content.map((e,i)=> <Category key={`category.${i}`} {...e}/>)}
            </>
        </ContentBox>
}

type BoxType = {
    name: string,
    text: string,
    imgUrl: string,
}
type CategoryType = {
    name: string,
    content: BoxType[]
}
function Category({name, content}:CategoryType) {

    return <>
        <Typography variant="h3">{name}</Typography>
        <ImageTextWrapper>
            {content.map((e, i) => <ImageTextBox key={`item.${i}`} {...e} />)}
        </ImageTextWrapper>
    </>
}