import { Box, experimental_sx as sx } from "@mui/material";
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

    const StyledImage = styled("img")(
        sx([{
            position: "absolute",
            left: 10,
            maxHeight: "50%",
            maxWidth: "20%"
        }])
    )

    return <Box sx={{
        backgroundColor: "black",
        p: 6,
        textAlign: "center",
        marginTop: 8,
        position: "relative",
    }}>
        <StyledImage src="/img/moon.png" alt="Moon"/>
        <Box sx={{textAlign: "center", width: "100%", margin: "auto"}}>
            <Box>
                &copy; {new Date().getFullYear()}, Nights of Sounds
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