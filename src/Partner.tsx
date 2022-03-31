import { Paper, Typography } from '@mui/material'
import { ContentBox, ImageTextBox, ImageTextWrapper, SiteTitle } from './App'
import IMG from './img/th.jpg'
import { useLanguage } from './Localization'

export default function Partner() {

    const lang = useLanguage()

    const content = [
       
                {
                    "name": "Thomann",
                    "text": lang("partner.thomann.text"),
                    "imgUrl": IMG,
                },{
                    "name": "Amazon",
                    "text": lang("partner.amazon.text"),
                    "imgUrl": IMG,
                }
        
    
    ]

    return <ContentBox>
            <SiteTitle> Partner </SiteTitle>
            <>
            <div>
                {content.map(e => <Paper>
                    <h3>{e.name}</h3>
                    <h4>{e.text}</h4>
                </Paper>)}
            </div>
               {/* {content.map((e,i)=> <Category key={`category.${i}`}{...e}/>)}
            */}</>
    </ContentBox>
}

type BoxType = {
    name: string,
    text: string,
    imgUrl: string,
}
type CategoryType = {
    name: string,
    content: BoxType[]
}
function Category({name, content}: CategoryType) {
    return <>
        <Typography variant="h3">{name}</Typography>
        <ImageTextWrapper>
            {content.map((e,i) => <ImageTextBox key={`item.${i}`}{...e}/>)}
        </ImageTextWrapper>
    </>
}