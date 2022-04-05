import { createTheme, darkScrollbar } from "@mui/material";

export const theme = createTheme({
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