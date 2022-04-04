import { CssBaseline, createTheme, darkScrollbar, StyledEngineProvider, ThemeProvider, Box, Typography, Paper, experimental_sx as sx } from '@mui/material';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import About from './About';
import Home from './Home';
import Header from './Header';
import Social from './Social';
import Equipment from './Equipment';
import Footer from './Footer';
import Imprint from './Imprint';
import Privacy from './Privacy';
import NotFound from './NotFound';
import { styled } from '@mui/system';
import Partner from './Partner';
import { LanguageProvider } from './Localization';
import { EmojiPeople, Handyman, Home as House, LocalShipping, PhoneIphone, QuestionMark } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#123456"
    },
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar()
      }
    }
  }
});

function ScrollTop() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [location]);

  return <></>
}

export const sites = [
  {
    path: "/",
    name: "home.button",
    element: <Home/>,
    icon: <House/>,
    navigation: true,
  }, {
    path: "/about/",
    name: "about.button",
    element: <About/>,
    icon: <EmojiPeople/>,
    navigation: true,
  }, {
    path: "/social/",
    name: "social.button",
    element: <Social/>,
    icon: <PhoneIphone/>,
    navigation: true,
  }, {
    path: "/partner/",
    name: "partner.button",
    element: <Partner/>,
    icon: <LocalShipping/>,
    navigation: true,
  }, {
    path: "/equipment/",
    name: "equipment.button",
    element: <Equipment/>,
    icon: <Handyman/>,
    navigation: true,
  }, {
    path: "/imprint/",
    name: "",
    element: <Imprint/>,
    icon: <QuestionMark/>,
    navigation: false,
  }, {
    path: "/privacy/",
    name: "",
    element: <Privacy/>,
    icon: <QuestionMark/>,
    navigation: false,
  },
]

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline/>
            <LanguageProvider>
              <ScrollTop/>
              <Header/>
              <Routes>
                {sites.map((e,i)=><Route key={`route.${i}`} path={e.path} element={e.element}/>)}
                <Route path='*' element={<NotFound/>} />
              </Routes>
              <Footer/>
              <AnimatedLights/>
            </LanguageProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

type ContentBoxType = {
  children?: JSX.Element | JSX.Element[]
}
export function ContentBox({children}:ContentBoxType) {
  return (
    <Box sx={{
      width: "1200px",
      margin: "auto",
      maxWidth: "calc( 100% - 20px )",
    }}>
      {children}
    </Box>
  )
}

type SiteTitleType = {
  children?: string
}
export function SiteTitle({children}:SiteTitleType) {
  return <Typography 
      variant="h3" 
      sx={{
        marginBottom: 4, 
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
}
export type ImageTextBoxType = {
  name: string,
  text: string,
  imgUrl?: string,
  url?: string,
  experience?: string
}
export function ImageTextBox({name, text, imgUrl, url, experience}:ImageTextBoxType) {

  const LinkEl = styled("a")({
    display: "contents"
  })

  return <ConditionalWrapper
    condition={!!url}
    wrapper={(children) => <LinkEl href={url}>{children}</LinkEl>}>
    <Paper sx={{
      p: 2,
      width: "300px",
      display: "inline-block",
      m: 2,
      verticalAlign: "top",
    }}>
    {imgUrl && <Box sx={{
      overflow: "hidden",
      display: "flex",
      marginBottom: 2,
      borderRadius: 1,
    }}>
      <HoverImg src={imgUrl} alt="Depiction of Title"/>
    </Box>}
    <Typography variant="h4">{name}</Typography>
    <TextProcessor sx={{marginTop: 2}}>{text}</TextProcessor>
    {experience && <Typography sx={{marginTop: 2}}>
      <b>Experience:</b> {experience}
      </Typography>}
    </Paper>
  </ConditionalWrapper>
}

type ImageWrapperType = {
  children?: JSX.Element | JSX.Element[],
  carousel?: any
  sameHeight?: any
}
export function ImageTextWrapper({children, carousel, sameHeight}:ImageWrapperType) {
  return <Box sx={{
      display: ((carousel || sameHeight) ? "flex" : "block"),
      textAlign: "center",
      overflowX: "auto",
      margin: "auto",
      justifyContent: sameHeight ? "center" : "",
      flexWrap: sameHeight ? "wrap" : "",
  }}>
  {children}
  </Box>
}

type ConditionalWrapperType = {
  condition: boolean,
  wrapper: (e:(JSX.Element)) => JSX.Element,
  children: JSX.Element,
}
export function ConditionalWrapper({condition, wrapper, children}:ConditionalWrapperType):JSX.Element {
  return condition ? wrapper(children) : children
}

type UnderlinedLinkType = {
  children?: JSX.Element | JSX.Element[] | string,
  to: string
}
export function UnderlinedLink({children, to}:UnderlinedLinkType) {
   return <Link to={to}>
     <Box sx={{
       textDecoration: "underline", 
       color: "text.primary",
       display: "inline-block",
      }}>
       {children}
     </Box>
   </Link>
}

export const HoverImg = styled("img")(
  sx([{
    width: "100%",
    transition: ".3s",
  }, {
    "&:hover": {
      transform: {
        md: "scale(1.2)",
        xs: "scale(1)",
      },
    }
  }])
)

type TextProcessorType = {
  children: string,
  sx?: any
}
export function TextProcessor({children, sx}:TextProcessorType) {

  let remaining = children
  let elements = [];

  let isList = false
  let counter = 0
  while(remaining.length > 0  && counter < 100) {
    let delimiter = "|"
    if(isList) {

      const StyledUl = styled("ul")({
        textAlign: "left"
      })

      elements.push(
        <StyledUl key={`ul.${counter}`}>
          {remaining.substring(0, remaining.indexOf("]")).split(",,").map((e,i)=>(
            <li key={`li.${i}`}>{e}</li>
          ))}
        </StyledUl>
      )
      remaining = remaining.substring(remaining.indexOf("]") + 1)
      isList = false
    } else {
      let margin = true
      let index1 = remaining.indexOf("|")
      if(index1 < 0) index1 = remaining.length

      let index2 = remaining.indexOf("[")
      if(index2 < 0) index2 = remaining.length

      if(index1 > index2) {
        delimiter = "["
        isList = true
        margin = false
      }
      let end = remaining.indexOf(delimiter)
      if(remaining.indexOf(delimiter) < 0) {
        end = remaining.length
        margin = false
      }

      elements.push(<Typography key={`text.${counter}`} sx={{marginBottom: margin ? 2 : 0}}>
        {remaining.substring(0, end)}
      </Typography>)
      remaining = remaining.substring(end +1)
    }
    counter++
  }
  return <Box sx={sx}>{elements}</Box>

}

type ScrollIntoType = {
  children: string | JSX.Element |JSX.Element[]
}
export function ScrollInto({children}:ScrollIntoType) {

  const [show, setShow] = useState(false)
  const [armed, setArmed] = useState(false)
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
      const handleScroll = () => {
          if(window.scrollY <= 100) {
            setArmed(true)
          }
          if(!ref.current) return
          if((window.innerHeight+30 >= ref.current.getBoundingClientRect().top) && armed===true) {

              setShow(true)
              window.removeEventListener("scroll", handleScroll)
          }
      };
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, armed]);

  return (
    <Box ref={ref} sx={{
        transform: show ? "" : "translateY(75px)",
        opacity: show ? 1 : 0,
        transition: ".5s",
    }}>
      {children}
    </Box>
  )
}

function AnimatedLights() {
  
  const [amount, setAmount] = useState(0)
  const [transition, setTransition] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const location = useLocation()

  useEffect(()=>{
    const resize = () =>{
      setTransition(0.2)
      setOpacity(0)
      setTimeout(()=>{
        setAmount(0)
        setAmount(parseInt((document.body.clientHeight * 0.05).toString()))
        setTimeout(()=>{
          setTransition(2)
          setTimeout(()=>{
            setOpacity(1)
          }, 10)
        }, 10)
      }, 205)
    }
    resize();

  }, [location])

  const lights = []
  for(let i = 0; i<amount; i++) {
    lights.push(<AnimatedLight key={`animated.${i}`}/>)
  }
  return <Box sx={{
    position: "absolute", 
    top: 0, 
    left: 0, 
    height: "100%", 
    width: "100%",
    zIndex: 10,
    pointerEvents: "none",
    overflow: "hidden",
    filter: "blur(2px)",
  }} style={{
    opacity: opacity,
    transition: `${transition}s`,
  }}>{lights}</Box>
}

function AnimatedLight() {

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

export default App;
