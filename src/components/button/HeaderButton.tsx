import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type HeaderButtonType = {
    url: string,
    children: string,
    onHover: (e:HTMLDivElement)=>void,
}
function HeaderButton({url, children, onHover}:HeaderButtonType) {

    const location = useLocation();
    const [isActive, setActive] = useState(window.location.pathname === url);
    const ref = useRef<HTMLDivElement>()

    useEffect(()=>{
        setActive(window.location.pathname === url)
    }, [location, url])

    useEffect(()=>{
        if(ref.current && isActive) onHover(ref.current)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref])
  
    return (
        <Link to={url} className="headerLink">
            <Box sx={{padding: "10px 0", display: "flex"}} onMouseEnter={(e)=>{onHover(e.currentTarget)}}>
                <Box ref={ref} sx={[
                    {
                        "&::before": {
                            width: "100%",
                            height: "100%",
                            content: '""',
                            left: 0,
                            top: 0,
                            bgcolor: "text.primary",
                            position: "absolute",
                            transform: "translateY(100%)",
                            transition: ".3s",
                            zIndex: -1,
                        }
                    }, {
                        color: "text.primary",
                        textDecoration: "none",
                        display: "inline-block",
                        transition: ".5s",
                        position: "relative",
                        overflow: "hidden",
                        borderBottom: (isActive ? "2px solid gray" : "2px solid transparent" ),
                        padding: "5px 20px",
                        zIndex: 0,
                    }
                ]}>
                <Typography sx={{
                    color: "inherit",
                    zIndex: -1,
                }}>{children}</Typography>
                </Box>
            </Box>
        </Link>
    )
}

export default HeaderButton