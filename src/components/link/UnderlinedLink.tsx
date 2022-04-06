import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

type UnderlinedLinkType = {
    children?: JSX.Element | JSX.Element[] | string,
    to: string
}
function UnderlinedLink({children, to}:UnderlinedLinkType) {
     return <Link to={to}>
       <Box sx={{
         textDecoration: "underline", 
         color: "text.primary",
         display: "inline-block",
        }}>
            <Typography>{children}</Typography>
        </Box>
    </Link>
}

export default UnderlinedLink