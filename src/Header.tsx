import { Language } from "@mui/icons-material";
import { Box, Button, MenuItem, Typography, useMediaQuery, useTheme, experimental_sx as sx, Popper, Grow, ClickAwayListener, MenuList, Paper } from "@mui/material";
import Slide from '@mui/material/Slide';
import { styled } from "@mui/system";
import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sites } from "./App";
import { languages, useLanguage, useLanguageSelected, useSetLanguage } from "./Localization";

function Header() {
  
    const lang = useLanguage()

    const links = sites.filter(e=>e.navigation).map(e=>({name: lang(e.name), url: e.path}))
  
    const [scrollHeight, setScrollHeight] = useState(0);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [mobileDrawer, setMobileDrawer] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        setScrollHeight(Math.min(currentScrollY, window.innerHeight))
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
      <Slide in={mobileDrawer && isMobile} direction="left">
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
        <LanguageSwitcher mobile/>
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
  
          <LanguageSwitcher/>
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

type LanguageSwitcherType = {
  mobile?: any,
}
function LanguageSwitcher({mobile}:LanguageSwitcherType) {

  const language = useLanguageSelected()
  const setLanguage = useSetLanguage()
  const lang = useLanguage()
  const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null)
  const isOpen = !!anchorEl
  const open = (e:React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }
  const close = (e:MouseEvent) => {
    setLanguage(e.currentTarget.id)
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      position: mobile ? "" : "absolute",
      right: "0",
      top: "50%",
      transform: mobile ? "" : "translateY(-50%)",
      height: mobile ? "100px" : "100%",
      m: "auto",
      width: mobile ? "100%" : "auto",
    }}>
      <Button 
        onClick={open}
        sx={{
          color: "text.primary",
          margin: "auto",
          height: "100%",
          width: mobile ? "100%" : "auto",
          textTransform: "none",
        }}>
        {mobile ? <Typography sx={{fontSize: "30px"}}>{lang("language.language")}</Typography> : <Language/>}
      </Button>

      <Popper
        open={isOpen}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-end"
        disablePortal
        transition
        style={{
          width: "100%",
          position: "relative",
          top: "0",
        }}
        >
          {({ TransitionProps}) => (
            <Grow
              {...TransitionProps}
              style={{
                width: mobile ? "100%" : "auto",
                position: "absolute",
                right: mobile ? "" : "0",
                bottom: mobile ? "0px" : "",
              }}
            >
              <Paper sx={{
                display: "inline-block",
              }}>
                <ClickAwayListener onClickAway={()=>{setAnchorEl(null)}}>
                  <MenuList
                    autoFocusItem={isOpen}
                  >
                    {languages.map((e,i)=><LanguageItem key={`lang.${i}`}onClick={close} src={e.image} short={e.short} selected={e.short === language}>{e.name}</LanguageItem>)}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        
      </Popper>
    </Box>
  )
}

type LanguageItemType = {
  children: string,
  src: string,
  onClick: MouseEventHandler,
  short: string,
  selected: boolean,
}
function LanguageItem({short, children, src, onClick, selected}:LanguageItemType) {

  const StyledImage = styled("img")(
    sx({
      height: "14px",
      width: "25px",
      marginRight: 1
    })
  )

  return <MenuItem onClick={onClick} id={short} sx={{
    backgroundColor: selected ? "action.hover" : ""
  }}>
    <StyledImage alt="Language Flag" src={src}/>
    {children}
  </MenuItem>
}