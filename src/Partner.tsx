import { Stack } from '@mui/material'
import { ContentBox, SiteTitle } from './App'
import Thomann from "./img/thomann-logo.png"
import Amazon from "./img/amazon-logo-2.png"
import { useLanguage } from './Localization'
import { SocialWrapper } from './Social'

function Partner() {

    const lang = useLanguage()

    const partnerData = [
       
                {
                    name: "Thomann",
                    text: lang("partner.thomann.text"),
                    url: "https://www.thomann.de",
                    imgUrl: Thomann,
                },{
                    name: "Amazon",
                    text: lang("partner.amazon.text"),
                    url: "https://www.amazon.de",
                    imgUrl: Amazon,
                }
        
    
    ]

    return <ContentBox>
            <SiteTitle>{lang("partner.title")}</SiteTitle>
            <Stack>
                <SocialWrapper data={partnerData}/>
            </Stack>
    </ContentBox>
}

export default Partner