import { Box } from "@mui/system"
import HeaderButtonWrapper from "../button/HeaderButtonWrapper"
import LanguageButton from "../button/LanguageButton"
import { LinkType } from "../../pages/Header/Header"

type DesktopNavigationType = {
    links: LinkType[]
}
function DesktopNavigation({links}:DesktopNavigationType) {
    return (
        <Box sx={{
            top: "0",
            left: "0",
            width: "100%",
            margin: "auto",
            textAlign: "center",
            backgroundColor: "rgba(50, 50, 50, 0.5)",
            padding: "0px 0",
            position: "fixed",
            zIndex: "10",
            display: "block",
          }}>
            <HeaderButtonWrapper links={links}/>
            <LanguageButton/>
          </Box>
    )
}

export default DesktopNavigation