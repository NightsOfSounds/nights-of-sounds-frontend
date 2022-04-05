import { Paper, Stack, Typography, experimental_sx as sx } from '@mui/material';
import { Box, styled } from '@mui/system';
import ContentBox from '../../components/content/ContentBox';
import { useLanguage } from '../../components/localization/Localization';
import ScrollInto from '../../components/scroll/ScrollInto';
import TextProcessor from '../../components/text/TextProcessor';
import SiteTitle from '../../components/title/SiteTitle';
import NOS from '../../img/nos-logo.png'

function Home() {

    const lang = useLanguage()
    const StyledImg = styled("img")(
      sx([{
        width: "200px",
        maxWidth: {
          xs: "100%",
          md: "200px",
        },
        borderRadius: 1,
      }])
    )

    const SyledIframe = styled("iframe")(
      sx([{
        width: "350px",
        maxWidth: {
          xs: "100%",
          md: "350px",
        },
      }])
    )

    return (
      <ContentBox>
        <SiteTitle>{lang("home.title")}</SiteTitle>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p:2}}>
          <Typography variant="h5" sx={{marginBottom: 2}}>We are Nights of Sounds, who are you?</Typography>
            <Stack direction={{xs: "column", md: "row"}} gap={2}>
              <Box>
                <StyledImg alt="Profile image" src={NOS}/>
              </Box>
              <Box>
                <TextProcessor>
                  We are two guys from the southwest of Germany, we can't live without music and it's everything for us, 
                  and because we have done random stuff together, and our most random idea was to start with Youtube. 
                  We met for the first time on a Minecraft Role Play server at the beginning of the corona pandemic in 2020. |
                  </TextProcessor>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p:2}}>
            <Typography variant="h5" sx={{marginBottom: 2}}>(Musical) Background</Typography>
            <Stack direction={{xs: "column", md: "row"}}  gap={2}>
              <Box>
                <TextProcessor>
                At the age of about 7 we came into contact with music by learning accordeon and violin, 
                these instruments are our main instruments, later we taught ourselves instruments like piano, 
                guitar or bass. We were also a member of the school choir for a while, later we also came into 
                contact with video and music production and were allowed to try synchronization as Voice Actors 
                for various school projects.
                  </TextProcessor>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p:2}}>
            <Typography variant="h5" sx={{marginBottom: 2}}>Lorem Ipsum</Typography>
            <Stack direction={{xs: "column", md: "row"}}  gap={2}>
              <Box>
                <TextProcessor>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor.</TextProcessor>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p:2}}>
            <Typography variant="h5" sx={{marginBottom: 2}}>Lorem Ipsum</Typography>
            <Stack direction={{xs: "column", md: "row"}}  gap={2}>
              <Box>
                <TextProcessor>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat error illum quae assumenda incidunt neque omnis officiis? Ullam odit, iure veritatis nulla magnam reprehenderit accusantium repudiandae minus est, tenetur dolor.</TextProcessor>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p: 2}}>
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
                <SyledIframe 
                  src="https://discord.com/widget?id=744705193995796522&theme=dark"
                  height="500"
                  frameBorder={0} 
                  sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  title='Discord server overview'
                ></SyledIframe>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        </ContentBox>
    )
}

export default Home