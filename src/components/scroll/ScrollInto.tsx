import { Box } from "@mui/material"
import { useEffect, useRef } from "react"
import { useScrollHandler } from "./scrollHandler"

type ScrollIntoType = {
    children: string | JSX.Element |JSX.Element[]
}
export function ScrollInto({children}:ScrollIntoType) {
    let armed = false

    const ref = useRef<HTMLDivElement>()
  
    const handleScroll = () => {
        if(window.scrollY <= 100) {
            armed = true;
        }
        if(!ref.current) return
        if((window.innerHeight+30 >= ref.current.getBoundingClientRect().top) && armed===true) {

            ref.current.style.opacity = "1"
            ref.current.style.transform = "translateY(0)"
        }
    };

    useEffect(()=>{
        handleScroll()
    }, [ref])

    useScrollHandler(handleScroll)
  
    return (
        <Box ref={ref} sx={{
            transform: "translateY(75px)",
            opacity: 0,
            transition: ".5s",
        }}>
            {children}
        </Box>
    )
}

export default ScrollInto