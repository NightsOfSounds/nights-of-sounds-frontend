import { Language } from "@mui/icons-material";
import { Box, Button, MenuItem, Typography, useMediaQuery, useTheme, experimental_sx as sx, Popper, Grow, ClickAwayListener, MenuList, Paper, Fade } from "@mui/material";
import Slide from '@mui/material/Slide';
import { fontWeight, styled } from "@mui/system";
import { createRef, MouseEvent, MouseEventHandler, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ConditionalWrapper, sites } from "./App";
import { languages, useLanguage, useLanguageSelected, useSetLanguage } from "./Localization";

function Header() {
  
    const lang = useLanguage()

    const links = sites.filter(e=>e.navigation).map(e=>({name: lang(e.name), url: e.path, icon: e.icon}))
  
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
        {links.map((e, i) => <MobileButton underline={i==0} icon={e.icon} onClick={()=>{set(false)}} key={`header.button.${i}`} url={e.url}>{e.name}</MobileButton>)}
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
          padding: "0px 0",
          position: "fixed",
          zIndex: "10",
          display: isMobile ? "none" : "block",
        }}>
          <HeaderButtonWrapper links={links}/>
            {/*links.map((e, i) => <HeaderButton key={`header.button.${i}`} url={e.url}>{e.name}</HeaderButton>)*/}
          <LanguageSwitcher/>
        </Box>
        </>
    )
}
  
export default Header;

type MobileButtonType = {
  underline?: boolean
  url?: string,
  children: string,
  icon: JSX.Element,
  onClick?: ()=>void,
}

function MobileButton({underline, url, children, icon, onClick}:MobileButtonType) {
  
  return <ConditionalWrapper 
    condition={!!url} 
    wrapper={(children)=><Link to={url || "/"} style={{textDecoration: "none"}}>{children}</Link>}>
    <Box sx={{
      width: "100%",
      borderBottom: underline ? "1px solid white" : "1px solid rgba(255, 255, 255, 0.05)",
      margin: "auto",
      color: "text.primary",
      display: "flex",
      height: "50px",
      justifyContent: "left",
      alignItems: "center",
      paddingLeft: 4
    }} onClick={()=>{onClick && onClick()}}>
      <Box sx={{
        fontSize: "20px",
        textDecoration: "none",
        verticalAlign: "center",
        display: "contents"
      }}>
        <Typography sx={{
          marginRight: 2,
          fontSize: "25px",
          display: "flex",
        }}>
          {icon}
        </Typography>
        {children}    
      </Box>
    </Box>
  </ConditionalWrapper>
}

type HeaderButtonType = {
    url: string,
    children: string,
    onHover: (e:HTMLDivElement)=>void,
}
function HeaderButton({url, children, onHover}:HeaderButtonType) {
  
  const location = useLocation();
  const [isActive, setActive] = useState(window.location.pathname === url);
  const ref = useRef<HTMLDivElement>()

  useEffect(()=>{
    setActive(window.location.pathname === url)
  }, [location, url])

  useEffect(()=>{
    if(ref.current) onHover(ref.current)
  }, [ref])
  
  return (
    <Link to={url} className="headerLink">
      <Box sx={{padding: "10px 0", display: "flex"}} onMouseEnter={(e)=>{onHover(e.currentTarget)}}>
      <Box ref={ref} sx={[
        {
          "&:hover": {
            /*color: "#000",*/
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
            /*transform: "translateY(0)"*,*/
          }
        },
        {
          color: "text.primary",
          textDecoration: "none",
          display: "inline-block",
          /*margin: "0 10px",*/
          transition: ".5s",
          position: "relative",
          overflow: "hidden",
          borderBottom: (isActive ? "2px solid gray" : "2px solid transparent" ),
          padding: "5px 20px",
          zIndex: 0,
          /*backgroundColor: (isActive ? "rgba(0, 0, 0, 0.5)" : "transparent")*/
        }
      ]}>
        <Typography sx={{
          color: "inherit",
          zIndex: -1,
        }}>{children}</Typography>
      </Box>
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
      height: mobile ? "50px" : "100%",
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
          padding: "0",
          fontWeight: "normal",
        }}>
        {mobile ? <MobileButton icon={<Language/>}>{lang("language.language")}</MobileButton> : <Language/>}
      </Button>

      <Popper
        open={isOpen}
        anchorEl={anchorEl}
        role={undefined}
        placement="bottom-end"
        disablePortal
        transition
        style={{
          width: "calc( 100% - 2px )",
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

type LinkType = {
  name: string,
  url: string
}
type HeaderButtonWrapperType = {
  links: LinkType[]
}
function HeaderButtonWrapper({links}:HeaderButtonWrapperType) {

  const [pos, setPos] = useState(0)
  const [width, setWidth] = useState(0)
  const [view, setView] = useState(false)
  const [transition, setTransition] = useState(false)
  const ref = createRef<HTMLDivElement>()

  const onHover = (i:number, e:HTMLDivElement)=>{
    setPos(e.getBoundingClientRect().left - (ref.current?.getBoundingClientRect().left || 0))
    setWidth(e.getBoundingClientRect().right - e.getBoundingClientRect().left)
  }

  return <Box sx={{
    display: "inline-block",
    position: "relative",
  }} ref={ref} 
  onMouseLeave={()=>{
    setView(false)
  }}
  onMouseEnter={()=>{
    setView(true)
    setTransition(true)
  }}>
    {links.map((e, i) => <HeaderButton onHover={(e:HTMLDivElement)=>{onHover(i, e)}} key={`header.button.${i}`} url={e.url}>{e.name}</HeaderButton>)}
    <Box sx={{
      position: "absolute",
      top: "10px",
      left: `${pos}px`,
      width: `${width}px`,
      borderBottom: "2px solid white",
      height: "calc( 100% - 20px )",
      transition: transition ? "all .3s" : "opacity .3s",
      pointerEvents: "none",
      opacity: view ? "1" : "0"
    }}/>
  </Box>
}