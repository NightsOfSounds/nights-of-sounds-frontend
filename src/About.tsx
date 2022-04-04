import { ContentBox, HoverImg, ImageTextBoxType, ScrollInto, SiteTitle, TextProcessor } from "./App"
import Profile01 from './img/profile01.svg'
import Profile02 from './img/profile02.svg'
import { Box, Grid, Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useLanguage } from "./Localization"

function About() {

    const lang = useLanguage();

    return <ContentBox>
      <SiteTitle>{lang("about.title")}</SiteTitle>
      <Grid container spacing={4} columns={{xs: 6, md: 12}}>
        <Grid item xs={6}>
        <ScrollInto>
          <ImageHorizontalBox 
            name={lang("about.user01.name")} 
            text={lang("about.user01.text")}
            imgUrl={Profile01} 
            alignment={1}/>
        </ScrollInto>
        </Grid>
        <Grid item xs={6}>
          <ScrollInto>
          <ImageHorizontalBox 
            name={lang("about.user02.name")} 
            text={lang("about.user02.text")}
            imgUrl={Profile02} 
            alignment={0}/>
          </ScrollInto>
        </Grid>
      </Grid>
    </ContentBox>
}

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
                  <HoverImg src={imgUrl} alt="User"/>
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

export default About