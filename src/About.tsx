import { ContentBox, HoverImg, ImageTextBox, ImageTextBoxType, ImageTextWrapper, SiteTitle } from "./App"
import Profile01 from './img/profile01.svg'
import Profile02 from './img/profile02.svg'
import { Box, Paper, Stack, Typography } from "@mui/material"
import { experimental_sx as sx, styled } from "@mui/system"

function About() {
    return <ContentBox>
      <SiteTitle>About us</SiteTitle>
      <Stack>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}  gap={4}>
          <ImageHorizontalBox name="Fil106ip" text="Lorem Ipsum" imgUrl={Profile01} alignment={1}/>
          <ImageHorizontalBox name="Jareix" text="Lorem Ipsum" imgUrl={Profile02} alignment={0}/>
        </Stack>
      </Stack>
    </ContentBox>
}

interface ImageHorizontalBoxType extends ImageTextBoxType {
  alignment: number
}
function ImageHorizontalBox({name, text, imgUrl, alignment}:ImageHorizontalBoxType) {

  const el1 = <Box sx={{overflow: "hidden", width: "50%", display: "flex"}}>
                <HoverImg src={imgUrl}/>
              </Box>

  const el2 = <Box sx={{width: "50%", textAlign: (alignment === 0 ? "left" : "right")}}>
                <Typography variant="h4">{name}</Typography>
                <Typography>{text}</Typography>
              </Box>

  return <Paper sx={{
    width: "100%",
    padding: "20px",
  }}>
    <Stack direction="row" sx={{width: "100%"}} gap={2}>
      {alignment === 0 ? el1 : el2}
      {alignment === 0 ? el2 : el1}
      
    </Stack>
  </Paper>
}

export default About