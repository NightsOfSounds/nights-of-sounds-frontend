import { ThemeProvider } from "@emotion/react"
import { Box, Typography } from "@mui/material"
import { headerTheme } from "../../utils/theme"

type SiteTitleType = {
    children?: string
}
function SiteTitle({children}:SiteTitleType) {
    return (
        <ThemeProvider theme={headerTheme}>
            <Typography
                variant="h3"
                sx={{
                    marginBottom: 4,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: 2,
                }}
            >
                {children}
            </Typography>
        </ThemeProvider>
    )
}

export default SiteTitle