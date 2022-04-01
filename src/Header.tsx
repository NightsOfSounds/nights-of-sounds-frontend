import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Slide from '@mui/material/Slide';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "./Localization";

function Header() {
  
    const lang = useLanguage();

    const links = [
      {
        "name": lang("home.button"),
        "url": "/",
      },{
        "name": lang("about.button"),
        "url": "/about",
      },{
        "name": lang("social.button"),
        "url": "/social",
      },{
        "name": lang("partner.button"),
        "url": "/partner"
      },{
        "name": lang("equipment.button"),
        "url": "/equipment"
      }
    ]
  
    const [scrollHeight, setScrollHeight] = useState(0);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [mobileDrawer, setMobileDrawer] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        setScrollHeight(currentScrollY)
      };
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollHeight]);

    const outerSX = {
      backgroundColor: "white",
      left: "0",
      width: "100%",
      height: "5px",
      position: "absolute",
      transition: ".3s",
      opacity: mobileDrawer ? "0" : "1"
    }

    const maxRotate = 30

    const innerSX = {
      backgroundColor: "white",
      top: "calc( 50% - 2.5px )",
      left: "0",
      width: "100%",
      height: "5px",
      position: "absolute",
      transition: ".5s",
    }

    return (
      <>
      <Box sx={{
        position: "relative",
        marginBottom: "40px",
        overflow: "hidden",
        display: "flex",
      }}>
      <img src="img/untitled2.webp" alt="Background banner" style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        position: "relative",
        objectPosition: `50% calc( 50% + ${scrollHeight * 0.3}px )`,
        filter: `brightness(${1 - (scrollHeight / window.innerHeight)})`,
      }}/>
      <Typography variant="h3" sx={{
          position: "absolute",
          top: `calc( 50% + ${scrollHeight / 2}px )`,
          transform: "translateY(-50%)",
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
        }}>NIGHTS OF SOUNDS</Typography>
      </Box>
      <Box sx={{
        width: "65px",
        height: "40px",
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: "3",
        display: isMobile ? "block" : "none",
      }} onClick={()=>{
        setMobileDrawer((old)=> !old)
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
      <Slide in={mobileDrawer} direction="left">
      <Box sx={{
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        position: "fixed",
        backgroundColor: theme.palette.grey[800],
        display: "block",
        zIndex: "2",
        overflow: "auto",
      }}>
        {links.map((e, i) => <MobileButton onClick={()=>{setMobileDrawer(false)}} key={`header.button.${i}`} url={e.url}>{e.name}</MobileButton>)}
      </Box>
      </Slide>
      <Box sx={{
          top: "0",
          left: "0",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "rgba(50, 50, 50, 0.5)",
          padding: "10px 0",
          position: "fixed",
          zIndex: "10",
          display: isMobile ? "none" : "block",
        }}>
  
          {links.map((e, i) => <HeaderButton key={`header.button.${i}`} url={e.url}>{e.name}</HeaderButton>)}
  
        </Box>
      </>
    )
}
  
export default Header;

type MobileButtonType = {
  url: string,
  children: string | JSX.Element | JSX.Element[],
  onClick: ()=>void
}

function MobileButton({url, children, onClick}:MobileButtonType) {
  
  return <Link to={url} style={{
    textDecoration: "none"
  }}>
    <Box sx={{
      width: "100%",
      borderBottom: "1px solid black",
      margin: "auto",
      color: "text.primary",
      display: "flex",
      height: "100px",
      justifyContent: "center",
      alignItems: "center",
    }} onClick={()=>{onClick()}}>
      <Typography sx={{
        fontSize: "30px",
        textDecoration: "none",
      }}>
        {children}    
      </Typography>
    </Box>
  </Link>
}

type HeaderButtonType = {
    url: string,
    children: string
}
function HeaderButton({url, children}:HeaderButtonType) {
  
  const location = useLocation();
  const [isActive, setActive] = useState(window.location.pathname === url);

  useEffect(()=>{
    setActive(window.location.pathname === url)
  }, [location, url])

  
  
    return (
      <Link to={url} >
        <Box sx={[
          {
            "&:hover": {
              color: "#000",
            }
          },
          {
            "&::before": {
              width: "100%",
              height: "100%",
              content: '""',
              left: 0,
              top: 0,
              bgcolor: "text.primary",
              position: "absolute",
              transform: "translateY(100%)",
              transition: ".3s",
              zIndex: -1,
            }
          },
          {
            "&:hover::before": {
              transform: "translateY(0)",
            }
          },
          {
            color: "text.primary",
            textDecoration: "none",
            display: "inline-block",
            margin: "0 10px",
            transition: ".5s",
            position: "relative",
            overflow: "hidden",
            borderBottom: "2px solid white",
            padding: "5px 20px",
            zIndex: 0,
            backgroundColor: (isActive ? "rgba(0, 0, 0, 0.5)" : "transparent")
          }
        ]}>
          <Typography sx={{
            color: "inherit",
            zIndex: -1,
          }}>{children}</Typography>
        </Box>
      </Link>
    )
}