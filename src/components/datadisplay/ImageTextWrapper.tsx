import { Box } from "@mui/material"

type ImageWrapperType = {
    children?: JSX.Element | JSX.Element[],
    carousel?: any
    sameHeight?: any
}
function ImageTextWrapper({children, carousel, sameHeight}:ImageWrapperType) {
    return (
        <Box sx={{
            display: ((carousel || sameHeight) ? "flex" : "block"),
            textAlign: "center",
            overflowX: "auto",
            margin: "auto",
            justifyContent: sameHeight ? "center" : "",
            flexWrap: sameHeight ? "wrap" : "",
        }}>
            {children}
        </Box>
    )
}

export default ImageTextWrapper