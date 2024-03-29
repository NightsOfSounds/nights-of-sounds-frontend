import { Box, Fade, Slide } from "@mui/material"
import LanguageButton from "../button/LanguageButton"
import MobileButton from "../button/MobileButton"
import { LinkType } from "../../pages/Header/Header"

type MobileNavigationType = {
    links: LinkType[],
    mobileDrawer: boolean,
    close: () => void
}
function MobileNavigation({ links, mobileDrawer, close }: MobileNavigationType) {
    return (
        <>
            <Fade in={mobileDrawer}>
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(2px)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: "16",
                }} aria-expanded={mobileDrawer} onClick={() => { close() }}>

                </Box>
            </Fade>

            <Slide in={mobileDrawer} direction="right">
                <Box sx={{
                    width: "75%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    position: "fixed",
                    backgroundColor: "#1E1E1E",
                    display: "block",
                    zIndex: "17",
                    overflow: "auto",
                }} aria-expanded={mobileDrawer}>
                    {links.map((e, i) => <MobileButton underline={i === 0} icon={e.icon} onClick={() => { close() }} key={`header.button.${i}`} url={e.url}>{e.name}</MobileButton>)}
                    <LanguageButton mobile />
                </Box>
            </Slide>
        </>
    )
}

export default MobileNavigation