import { Box, styled, Typography } from "@mui/material";

type TextProcessorType = {
    children: string,
    sx?: any
}
 export function TextProcessor({children, sx}:TextProcessorType) {
  
    let remaining = children
    let elements = [];
  
    let isList = false
    let counter = 0
    while(remaining.length > 0  && counter < 100) {
        let delimiter = "|"
        if(isList) {
  
        const StyledUl = styled("ul")({
            textAlign: "left"
        })
  
        elements.push(
          <StyledUl key={`ul.${counter}`}>
            {remaining.substring(0, remaining.indexOf("]")).split(",,").map((e,i)=>(
              <li key={`li.${i}`}>{e}</li>
            ))}
          </StyledUl>
        )
        remaining = remaining.substring(remaining.indexOf("]") + 1)
        isList = false
    } else {
        let margin = true
        let index1 = remaining.indexOf("|")
        if(index1 < 0) index1 = remaining.length
  
        let index2 = remaining.indexOf("[")
        if(index2 < 0) index2 = remaining.length
  
        if(index1 > index2) {
          delimiter = "["
          isList = true
          margin = false
        }
        let end = remaining.indexOf(delimiter)
        if(remaining.indexOf(delimiter) < 0) {
            end = remaining.length
            margin = false
        }
  
        elements.push(<Typography key={`text.${counter}`} sx={{marginBottom: margin ? 2 : 0}}>
            {remaining.substring(0, end)}
        </Typography>)
        remaining = remaining.substring(end +1)
      }
      counter++
    }
    return <Box sx={sx}>{elements}</Box>
  
}

export default TextProcessor