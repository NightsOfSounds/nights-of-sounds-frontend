import { Typography } from "@mui/material"
import ImageTextBox from "../datadisplay/ImageTextBox"
import ImageTextWrapper from "../datadisplay/ImageTextWrapper"
import ScrollInto from "../scroll/ScrollInto"

type BoxType = {
    name: string,
    text: string,
    imgUrl?: string,
}
type CategoryType = {
    name: string,
    subtitle?: string,
    content: BoxType[]
}
function Category({name, subtitle, content}:CategoryType) {

    return <ScrollInto>
        <>
        <Typography variant="h3" sx={{display: "inline-block"}}>{name}</Typography>
        {subtitle && <Typography sx={{display: "inline-block", marginLeft: 2}}>{subtitle}</Typography>}
        <ImageTextWrapper sameHeight>
            {content.map((e, i) => <ImageTextBox key={`item.${i}`} {...e} />)}
        </ImageTextWrapper>
        </>
    </ScrollInto>
}

export default Category