import { CssBaseline, createTheme, darkScrollbar, StyledEngineProvider, ThemeProvider, Box, Typography, Paper, experimental_sx as sx } from '@mui/material';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
    window.scrollTo(0, 0);
  }, [location]);

  return <></>
}

export const sites = [
  {
    path: "/",
    name: "home.button",
    element: <Home/>,
    navigation: true,
  }, {
    path: "/about/",
    name: "about.button",
    element: <About/>,
    navigation: true,
  }, {
    path: "/social/",
    name: "social.button",
    element: <Social/>,
    navigation: true,
  }, {
    path: "/partner/",
    name: "partner.button",
    element: <Partner/>,
    navigation: true,
  }, {
    path: "/equipment/",
    name: "equipment.button",
    element: <Equipment/>,
    navigation: true,
  }, {
    path: "/imprint/",
    name: "",
    element: <Imprint/>,
    navigation: false,
  }, {
    path: "/privacy/",
    name: "",
    element: <Privacy/>,
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
  
  const r = (Math.random() * 100000)

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
        <StyledUl key={`ul.${remaining.length}`}>
          {remaining.substring(0, remaining.indexOf("]")).split(",,").map((e,i)=>(
            <li key={`li.${remaining.length}.${i}`}>{e}</li>
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

export default App;
