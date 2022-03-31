import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { UnderlinedLink } from "./App";

export default function Footer() {

    const LinkA = styled("a")(({theme}) => ({color: theme.palette.text.primary}))

    const [scrollHeight, setScrollHeight] = useState(0);


    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        setScrollHeight(currentScrollY)
      };
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollHeight]);

    return <Box sx={{
        backgroundColor: "black",
        padding: "40px",
        textAlign: "center",
        marginTop: "40px",
        position: "relative",
    }}>
        <img src="/img/moon.png" style={{
            position: "absolute",
            left: "10px",
            height: "50%",
        }} alt="Moon"/>
        <Box sx={{textAlign: "center", width: "100%", margin: "auto"}}>
            <Box>
                &copy; Nights of Sounds
            </Box>
            <Box>
                Contact:&nbsp;
                <LinkA href="mailto:nights.of.sounds@gmail.com">
                    Email
                </LinkA>
            </Box>
            <UnderlinedLink to="/imprint">
                Imprint
            </UnderlinedLink>
            &nbsp;
            <UnderlinedLink to="/privacy">
                Privacy
            </UnderlinedLink>
        </Box>
    </Box>
}