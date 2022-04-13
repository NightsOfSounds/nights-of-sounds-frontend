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

    useEffect(() => {
        if(!ref) return
        if((typeof Worker) === "undefined") return
        const worker = new Worker("./workers/youtubeWorker.js")
        worker.postMessage(
            {
                index,
                ytChannelId,
                reqURL,
            }
        )
        worker.onmessage = (event: MessageEvent) => {
            const { data } = event
            ref.current?.setAttribute("src", `https://youtube.com/embed/${data}?controls=${controls ? 1 : 0}&autoplay=${autoplay ? 1 : 0}`)
        }
    }, [ref, reqURL, ytChannelId, index, controls, autoplay])

    const StyledIframe = styled("iframe")({
        width: "600px",
        maxWidth: "100%",
        aspectRatio: "16 / 9"
    })

    return (
        <StyledIframe
            title="Latest YouTube video"
            role="presentation"
            loading="lazy"
            ref={ref}
            frameBorder={0}
            allowFullScreen={true}/>
    )
}

export default YoutubEmbed