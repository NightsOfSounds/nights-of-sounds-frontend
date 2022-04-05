import { styled, experimental_sx as sx, Box, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import TextProcessor from "../text/TextProcessor"
import ConditionalWrapper from "../wrapper/ConditionalWrapper"
import ImageTextBanner from "./ImageTextBanner"

type SocialWrapperType = {
    data: SocialDataType[]
}
type SocialDataType = {
    name: string,
    text: string,
    url?: string,
    imgUrl: string
}
function ImageTextBannerWrapper({data}:SocialWrapperType):JSX.Element {
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
        <ImageTextBanner key={`social.${i}`}>
            {elements}
        </ImageTextBanner>
        )
    }
    return (
        <>
            {result}
        </>
    )
}

export default ImageTextBannerWrapper