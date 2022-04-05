import { Stack } from '@mui/material'
import Thomann from "../../img/thomann-logo.png"
import Amazon from "../../img/amazon-logo-2.png"
import { useLanguage } from '../../components/localization/Localization'
import ContentBox from '../../components/content/ContentBox'
import SiteTitle from '../../components/title/SiteTitle'
import ImageTextBannerWrapper from '../../components/datadisplay/ImageTextBannerWrapper'

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
                <ImageTextBannerWrapper data={partnerData}/>
            </Stack>
    </ContentBox>
}

export default Partner