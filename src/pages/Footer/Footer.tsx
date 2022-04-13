import { Box, experimental_sx as sx, Typography } from "@mui/material";
import { styled } from "@mui/system";
import UnderlinedLink from "../../components/link/UnderlinedLink";
import { useLanguage } from "../../components/localization/Localization";
import Moon from "../../img/moon.webp"

const StyledFooter = styled("footer")(
    sx({
        backgroundColor: "black",
        p: 6,
        textAlign: "center",
        marginTop: 8,
        position: "relative",
    })
)

export default function Footer() {

    const LinkA = styled("a")(({theme}) => ({color: theme.palette.text.primary}))

    const lang = useLanguage()

    const StyledImage = styled("img")(
        sx([{
            position: "absolute",
            left: 10,
            maxHeight: "50%",
            maxWidth: "20%",
            borderRadius: "50%",
            animation: "rotate linear 100s infinite",
            "@keyframes rotate": {
                "0%": {
                    filter: "drop-shadow(0 0 10px white)",
                    transform: "rotate(0deg)",
                },
                "7%": {
                    filter: "drop-shadow(0 0 15px white)",
                },
                "16%": {
                    filter: "drop-shadow(0 0 13px white)",
                },
                "31%": {
                    filter: "drop-shadow(0 0 20px white)",
                },
                "53%": {
                    filter: "drop-shadow(0 0 15px white)",
                },
                "62%": {
                    filter: "drop-shadow(0 0 6px gray)",
                },
                "75%": {
                    filter: "drop-shadow(0 0 11px white)",
                },
                "84%": {
                    filter: "drop-shadow(0 0 17px white)",
                },
                "96%": {
                    filter: "drop-shadow(0 0 12px white)",
                },
                "100%": {
                    transform: "rotate(360deg)",
                },
            }
        }])
    )

    return <StyledFooter>
        <StyledImage src={Moon} alt="Moon"/>
        <Box sx={{textAlign: "center", width: "100%", margin: "auto"}}>
            <Box>
                <Typography>&copy; {new Date().getFullYear()}, Nights of Sounds</Typography>
            </Box>
            <Box>
                <Typography>
                    {lang("footer.contact")}&nbsp;
                    <LinkA href="mailto:nights.of.sounds@gmail.com">
                        {lang("footer.email")}
                    </LinkA>
                </Typography>
            </Box>
            <UnderlinedLink to="/imprint">
                {lang("imprint.title")}
            </UnderlinedLink>
            &nbsp;
            <UnderlinedLink to="/privacy">
                {lang("privacy.title")}
            </UnderlinedLink>
        </Box>
    </StyledFooter>
}