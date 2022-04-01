import { Box, Grid, Paper, Stack, Typography, experimental_sx as sx } from "@mui/material"
import { ConditionalWrapper, ContentBox, SiteTitle } from "./App"
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Discord from "./img/discord-logo.png"
import Instagram from "./img/instagram-logo.png"
import Youtube from "./img/youtube-logo.png"
import Patreon from "./img/patreon-logo.png"
import Twitter from "./img/twitter-logo.png"
import Twitch from "./img/twitch-logo.png"
import Spotify from "./img/spotify-logo.png"
import GitHub from "./img/github-logo.png"
import { useLanguage } from "./Localization";

function Social() {

    const lang = useLanguage();

    const socialData = [
        {
            name: "Youtube",
            text: lang("social.youtube.text"),
            url: "https://www.youtube.com",
            imgUrl: Youtube,
        },{
            name: "Discord",
            text: lang("social.discord.text"),
            url: "https://www.discord.com",
            imgUrl: Discord,
        },{
            name: "Instagram",
            text: lang("social.instagram.text"),
            url: "https://www.instagram.com",
            imgUrl: Instagram,
        },{
            name: "Patreon",
            text: lang("social.patreon.text"),
            url: "https://www.patreon.com",
            imgUrl: Patreon,
        },{
            name: "Twitter",
            text: lang("social.twitter.text"),
            url: "https://www.twitter.com",
            imgUrl: Twitter,
        },{
            name: "Twitch",
            text: lang("social.twitch.text"),
            url: "https://www.twitch.tv",
            imgUrl: Twitch,
        },{
            name: "Spotify",
            text: lang("social.spotify.text"),
            url: "https://www.spotify.com",
            imgUrl: Spotify,
        },{
            name: "GitHub",
            text: lang("social.github.text"),
            url: "https://github.com/NightsOfSounds",
            imgUrl: GitHub
        }
    ]

    return (
        <ContentBox>
            <SiteTitle>{lang("social.title")}</SiteTitle>
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
                    height: "200px",
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
            marginLeft: margins[0],
        }}>
            <ConditionalWrapper
                condition={url !== null}
                wrapper={wrapper}
            >
                <SocialImage src={imgUrl} alt={`${name} logo`} className="socialImage" />
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