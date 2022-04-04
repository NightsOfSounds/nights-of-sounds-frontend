import { Box } from "@mui/material"
import { useEffect, useRef } from "react"

function Firefly() {

    const ref = useRef<HTMLDivElement>()
  
    useEffect(()=>{

        let x = Math.random() * document.body.clientWidth
        let y = window.innerHeight + (Math.random() * (document.body.clientHeight - window.innerHeight))

        const interval = ()=>{
            x = Math.max(Math.min(x+(Math.random() * 20 - 10), document.body.clientWidth), 0)
            y = Math.max(Math.min(y+(Math.random() * 20 - 10), document.body.clientHeight), window.innerHeight)

            if(ref.current) {
                ref.current.style.left = `${x}px`
                ref.current.style.top = `${y}px`
            }
        }
        interval()
        const i = setInterval(()=>interval(), 2000)
        return ()=>{clearInterval(i)}
    }, [ref])
  
  
  
    return <Box sx={{
        position: "absolute",
        width: "5px",
        height: "5px",
        borderRadius: "100%",
        backgroundColor: "#8fa8eb",
        boxShadow: "0px 0px 7px 0px #FFFFFF, 0px 0px 10px 1px #4E53FF, 0px 0px 15px 2px #373AB3",
        transition: "2s linear",
        willChange: "top, left"
    }} ref={ref}></Box>
}

export default Firefly