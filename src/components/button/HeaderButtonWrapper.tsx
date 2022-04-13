import { Box, styled } from "@mui/material"
import { createRef, useState } from "react"
import HeaderButton from "./HeaderButton"

const StyledNav = styled("nav")({
    display: "inline-block",
    position: "relative",
})

type LinkType = {
    name: string,
    url: string
  }
type HeaderButtonWrapperType = {
    links: LinkType[]
}
function HeaderButtonWrapper({links}:HeaderButtonWrapperType) {

    const [pos, setPos] = useState(0)
    const [width, setWidth] = useState(0)
    const [view, setView] = useState(false)
    const [transition, setTransition] = useState(false)
    const ref = createRef<HTMLDivElement>()

    const onHover = (e:HTMLDivElement)=>{
        setPos(e.getBoundingClientRect().left - (ref.current?.getBoundingClientRect().left || 0))
        setWidth(e.getBoundingClientRect().right - e.getBoundingClientRect().left)
    }

    return (
        <StyledNav
        ref={ref} 
        onMouseLeave={() => {
            setView(false)
        }}
        onMouseEnter={() => {
            setView(true)
            setTransition(true)
        }}>
            {links.map((e, i) => <HeaderButton onHover={onHover} key={`header.button.${i}`} url={e.url}>{e.name}</HeaderButton>)}
            <Box sx={{
                position: "absolute",
                top: "10px",
                left: `${pos}px`,
                width: `${width}px`,
                borderBottom: "2px solid white",
                height: "calc( 100% - 20px )",
                transition: transition ? "all .3s" : "opacity .3s",
                pointerEvents: "none",
                opacity: view ? "1" : "0"
            }}/>
        </StyledNav>
    )
}

export default HeaderButtonWrapper