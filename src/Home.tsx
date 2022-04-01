import { Paper, Stack, Typography, experimental_sx as sx } from '@mui/material';
import { Box, styled } from '@mui/system';
import { ContentBox, SiteTitle, TextProcessor } from './App';
import { useLanguage } from './Localization';
import NOS from './img/nos-logo.png'

function Home() {

    const lang = useLanguage()
    const StyledImg = styled("img")(
      sx([{
        width: "300px",
        maxWidth: "100%",
        borderRadius: 1,
      }])
    )

    return (
      <ContentBox>
        <SiteTitle>{lang("home.title")}</SiteTitle>
        <Paper sx={{textAlign: "center", marginBottom: 3, p:2}}>
        <Typography variant="h5" sx={{marginBottom: 2}}>We are Nights of Sounds, who are you?</Typography>
          <Stack direction={{xs: "column", md: "row"}} gap={2}>
            <Box>
              <StyledImg alt="Profile image" src={NOS}/>
            </Box>
            <Box>
              <TextProcessor>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor. |
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor. |
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor.
              </TextProcessor>
            </Box>
          </Stack>
        </Paper>
        <Paper sx={{textAlign: "center", marginBottom: 3, p:2}}>
          <Typography variant="h5" sx={{marginBottom: 2}}>Lorem Ipsum</Typography>
          <Stack direction={{xs: "column", md: "row"}}  gap={2}>
            <Box>
              <TextProcessor>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor.</TextProcessor>
            </Box>
          </Stack>
        </Paper>
        <Paper sx={{textAlign: "center", marginBottom: 3, p:2}}>
          <Typography variant="h5" sx={{marginBottom: 2}}>Lorem Ipsum</Typography>
          <Stack direction={{xs: "column", md: "row"}}  gap={2}>
            <Box>
              <TextProcessor>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor.</TextProcessor>
            </Box>
          </Stack>
        </Paper>
        <Paper sx={{textAlign: "center", marginBottom: 3, p:2}}>
          <Typography variant="h5" sx={{marginBottom: 2}}>Lorem Ipsum</Typography>
          <Stack direction={{xs: "column", md: "row"}}  gap={2}>
            <Box>
              <TextProcessor>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor.</TextProcessor>
            </Box>
          </Stack>
        </Paper>
        <Paper sx={{textAlign: "center", marginBottom: 3, p: 2}}>
          <Typography variant="h5" sx={{marginBottom: 2}}>Get in contact</Typography>
          <Stack direction={{xs: "column", md: "row"}}  gap={2}>
            <Box>
              <TextProcessor>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odit, illum assumenda explicabo quos culpa repudiandae corrupti asperiores consequatur magni quaerat commodi cupiditate sed excepturi? Minima impedit ex corporis ab! |
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odit, illum assumenda explicabo quos culpa repudiandae corrupti asperiores consequatur magni quaerat commodi cupiditate sed excepturi? Minima impedit ex corporis ab! |
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odit, illum assumenda explicabo quos culpa repudiandae corrupti asperiores consequatur magni quaerat commodi cupiditate sed excepturi? Minima impedit ex corporis ab! |
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odit, illum assumenda explicabo quos culpa repudiandae corrupti asperiores consequatur magni quaerat commodi cupiditate sed excepturi? Minima impedit ex corporis ab! |
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odit, illum assumenda explicabo quos culpa repudiandae corrupti asperiores consequatur magni quaerat commodi cupiditate sed excepturi? Minima impedit ex corporis ab! |
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil odit, illum assumenda explicabo quos culpa repudiandae corrupti asperiores consequatur magni quaerat commodi cupiditate sed excepturi? Minima impedit ex corporis ab!
              </TextProcessor>
            </Box>
            <Box sx={{textAlign: "center"}}>
              <iframe 
                src="https://discord.com/widget?id=744705193995796522&theme=dark" 
                width="350" 
                height="500"
                frameBorder={0} 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title='Discord server overview'
              ></iframe>
            </Box>
          </Stack>
        </Paper>
        </ContentBox>
    )
}

export default Home