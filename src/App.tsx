import './App.css';
import { CssBaseline, createTheme, darkScrollbar, StyledEngineProvider, ThemeProvider, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import About from './About';
import Home from './Home';
import Header from './Header';
import Social from './Social';

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
            <ScrollTop/>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/social' element={<Social/>}/>
            </Routes>
          
        </StyledEngineProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
