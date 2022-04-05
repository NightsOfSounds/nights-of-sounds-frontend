import { Box, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import HoverImage from "../image/HoverImage"
import TextProcessor from "../text/TextProcessor"
import { ImageTextBoxType } from "./ImageTextBox"

interface ImageHorizontalBoxType extends ImageTextBoxType {
    alignment: number
}
function ImageHorizontalBox({name, text, imgUrl, alignment}:ImageHorizontalBoxType) {
  
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  
    const el1 = <Box sx={{
                  width: {xs: 300, md: 1/2}, 
                  maxWidth: "100%", 
                  margin: isMobile ? "auto" : "",
                }}>
                  <Box sx={{
                      overflow: "hidden",
                      display: "flex",
                      borderRadius: 1,
                  }}>
                    <HoverImage src={imgUrl} alt="User"/>
                  </Box>
                </Box>
  
    const el2 = <Box sx={{width: {xs: 1, md:  1/2}, textAlign: (isMobile ? "center" : (alignment === 0 ? "left" : "right"))}}>
                  <Typography variant="h4">{name}</Typography>
                  <TextProcessor>{text}</TextProcessor>
                </Box>
  
    return <Paper sx={{
      width: "100%",
      padding: 2,
    }}>
      <Stack direction={{xs: "column", md: "row"}} sx={{width: "100%"}} gap={2}>
        {alignment === 0 ? el1 : el2}
        {alignment === 0 ? el2 : el1}
        
      </Stack>
    </Paper>
}

export default ImageHorizontalBox