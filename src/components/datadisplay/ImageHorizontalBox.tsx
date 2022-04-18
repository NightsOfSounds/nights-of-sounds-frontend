import { Box, Paper, Stack, Typography } from "@mui/material"
import HoverImage from "../image/HoverImage"
import TextProcessor from "../text/TextProcessor"
import { ImageTextBoxType } from "./ImageTextBox"

interface ImageHorizontalBoxType extends ImageTextBoxType {
    alignment?: (0 | 1)
}
function ImageHorizontalBox({ name, text, imgUrl, alignment = 0 }: ImageHorizontalBoxType) {

    const imageEl = (
        <Box sx={{
            width: {
                xs: 300,
                md: 1 / 2
            },
            maxWidth: "100%",
                margin: {
                xs: "auto",
                md: "0",
            }
        }}>
            <Box sx={{
                overflow: "hidden",
                display: "flex",
                borderRadius: 1,
            }}>
                <HoverImage src={imgUrl} alt={`Cartoon portrait of ${name}`} />
            </Box>
        </Box>
    )

    const textEl = (
        <Box sx={{
            width: {
                xs: 1,
                md: 1 / 2
            },
            textAlign: {
                xs: "center",
                md: (alignment === 0 ? "left" : "right")
            }
        }}>
            <Typography variant="h4">{name}</Typography>
            <TextProcessor>{text}</TextProcessor>
        </Box>
    )

    return (
        <Paper sx={{
            width: "100%",
            padding: 2,
        }}>
            <Stack
                direction={{
                    xs: "column",
                    md: alignment === 0 ? "row" : "row-reverse"
                }}
                sx={{ width: "100%" }}
                gap={2}
            >
                {imageEl}
                {textEl}
            </Stack>
        </Paper>
    )
}

export default ImageHorizontalBox