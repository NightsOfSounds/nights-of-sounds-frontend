import { Stack } from "@mui/material"
import Discord from "../../img/discord-logo.png"
import Instagram from "../../img/instagram-logo.png"
import Youtube from "../../img/youtube-logo.png"
import Patreon from "../../img/patreon-logo-2.png"
//import Twitter from "../../img/twitter-logo.png"
import Twitch from "../../img/twitch-logo.png"
//import Spotify from "../../img/spotify-logo.png"
import GitHub from "../../img/github-logo.png"
import Reddit from "../../img/reddit-logo.png"
import { useLanguage } from "../../components/localization/Localization";
import ContentBox from "../../components/content/ContentBox";
import SiteTitle from "../../components/title/SiteTitle";
import ImageTextBannerWrapper from "../../components/datadisplay/ImageTextBannerWrapper"

function Social() {

    const lang = useLanguage();

    const socialData = [
        {
            name: lang("social.youtube.name"),
            text: lang("social.youtube.text"),
            url: "https://www.youtube.com/channel/UCn1QDZMJicrd3CutKTr5Hhg",
            imgUrl: Youtube,
        },{
            name: lang("social.discord.name"),
            text: lang("social.discord.text"),
            url: "https://discord.gg/rEFcPuX",
            imgUrl: Discord,
        },{
            name: lang("social.instagram.name"),
            text: lang("social.instagram.text"),
            url: "https://www.instagram.com/nightsofsounds/",
            imgUrl: Instagram,
        },{
            name: lang("social.patreon.name"),
            text: lang("social.patreon.text"),
            url: "https://www.patreon.com/nightsofsounds",
            imgUrl: Patreon,
        },/*{
            name: "Twitter",
            text: lang("social.twitter.text"),
            url: "https://www.twitter.com",
            imgUrl: Twitter,
        },*/{
            name: lang("social.twitch.name"),
            text: lang("social.twitch.text"),
            url: "https://www.twitch.tv/nightsofsounds",
            imgUrl: Twitch,
        },/*{
            name: lang("social.spotify.name"),
            text: lang("social.spotify.text"),
            url: "https://www.spotify.com",
            imgUrl: Spotify,
        },*/{
            name: lang("social.reddit.name"),
            text: lang("social.reddit.text"),
            url: "https://www.reddit.com/r/nightsofsounds/",
            imgUrl: Reddit,
        },{
            name: lang("social.github.name"),
            text: lang("social.github.text"),
            url: "https://github.com/NightsOfSounds",
            imgUrl: GitHub
        }
    ]

    return (
        <ContentBox>
            <SiteTitle>{lang("social.title")}</SiteTitle>
            <Stack>
                <ImageTextBannerWrapper data={socialData}/>
            </Stack>
        </ContentBox>
    )
}

export default Social