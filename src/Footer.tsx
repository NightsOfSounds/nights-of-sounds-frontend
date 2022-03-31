import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { UnderlinedLink } from "./App";
import { useLanguage } from "./Localization";

export default function Footer() {

    const LinkA = styled("a")(({theme}) => ({color: theme.palette.text.primary}))

    const [scrollHeight, setScrollHeight] = useState(0);
    const lang = useLanguage()

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
                {lang("footer.contact")}&nbsp;
                <LinkA href="mailto:nights.of.sounds@gmail.com">
                    {lang("footer.email")}
                </LinkA>
            </Box>
            <UnderlinedLink to="/imprint">
                {lang("imprint.title")}
            </UnderlinedLink>
            &nbsp;
            <UnderlinedLink to="/privacy">
                {lang("privacy.title")}
            </UnderlinedLink>
        </Box>
    </Box>
}