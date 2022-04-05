import { Box } from "@mui/material"
import { useEffect, useRef, useState } from "react"

type ScrollIntoType = {
    children: string | JSX.Element |JSX.Element[]
}
export function ScrollInto({children}:ScrollIntoType) {
  
    const [show, setShow] = useState(false)
    const [armed, setArmed] = useState(false)
    const ref = useRef<HTMLDivElement>()
  
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY <= 100) {
                setArmed(true)
            }
            if(!ref.current) return
            if((window.innerHeight+30 >= ref.current.getBoundingClientRect().top) && armed===true) {

                setShow(true)
                window.removeEventListener("scroll", handleScroll)
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [ref, armed]);
  
    return (
        <Box ref={ref} sx={{
            transform: show ? "" : "translateY(75px)",
            opacity: show ? 1 : 0,
            transition: ".5s",
        }}>
            {children}
        </Box>
    )
}

export default ScrollInto