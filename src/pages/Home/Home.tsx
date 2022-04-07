import { Paper, Stack, Typography, experimental_sx as sx } from '@mui/material';
import { Box, styled } from '@mui/system';
import ContentBox from '../../components/content/ContentBox';
import { useLanguage } from '../../components/localization/Localization';
import ScrollInto from '../../components/scroll/ScrollInto';
import YoutubEmbed from '../../components/social/YoutubeEmbed';
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
          <Typography variant="h5" sx={{marginBottom: 2}}>{lang("home.01.title")}</Typography>
            <Stack direction={{xs: "column", md: "row"}} gap={2}>
              <Box>
                <StyledImg alt="Profile image" src={NOS}/>
              </Box>
              <Box>
                <TextProcessor>
                  {lang("home.01.text")}
                </TextProcessor>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p:2}}>
            <Typography variant="h5" sx={{marginBottom: 2}}>{lang("home.02.title")}</Typography>
            <Stack direction={{xs: "column", md: "row"}}  gap={2}>
              <Box>
                <TextProcessor>
                {lang("home.02.text")}
                </TextProcessor>
              </Box>
            </Stack>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p:2}}>
            <Typography variant="h5" sx={{marginBottom: 2}}>{lang("home.03.title")}</Typography>
            <TextProcessor>{lang("home.03.text")}</TextProcessor>
            <YoutubEmbed controls/>
          </Paper>
        </ScrollInto>
        <ScrollInto>
          <Paper sx={{textAlign: "center", marginBottom: 4, p: 2}}>
            <Typography variant="h5" sx={{marginBottom: 2}}>{lang("home.04.title")}</Typography>
            <Stack direction={{xs: "column", md: "row"}}  gap={2}>
              <Box>
                <TextProcessor>
                  {lang("home.04.text")}
                </TextProcessor>
              </Box>
              <Box sx={{textAlign: "center"}}>
                <SyledIframe 
                  src="https://discord.com/widget?id=744705193995796522&theme=dark"
                  height="350"
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