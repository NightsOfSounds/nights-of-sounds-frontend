import { Language } from "@mui/icons-material"
import { Box, styled } from "@mui/material"
import { languages, useLanguageSelected } from "../localization/Localization"

function LanguageIcon() {
    const language = useLanguageSelected()

    const StyledImg = styled("img")({
        position: "absolute",
        width: "15px",
        height: "15px",
        bottom: "-10%",
        right: "-20%",
        borderRadius: "100%",
    })

    return (
        <Box sx={{
            display: "flex",
            position: "relative",
        }}>
            <Language/>
            <StyledImg src={languages.filter(e => e.short === language)[0].image}/>
        </Box>
    )
}

export default LanguageIcon