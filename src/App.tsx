import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import { LanguageProvider } from './components/localization/Localization';
import Fireflies from './components/fireflies/Fireflies';
import ScrollTop from './components/scroll/ScrollTop';
import { theme } from './utils/theme';
import { sites } from './utils/sites';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <CssBaseline />
                    <LanguageProvider>
                        <ScrollTop />
                        <Header />
                        <main>
                            <Routes>
                                {sites.map((e, i) => <Route key={`route.${i}`} path={e.path} element={e.element} />)}
                                <Route path='*' element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                        <Fireflies />
                    </LanguageProvider>
                </StyledEngineProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;