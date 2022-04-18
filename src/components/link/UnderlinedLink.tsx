import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

type UnderlinedLinkType = {
    children?: JSX.Element | JSX.Element[] | string,
    to: string
}
function UnderlinedLink({children, to}:UnderlinedLinkType) {
     return (
        <Link to={to}>
            <Typography sx={{
                textDecoration: "underline", 
                color: "text.primary",
                display: "inline-block",
            }}>
                {children}
            </Typography>
        </Link>
    )
}

export default UnderlinedLink