import { createTheme, darkScrollbar } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#123456"
        },
        mode: "dark",
    },
    typography: {
        fontFamily: '"Nunito", Helvetica, Arial, Sans-Serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: darkScrollbar()
            }
        }
    }
});

export const headerTheme = createTheme({
    ...theme,
    typography: {
        fontFamily: '"Baloo 2", Helvetica, Arial, Sans-Serif'
    }
})