import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, ThemeProvider, Tooltip, Typography, Zoom } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { headerTheme } from '../../utils/theme';
import { useScrollHandler } from '../scroll/scrollHandler';

const sizes = [
    {
        height: 270,
        width: 480,
    }, {
        height: 405,
        width: 720,
    }, {
        height: 1080,
        width: 1920,
    }, {
        height: 1440,
        width: 2560,
    },
]

type TitleImageType = {
    height?: number
}
function TitleImage({ height = 1 }: TitleImageType) {

    const imgRef = useRef<any>();
    const textRef = useRef<any>();

    const line1Ref = useRef<HTMLDivElement>();
    const circleRef = useRef<any>();
    const line2Ref = useRef<HTMLDivElement>();

    const imageWidth = window.innerWidth
    const imageVersion = sizes.filter(e => e.width >= imageWidth)[0]
    const url = `/img/banner/banner-${imageVersion.width}-${imageVersion.height}.webp`

    const handler = () => {
        if (imgRef.current) {
            imgRef.current.style.objectPosition = `50% calc( 50% + ${window.scrollY * 0.3}px )`
            imgRef.current.style.filter = `brightness(${1 - (window.scrollY / (window.innerHeight * height))})`
        }
        if (textRef.current) {
            textRef.current.style.top = `calc( 50% + ${window.scrollY / 2}px )`
        }
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

    const [isScrolled, setScrolled] = useState(false);
    const [isNodge, setNodge] = useState(false)
    const [hover, setHover] = useState(false)
    const [width, setWidth] = useState(0)
    const [tooltip, setTooltip] = useState(false)

    useScrollHandler(handler)

    const location = useLocation()

    useEffect(()=>{
        setWidth(0)
    }, [location])

    useEffect(() => {
        const i = setInterval(() => {
            if(hover || isScrolled) return
            setNodge(true)
            setWidth(1)
            setTimeout(()=>{
                setNodge(false)
                setWidth(0)
            }, 300)
        }, 3000)
        return () => {
            clearInterval(i)
        }
    }, [hover, isScrolled])

    return (
        <ThemeProvider theme={headerTheme}>
            <Box sx={{
                position: "relative",
                marginBottom: 8,
                overflow: "hidden",
                display: "flex",
                zIndex: 2,
                "&:after": {
                    position: "absolute",
                    content: '""',
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    boxShadow: "inset 0px -14px 31px -16px #000000",
                }
            }}>
                <img src={url} alt="" style={{
                    width: "100%",
                    height: `${height * 100}vh`,
                    objectFit: "cover",
                    position: "relative",
                }} ref={imgRef} />
                <Typography sx={{
                    position: "absolute",
                    transform: "translateY(-50%)",
                    fontWeight: "bold",
                    width: "100%",
                    textAlign: "center",
                    top: "50%",
                    willChange: "top",
                    fontSize: "3rem",
                }} ref={textRef}>NIGHTS OF SOUNDS</Typography>
                {height === 1 && <Box sx={{
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
                            width: `${width}%`,
                            borderTop: "1.5px solid white",
                            top: "calc( 50% - 1px )",
                            right: "0",
                            transition: ".5s",
                        }} ref={line1Ref}></Box>
                    </Box>
                    <Tooltip title="Scroll down" TransitionComponent={Zoom} open={tooltip}>
                    <Box 
                        sx={{
                            border: "1.5px solid white",
                            borderRadius: "50%",
                            display: "flex",
                            margin: "0",
                            padding: "0",
                            minWidth: "0",
                            color: "white",
                            transition: ".5s",
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
                        }}
                        onMouseEnter={()=>{
                            setHover(true)
                            setTooltip(true)
                            if(width === 0) setWidth(50)
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
                            width: `${width}%`,
                            borderTop: "1.5px solid white",
                            top: "calc( 50% - 1px )",
                            transition: ".5s",
                        }} ref={line2Ref}></Box>
                    </Box>
                </Box>}
            </Box>
        </ThemeProvider>
    )
}

export default TitleImage