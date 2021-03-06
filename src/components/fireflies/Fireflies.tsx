import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Firefly from "./Firefly"

type SizeStateType = {
    width?: number,
    height?: number,
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState<SizeStateType>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {

        function handleResize() {

            const width = document.body.clientWidth
            const height = document.body.clientHeight
    
            if(width === windowSize.width && height === windowSize.height) return
    
            setWindowSize({
                width,
                height,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [windowSize]);

    return windowSize;
}

function Fireflies() {
  
    const [amount, setAmount] = useState(0)
    const [transition, setTransition] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const location = useLocation()
    const windowSize = useWindowSize()
  
    useEffect(() => {
        const resize = () =>{
            setTransition(0.2)
            setOpacity(0)
            setTimeout(() => {
                setAmount(0)
                setAmount(parseInt((document.body.clientHeight * document.body.clientWidth * .00002).toString()))
                
                setTimeout(() => {
                    setTransition(3)
                    setTimeout(() => {
                        setOpacity(1)
                    }, 10)
                }, 100)
            }, 205)
        }
        resize();
  
    }, [location, windowSize])
  
    const lights = []
    for(let i = 0; i<amount; i++) {
        lights.push(<Firefly key={`animated.${i}`}/>)
    }
    return (
        <Box sx={{
            position: "absolute", 
            top: 0, 
            left: 0, 
            height: "100%", 
            width: "100%",
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden",
            filter: "blur(2px)",
        }} style={{
            opacity: opacity,
            transition: `${transition}s`,
        }}>
            {lights}
        </Box>
    )
}

export default Fireflies