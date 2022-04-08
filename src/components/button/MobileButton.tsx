import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ConditionalWrapper from "../wrapper/ConditionalWrapper"

type MobileButtonType = {
    underline?: boolean
    url?: string,
    children: string,
    icon: JSX.Element,
    onClick?: ()=>void,
}

function MobileButton({underline, url, children, icon, onClick}:MobileButtonType) {

    return (
        <ConditionalWrapper 
            condition={!!url} 
            wrapper={(children)=><Link to={url || "/"} style={{textDecoration: "none"}}>{children}</Link>}>
            <Box sx={{
                width: "100%",
                borderBottom: underline ? "1px solid white" : "1px solid rgba(255, 255, 255, 0.05)",
                margin: "auto",
                color: "text.primary",
                display: "flex",
                height: "50px",
                justifyContent: "left",
                alignItems: "center",
                paddingLeft: 4
            }} onClick={() => {onClick && onClick()}}>
                <Box sx={{
                    fontSize: "20px",
                    textDecoration: "none",
                    verticalAlign: "center",
                    display: "contents"
                }}>
                    <Typography sx={{
                        marginRight: 2,
                        fontSize: "25px",
                        display: "flex",
                    }}>
                        {icon}
                    </Typography>
                    {children}    
                </Box>
            </Box>
        </ConditionalWrapper>
    )
}

export default MobileButton