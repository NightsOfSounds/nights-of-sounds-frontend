import { Paper, Typography } from '@mui/material'
import { ContentBox, ImageTextBox, ImageTextWrapper, SiteTitle } from './App'
import IMG from './img/th.jpg'

export default function Partner() {

    const content = [
       
                {
                    "name": "Thomann",
                    "text": "Our main source for music equipment",
                    "imgUrl": IMG,
                },{
                    "name": "Amazon",
                    "text": "Our main source of random stuff",
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