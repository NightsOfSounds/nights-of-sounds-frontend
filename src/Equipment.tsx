import { Typography } from "@mui/material";
import { ContentBox, ImageTextBox, ImageTextWrapper, SiteTitle } from "./App";

export default function Equipment() {

    const content = [
        {
            "name": "Mics",
            "content": [
                {
                    "name": "Rode NT1-A",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Shure SM7B",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "the t.bone Lucan System",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Rode M5 MP",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "the t.bone MB7 Beta",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },
            ],
        }, {
            "name": "Audio Interfaces",
            "content": [
                {
                    "name": "Presonus 16.0.2 USB",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Steinberg UR12",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Steinberg UR22C",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Yamaha AG03",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },
            ],
        }, {
            "name": "Speakers",
            "content": [
                {
                    "name": "Mackie MR524",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Presonus Temblor T10",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },
            ],
        }, {
            "name": "Software",
            "content": [
                {
                    "name": "Cubase Pro",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Audacity",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "DaVinci Resolve",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Blender",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Unreal Engine 5",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },
            ],
        }, {
            "name": "Computers",
            "content": [
                {
                    "name": "Sound Computer",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Cutting Computer",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },
            ],
        }, {
            "name": "Instruments",
            "content": [
                {
                    "name": "E-Piano",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Ukulele",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "A-Guitar",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "E-Guitar",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "E-Bass",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Accordion",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "Violin",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                },{
                    "name": "E-Violin",
                    "text": "Lorem ipsum dolor sit amet.",
                    
                }
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
    imgUrl?: string,
}
type CategoryType = {
    name: string,
    content: BoxType[]
}
function Category({name, content}:CategoryType) {

    return <>
        <Typography variant="h3">{name}</Typography>
        <ImageTextWrapper sameHeight>
            {content.map((e, i) => <ImageTextBox key={`item.${i}`} {...e} />)}
        </ImageTextWrapper>
    </>
}