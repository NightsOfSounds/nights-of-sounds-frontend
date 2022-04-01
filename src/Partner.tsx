import {Box, Grid, Paper, Stack, Typography, experimental_sx as sx } from '@mui/material'
import { styled } from "@mui/system";
import { useEffect, useState } from 'react'
import { ConditionalWrapper, ContentBox, ImageTextBox, ImageTextWrapper, SiteTitle } from './App'
import IMG from './img/th.jpg'
import Thomann from "./img/thomann-logo.png"
import Amazon from "./img/amazon-logo.png"
import { useLanguage } from './Localization'
import { SocialWrapper } from './Social'

function Partner() {

    const lang = useLanguage()

    const partnerData = [
       
                {
                    "name": "Thomann",
                    "text": lang("partner.thomann.text"),
                    "imgUrl": Thomann,
                },{
                    "name": "Amazon",
                    "text": lang("partner.amazon.text"),
                    "imgUrl": Amazon,
                }
        
    
    ]

    return <ContentBox>
            <SiteTitle>{lang("partner.title")}</SiteTitle>
            <Stack>
                <SocialWrapper data={partnerData}/>
            </Stack>
    </ContentBox>
}

type PartnerWrapperType = {
    data: PartnerDataType[]
}

type PartnerDataType = {
    name: string,
    text: string,
    url?: string,
    imgUrl: string
}
export function PartnerWrapper({data}:PartnerWrapperType):JSX.Element {
    const result = []

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const listener = ()=> {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", listener);
        return ()=>{window.removeEventListener("resize", listener)}
    }, []);

    for(var i = 0; i<data.length;i++) {

        const{name, text, url, imgUrl} = data[i];
        let textAligns = ["right", "left"]
        if(width < 900) textAligns = ["center", "center"]
        if(i % 2 !==0) textAligns = textAligns.reverse();

        let margins = ["0px", "20px"]
        if(width < 900) margins = ["0", "0"]
        if(i % 2 !==0) margins = margins.reverse()

        const StyledLink = styled("a")({
            textDecoration: "none",
        })

        const wrapper = (children:JSX.Element) => <StyledLink href={url} target="_blank" rel="noreferrer" className="noUnderline">{children}</StyledLink>

        const PartnerImage = styled("img")(
            sx([
                {
                    maxWidth:"100",
                    height:"200px",
                    transition: ".3s",
                    filter: "grayscale(0.3",
                },{
                    "&:hover": {
                        transform: "scale(1.1)",
                        filter: "grayscale(0)",
                    }
                }
            ])
        )

        const el1 = <Box key="e.2" sx={{
            textAlign: textAligns[0],
            marginRight: margins[1],
            marginLeft: margins[0],
        }}>
            <ConditionalWrapper
                condition={url ! ==null}
                wrapper={wrapper}
            >
                <PartnerImage src={imgUrl} alt={`${name} logo`} className="partnerImage" />
            </ConditionalWrapper>
        </Box>

        const el2 = <Box key="e.1" sx={{
            margin: "auto",
            textAlign: textAligns[1]
        }}>
            <ConditionalWrapper
                condition={url !== null}
                wrapper= {wrapper}
            >
                <Box sx={{color: "text.primary"}}>
                    <Typography variant="h3">{name}</Typography>
                    <Typography>{text}</Typography>
                </Box>
            </ConditionalWrapper>
        </Box>

        const elements = [el1, el2]
        if( i % 2 ! == 0 && width >= 900) elements.reverse()

        result.push(
            <Split key={`social.${i}`}>
                {elements}
            </Split>
        )
    }
    return (
        <>
            {result}
        </>
    )
}

type SplitType = {
    children: JSX.Element[]
}
function Split({children}:SplitType) {
    return(
        <Paper sx={{
            marginBottom: "20px"
        }}>
            <Grid container spacing={{ xs: 2, md:3}} columns={{xs:4,sm:8,md:12}} sx={{
                padding: "10px",
            }}>
                {children.map((e,i)=>(<Grid key={`split.i.${i}`} item xs = {6} sx={{margin: "auto"}}>{e}</Grid>))}
            </Grid>
        </Paper>
    )
}

export default Partner

type BoxType = {
    name: string,
    text: string,
    imgUrl: string,
}
type CategoryType = {
    name: string,
    content: BoxType[]
}
function Category({name, content}: CategoryType) {
    return <>
        <Typography variant="h3">{name}</Typography>
        <ImageTextWrapper>
            {content.map((e,i) => <ImageTextBox key={`item.${i}`}{...e}/>)}
        </ImageTextWrapper>
    </>
}