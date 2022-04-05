import { Box, Paper, styled, Typography } from "@mui/material"
import HoverImage from "../image/HoverImage"
import { useLanguage } from "../localization/Localization"
import TextProcessor from "../text/TextProcessor"
import ConditionalWrapper from "../wrapper/ConditionalWrapper"

export type ImageTextBoxType = {
    name: string,
    text: string,
    imgUrl?: string,
    url?: string,
    experience?: string
}
function ImageTextBox({name, text, imgUrl, url, experience}:ImageTextBoxType) {
    
    const LinkEl = styled("a")({
        display: "contents"
    })
    const lang = useLanguage()
    
    return (
        <ConditionalWrapper
            condition={!!url}
            wrapper={(children) => <LinkEl href={url}>{children}</LinkEl>}>
            <Paper sx={{
                p: 2,
                width: "300px",
                display: "inline-block",
                m: 2,
                verticalAlign: "top",
            }}>
                {imgUrl && <Box sx={{
                    overflow: "hidden",
                    display: "flex",
                    marginBottom: 2,
                    borderRadius: 1,
                }}>
                    <HoverImage src={imgUrl} alt="Depiction of Title"/>
                </Box>}
                <Typography variant="h4">{name}</Typography>
                <TextProcessor sx={{marginTop: 2}}>{text}</TextProcessor>
                {experience && <Typography sx={{marginTop: 2}}>
                    <b>{lang("equipment.experience")}:</b> {experience}
                </Typography>}
            </Paper>
        </ConditionalWrapper>
    )
}
    
export default ImageTextBox