import { Box } from "@mui/material"
import { useRef } from "react"
import { useScrollHandler } from "./scrollHandler"

function ProgressBar() {

    const ref = useRef<HTMLDivElement>()

    const scroll = () => {
        if(!ref.current) return;
        const clientHeight = document.body.clientHeight - window.innerHeight
        ref.current.style.width = `${(window.scrollY / clientHeight) * 100}%`
    }

    useScrollHandler(()=>{scroll()})

    return (
        <Box 
            ref={ref}
            sx={{
                position: "fixed",
                height: "1px",
                width: "0%",
                backgroundColor: "white",
                zIndex: 15,
                pointerEvents: "none",
            }}/>
    )
}

export default ProgressBar