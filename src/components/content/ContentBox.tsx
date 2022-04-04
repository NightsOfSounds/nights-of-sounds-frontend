import { Box } from "@mui/material"

type ContentBoxType = {
    children?: JSX.Element | JSX.Element[]
}
function ContentBox({children}:ContentBoxType) {
    return (
        <Box sx={{
        width: "1200px",
        margin: "auto",
        maxWidth: "calc( 100% - 20px )",
        }}>
        {children}
        </Box>
    )
}

export default ContentBox