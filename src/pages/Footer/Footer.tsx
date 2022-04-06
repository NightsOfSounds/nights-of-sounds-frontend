import { Box, experimental_sx as sx, Typography } from "@mui/material";
import { styled } from "@mui/system";
import UnderlinedLink from "../../components/link/UnderlinedLink";
import { useLanguage } from "../../components/localization/Localization";

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
            filter: "drop-shadow(0 0 10px white)"
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
            <Typography>
                <UnderlinedLink to="/imprint">
                    {lang("imprint.title")}
                </UnderlinedLink>
                &nbsp;
                <UnderlinedLink to="/privacy">
                    {lang("privacy.title")}
                </UnderlinedLink>
            </Typography>
        </Box>
    </Box>
}