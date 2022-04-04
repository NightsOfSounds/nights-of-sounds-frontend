import { Box, Typography, useMediaQuery, useTheme,  Fade } from "@mui/material";
import Slide from '@mui/material/Slide';
import { useEffect, useRef, useState } from "react";
import { sites } from "../../utils/sites";
import { useLanguage } from "../../components/localization/Localization";
import HeaderButtonWrapper from "../../components/button/HeaderButtonWrapper";
import MobileButton from "../../components/button/MobileButton";
import LanguageButton from "../../components/button/LanguageButton";

const useScrollHandler = (handler: ()=>void) => {
  useEffect(() => {
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [handler])
}

function Header() {
  
    const lang = useLanguage()
    const imgRef = useRef<any>();
    const textRef = useRef<any>();

    const links = sites.filter(e=>e.navigation).map(e=>({name: lang(e.name), url: e.path, icon: e.icon}))
  
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [mobileDrawer, setMobileDrawer] = useState(false)

    const handler = ()=>{
      if(imgRef.current) {
        imgRef.current.style.objectPosition = `50% calc( 50% + ${window.scrollY * 0.3}px )`
        imgRef.current.style.filter = `brightness(${1 - (window.scrollY / window.innerHeight)})`
      }
      if(textRef.current) {
        textRef.current.style.top = `calc( 50% + ${window.scrollY / 2}px )`
      }
    }

    useScrollHandler(handler)

    useEffect(() => {
      if(!isMobile) {
        set(false)
      }
    }, [isMobile])

    const outerSX = {
      backgroundColor: "white",
      left: "0",
      width: "100%",
      height: "5px",
      position: "absolute",
      transition: ".3s",
      opacity: mobileDrawer ? "0" : "1"
    }

    const toggle = ()=>{
      set(!mobileDrawer)
    }

    const set = (b:boolean) => {
      document.body.style.overflow = b ? "hidden" : "auto"
      setMobileDrawer(b)
      return b
    }

    const maxRotate = 45

    const innerSX = {
      backgroundColor: "white",
      top: "calc( 50% - 2px )",
      left: "0",
      width: "100%",
      height: "5px",
      position: "absolute",
      transition: ".3s",
    }

    

    return (
      <>
      <Box sx={{
        position: "relative",
        marginBottom: 8,
        overflow: "hidden",
        display: "flex",
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
      <img src="/img/untitled2.webp" alt="Background banner" style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        position: "relative",
      }} ref={imgRef}/>
      <Typography variant="h3" sx={{
          position: "absolute",
          transform: "translateY(-50%)",
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
          top: "50%",
        }} ref={textRef}>NIGHTS OF SOUNDS</Typography>
      </Box>
      <Box sx={{
        width: "75px",
        height: "55px",
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "4",
        display: isMobile ? "block" : "none",
        pointerEvents: "all",
        padding: "10px",
        paddingTop: "15px",
      }} onClick={()=>{
        toggle()
      }}>
      <Box sx={{height: "100%", width: "100%", position: "relative"}}>
        <Box sx={{
          ...outerSX,
          top: "0",
        }}></Box>
        <Box sx={{
          ...innerSX,
          transform: `rotate(${mobileDrawer ? `${maxRotate}deg` : "0"})`,
        }}></Box>
        <Box sx={{
          ...innerSX,
          transform: `rotate(${mobileDrawer ? `${-maxRotate}deg` : "0"})`,
        }}></Box>
        <Box sx={{
          ...outerSX,
          bottom: "0",
        }}></Box>
      </Box>
      </Box>

      <Fade in={mobileDrawer && isMobile}>
        <Box sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(2px)",
          position: "fixed",
          top: 0,
          left: 0,
        }} onClick={()=>{set(false)}}>

        </Box>
      </Fade>

      <Slide in={mobileDrawer && isMobile} direction="right">
      <Box sx={{
        width: "75%",
        height: "100%",
        top: "0",
        left: "0",
        position: "fixed",
        backgroundColor: "#1E1E1E",
        display: "block",
        zIndex: "2",
        overflow: "auto",
      }}>
        {links.map((e, i) => <MobileButton underline={i===0} icon={e.icon} onClick={()=>{set(false)}} key={`header.button.${i}`} url={e.url}>{e.name}</MobileButton>)}
        <LanguageButton mobile/>
      </Box>
      </Slide>
      
      <Box sx={{
          top: "0",
          left: "0",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "rgba(50, 50, 50, 0.5)",
          padding: "0px 0",
          position: "fixed",
          zIndex: "10",
          display: isMobile ? "none" : "block",
        }}>
          <HeaderButtonWrapper links={links}/>
          <LanguageButton/>
        </Box>
        </>
    )
}
  
export default Header