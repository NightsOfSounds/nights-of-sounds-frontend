import { Box, styled, Typography } from "@mui/material";

type TextProcessorType = {
    children: string,
    sx?: any
}
function TextProcessor({children, sx}:TextProcessorType) {
  
    let lines = children.split("|")

    lines = lines.flatMap(e => {
      if(e.includes("[") && e.includes("]")) {
        const pos1 = e.indexOf("[")
        const pos2 = e.indexOf("]")+1

        return [
          e.substring(0, pos1),
          e.substring(pos1, pos2),
          e.substring(pos2, e.length)
        ]
      } else {
        return [e]
      }
    }).filter( e => e.trim().length > 0)

    const elements:JSX.Element[] = []

    const StyledUl = styled("ul")({
      textAlign: "left"
    })

    for(let i = 0; i<lines.length; i++) {
      const line = lines[i]
      if(line.startsWith("[")) {
        elements.push(<StyledUl key={`ul.${i}`}>
          {line.substring(1, line.length - 1).split(",,").map((e, i2) => <li key={`li.${i}.${i2}`}>{e}</li>)}
        </StyledUl>)
      } else {
        elements.push(<Typography key={`text.${i}`} sx={{marginBottom: (i !== lines.length - 1) ? 2 : 0}}>{line}</Typography>)
      }
    }

    return <Box sx={sx}>{elements}</Box>  
}

export default TextProcessor