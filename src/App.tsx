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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline/>
            <LanguageProvider language='en'>
              <ScrollTop/>
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/social' element={<Social/>}/>
                <Route path='/equipment' element={<Equipment/>}/>
                <Route path='/imprint' element={<Imprint/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/partner' element={<Partner/>}/>
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
      maxWidth: "calc( 100vw - 20px )",
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
        marginBottom: "30px", 
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
}
export function ImageTextBox({name, text, imgUrl}:ImageTextBoxType) {

  return <Paper sx={{
    padding: "20px",
    maxWidth: "300px",
    minWidth: "300px",
    display: "inline-block",
    margin: "20px",
    verticalAlign: "top",
  }}>
  {imgUrl && <Box sx={{
    overflow: "hidden",
    display: "flex",
    marginBottom: "10px",
  }}>
    <HoverImg src={imgUrl} alt="Depiction of Title"/>
  </Box>}
  <Typography variant="h4">{name}</Typography>
  <Typography>{text}</Typography>
  </Paper>
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
      transform: "scale(1.2)",
    }
  }])
)

export default App;
