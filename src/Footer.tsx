import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { UnderlinedLink } from "./App";

export default function Footer() {

    const LinkA = styled("a")(({theme}) => ({color: theme.palette.text.primary}))

    return <Box sx={{
        backgroundColor: "black",
        padding: "40px",
        textAlign: "center",
        marginTop: "40px",
    }}>
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