import { Box } from '@mui/system';
import { ContentBox, SiteTitle } from './App';
import { useLanguage } from './Localization';

function Home() {

    const lang = useLanguage()

    return (
      <ContentBox>
        <SiteTitle>{lang("home.title")}</SiteTitle>
        <iframe 
            src="https://discord.com/widget?id=744705193995796522&theme=dark" 
            width="350" 
            height="500"
            frameBorder={0} 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title='Discord server overview'
          ></iframe>
          <Box>
            &nbsp;
          </Box>
          <iframe src="https://discord.com/widget?id=706989681950064663&theme=dark" 
            width="350" 
            height="500"
            frameBorder={0} 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
        </ContentBox>
    )
}

export default Home