import { Typography } from "@mui/material"

type SiteTitleType = {
    children?: string
}
function SiteTitle({children}:SiteTitleType) {
    return (
        <Typography
            variant="h3" 
            sx={{
                marginBottom: 4, 
                fontWeight: "bold",
                textTransform: "uppercase",
            }}
        >
            {children}
        </Typography>
    )
}

export default SiteTitle