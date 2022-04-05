import Profile01 from '../../img/profile01.svg'
import Profile02 from '../../img/profile02.svg'
import { Grid } from "@mui/material"
import { useLanguage } from "../../components/localization/Localization"
import ContentBox from '../../components/content/ContentBox';
import SiteTitle from '../../components/title/SiteTitle';
import ScrollInto from '../../components/scroll/ScrollInto';
import ImageHorizontalBox from '../../components/datadisplay/ImageHorizontalBox';

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

export default About