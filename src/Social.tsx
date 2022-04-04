import { Box, Grid, Paper, Stack, Typography, experimental_sx as sx } from "@mui/material"
import { ConditionalWrapper, ContentBox, ScrollInto, SiteTitle, TextProcessor } from "./App"
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import Discord from "./img/discord-logo.png"
import Instagram from "./img/instagram-logo.png"
import Youtube from "./img/youtube-logo.png"
import Patreon from "./img/patreon-logo-2.png"
import Twitter from "./img/twitter-logo.png"
import Twitch from "./img/twitch-logo.png"
import Spotify from "./img/spotify-logo.png"
import GitHub from "./img/github-logo.png"
import Reddit from "./img/reddit-logo.png"
import { useLanguage } from "./Localization";

function Social() {

    const lang = useLanguage();

    const socialData = [
        {
            name: "Youtube",
            text: lang("social.youtube.text"),
            url: "https://www.youtube.com/channel/UCn1QDZMJicrd3CutKTr5Hhg",
            imgUrl: Youtube,
        },{
            name: "Discord",
            text: lang("social.discord.text"),
            url: "https://discord.gg/rEFcPuX",
            imgUrl: Discord,
        },{
            name: "Instagram",
            text: lang("social.instagram.text"),
            url: "https://www.instagram.com/nightsofsounds/",
            imgUrl: Instagram,
        },{
            name: "Patreon",
            text: lang("social.patreon.text"),
            url: "https://www.patreon.com/nightsofsounds",
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
            name: "Reddit",
            text: lang("social.reddit.text"),
            url: "https://www.reddit.com/r/nightsofsounds/",
            imgUrl: Reddit,
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

        let margins = [0, 4]
        if(width < 900) margins = [0, 0]
        if( i % 2 !== 0) margins = margins.reverse()
        
        const StyledLink = styled("a")({
            textDecoration: "none",
        })

        const wrapper = (children:JSX.Element) => <StyledLink href={url} target="_blank" rel="noreferrer" className="noUnderline">{children}</StyledLink>

        const SocialImage = styled("img")(
            sx([
                {
                    maxWidth: "100%",
                    height: "200px",
                    transition: ".3s",
                    filter: {
                        xs: "grayscale(0)",
                        md: "grayscale(0.3)",
                    },
                },{
                    "&:hover": {
                        transform: {
                            xs: "",
                            md: "scale(1.1)",
                        },
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
                    <TextProcessor>{text}</TextProcessor>
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
    children: JSX.Element[],
}
function Split({children}:SplitType) {

    return(
        <ScrollInto>
            <Paper sx={{
                marginBottom: 4,
                display: "flex"
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                    padding: 2,
                }}>
                    {children.map((e,i)=>(<Grid key={`split.i.${i}`} item xs={6} sx={{margin: "auto"}}>{e}</Grid>))}
                </Grid>
            </Paper>
        </ScrollInto>
    )
}

export default Social