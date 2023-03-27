import { Box } from "@mui/material"
import { useRef, useState } from "react"
import { useScrollHandler } from "./scrollHandler"

function ProgressBar() {

    const ref = useRef<HTMLDivElement>()
    const [width, setWidth] = useState(0);

    const scroll = () => {
        if(!ref.current) return;
        const clientHeight = document.body.scrollHeight - window.innerHeight
        setWidth((window.scrollY / clientHeight) * 100)
    }

    useScrollHandler(scroll)

    return (
        <Box 
            ref={ref}
            sx={{
                position: "fixed",
                height: "1px",
                width: `${width}%`,
                backgroundColor: "white",
                zIndex: 15,
                pointerEvents: "none",
            }}/>
    )
}

export default ProgressBar