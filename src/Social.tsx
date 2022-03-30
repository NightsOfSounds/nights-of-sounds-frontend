import { Box, Grid, Paper, Stack, Typography, experimental_sx as sx } from "@mui/material"
import { ConditionalWrapper, ContentBox, SiteTitle } from "./App"
import { useEffect, useState } from "react";
import Discord from "./img/discord-logo.png"
import Instagram from "./img/instagram-logo.png"
import Youtube from "./img/youtube-logo.png"
import { styled } from "@mui/system";

function Social() {

    const socialData = [
        {
            name: "Youtube",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur fugit sunt quae aspernatur nemo obcaecati. Blanditiis facere totam exercitationem incidunt cupiditate, culpa inventore adipisci, provident dicta dolorum amet nihil!",
            url: "https://www.youtube.com",
            imgUrl: Youtube,
        },{
            name: "Discord",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur fugit sunt quae aspernatur nemo obcaecati. Blanditiis facere totam exercitationem incidunt cupiditate, culpa inventore adipisci, provident dicta dolorum amet nihil!",
            url: "https://www.discord.com",
            imgUrl: Discord,
        },{
            name: "Instagram",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consectetur fugit sunt quae aspernatur nemo obcaecati. Blanditiis facere totam exercitationem incidunt cupiditate, culpa inventore adipisci, provident dicta dolorum amet nihil!",
            url: "https://www.instagram.com",
            imgUrl: Instagram,
        }
    ]

    return (
        <ContentBox>
            <SiteTitle>Social media</SiteTitle>
            <Stack>
                <SocialWrapper data={socialData}/>
            </Stack>
        </ContentBox>
    )
}

type SocialWrapperType = {
    data: SocialDataType[]
}
type SocialDataType = {
    name: string,
    text: string,
    url?: string,
    imgUrl: string
}
export function SocialWrapper({data}:SocialWrapperType):JSX.Element {
    const result = []

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const listener = ()=>{
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", listener);
        return ()=>{window.removeEventListener("resize", listener)}
    }, []);

    for(var i = 0; i<data.length; i++) {

        const {name, text, url, imgUrl} = data[i];
        let textAligns = ["right", "left"]
        if(width < 900) textAligns = ["center", "center"]
        if(i % 2 !== 0) textAligns = textAligns.reverse();

        let margins = ["0px", "20px"]
        if(width < 900) margins = ["0", "0"]
        if( i % 2 !== 0) margins = margins.reverse()
        
        const StyledLink = styled("a")({
            textDecoration: "none",
        })

        const wrapper = (children:JSX.Element) => <StyledLink href={url} target="_blank" rel="noreferrer" className="noUnderline">{children}</StyledLink>

        const SocialImage = styled("img")(
            sx([
                {
                    maxWidth: "100",
                    maxHeight: "200px",
                    transition: ".3s",
                    filter: "grayscale(0.3)",
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
            marginLeft: margins[0]
        }}>
            <ConditionalWrapper
                condition={url !== null}
                wrapper={wrapper}
            >
                <SocialImage src={imgUrl} alt={`${name} logo`}/>
            </ConditionalWrapper>
        </Box>

        const el2 = <Box key="e.1" sx={{
            margin: "auto",
            textAlign: textAligns[1]
        }}>
            <ConditionalWrapper
                condition={url !== null}
                wrapper={wrapper}
            >
                <Box sx={{color: "text.primary"}}>
                    <Typography variant="h3">{name}</Typography>
                    <Typography>{text}</Typography>
                </Box>
            </ConditionalWrapper>
        </Box>

        const elements = [el1, el2]
        if(i % 2 !== 0 && width >= 900) elements.reverse()

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
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
        padding: "10px",
    }}>
        {children.map((e,i)=>(<Grid key={`split.i.${i}`} item xs={6} sx={{margin: "auto"}}>{e}</Grid>))}
    </Grid>
    </Paper>
    )
}

export default Social