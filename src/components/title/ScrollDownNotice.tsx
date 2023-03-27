import { useEffect, useRef, useState } from "react"
import { KeyboardArrowDown } from "@mui/icons-material"
import { Box, Tooltip, Zoom } from "@mui/material"
import { useLocation } from "react-router-dom";
import { useLanguage } from "../localization/Localization";
import { useScrollHandler } from "../scroll/scrollHandler";

export default function ScrollDownNotice() {

    const line1Ref = useRef<HTMLDivElement>();
    const circleRef = useRef<any>();
    const line2Ref = useRef<HTMLDivElement>();

    const handler = () => {
        if(line1Ref.current && line2Ref.current && circleRef.current) {
            if(window.scrollY >= window.innerHeight / 3) {
                setWidth(100)
                setScrolled(true)

                line1Ref.current.style.opacity = "10%"
                circleRef.current.style.opacity = "20%"
                line2Ref.current.style.opacity = "10%"
            } else {
                if(width === 100) setWidth(0)

                line1Ref.current.style.opacity = "100%"
                circleRef.current.style.opacity = "100%"
                line2Ref.current.style.opacity = "100%"
            }
        }
    }

    useScrollHandler(handler)

    const [isScrolled, setScrolled] = useState(false);
    const [isNodge, setNodge] = useState(false)
    const [hover, setHover] = useState(false)
    const [width, setWidth] = useState(0)
    const [widthUnit, setWidthUnit] =  useState("%")
    const [tooltip, setTooltip] = useState(false)

    const location = useLocation()
    const language = useLanguage()

    useEffect(()=>{
        setWidth(0)
    }, [location])

    useEffect(() => {
        let j: NodeJS.Timer|undefined;
        const i = setInterval(() => {
            j = undefined
            if(hover || isScrolled) return
            setNodge(true)
            setWidthUnit("px")
            setWidth(150)
            j = setTimeout(()=>{
                setNodge(false)
                setWidth(0)
                setWidthUnit("%")
            }, 500)
        }, 3000)
        return () => {
            clearInterval(i)
            if(j) clearTimeout(j)
        }
    }, [hover, isScrolled])

    return (
        <Box sx={{
            bottom: "20px",
            left: "0",
            position: "absolute",
            width: "100%",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
        }}>
            <Box sx={{position: "relative"}}>
                <Box sx={{
                    position: "absolute",
                    width: `${width}${widthUnit}`,
                    borderTop: "1.5px solid white",
                    top: "calc( 50% - 1px )",
                    right: "0",
                    transition: ".7s",
                }} ref={line1Ref}></Box>
            </Box>
            <Tooltip 
                title={language("header.scroll")} 
                TransitionComponent={Zoom} 
                open={tooltip} 
                placement="top"
            >
                <Box 
                    sx={{
                        border: "1.5px solid white",
                        borderRadius: "50%",
                        display: "flex",
                        margin: "0",
                        padding: "0",
                        minWidth: "0",
                        color: "white",
                        transition: ".7s",
                        cursor: "pointer",
                        zIndex: "3",
                        overflow: "hidden",
                        position: "relative",
                    }} 
                    ref={circleRef} 
                    role="button"
                    onClick={()=>{
                        if(window.scrollY > window.innerHeight / 3) return
                        window.scrollTo({
                            behavior: "smooth",
                            top: window.scrollY + window.innerHeight / 1.5
                        })
                        setTooltip(false)
                    }}
                    onMouseEnter={()=>{
                        setHover(true)
                        if(width === 100) return
                        setTooltip(true)
                        setWidth(50)
                    }}
                    onMouseLeave={()=>{
                        setHover(false)
                        setTooltip(false)
                        if(width === 50) setWidth(0)
                    }}
                >
                    <KeyboardArrowDown fontSize="large" sx={{
                        transition: ".3s",
                        transform: hover ? "translateY(100%)" : (isNodge ? "translateY(20%)" : ""),
                    }}/>
                    <KeyboardArrowDown fontSize="large" sx={{
                        transition: ".3s",
                        position: "absolute",
                        transform: hover ? "" : "translateY(-100%)",
                    }}/>
                </Box>
            </Tooltip>
            <Box sx={{position: "relative"}}>
                <Box sx={{
                    position: "absolute",
                    width: `${width}${widthUnit}`,
                    borderTop: "1.5px solid white",
                    top: "calc( 50% - 1px )",
                    transition: ".7s",
                }} ref={line2Ref}></Box>
            </Box>
        </Box>
    )
}