import { styled } from "@mui/material";
import { useEffect, useRef } from "react";

type YoutubeEmbedType = {
    index?: number,
    controls?: boolean,
    autoplay?:boolean,
}
function YoutubEmbed({index = 0, controls = false, autoplay = false}:YoutubeEmbedType) {

    const ref = useRef<HTMLIFrameElement>(null)

    const ytChannelId = "UCn1QDZMJicrd3CutKTr5Hhg"
    const reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");

    useEffect(()=>{
        if(!ref.current) return

        fetch(reqURL + ytChannelId)
            .then(response=>response.json())
            .then(data=>{
                if(!ref.current) return
                const i = index >= 0 ? index : (data.items.length + index + 1)
                const link = data.items[i].link;
                const id = link.substr(link.indexOf("=") + 1);
                ref.current.setAttribute("src", `https://youtube.com/embed/${id}?controls=${controls ? 1 : 0}&autoplay=${autoplay ? 1 : 0}`);
            })
    }, [ref, reqURL, ytChannelId, index, controls, autoplay])

    const StyledIframe = styled("iframe")({
        width: "600px",
        maxWidth: "100%",
        aspectRatio: "16 / 9"
    })

    return (
        <StyledIframe
            title="Latest YouTube video"
            ref={ref}
            frameBorder={0}
            allowFullScreen={true}/>
    )
}

export default YoutubEmbed