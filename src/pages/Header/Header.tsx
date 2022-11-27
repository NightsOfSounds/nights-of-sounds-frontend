import { styled, useMediaQuery, useTheme } from "@mui/material";
import { sites } from "../../utils/sites";
import { useLanguage } from "../../components/localization/Localization";
import TitleImage from "../../components/title/TitleImage";
import { useLocation } from "react-router-dom";
import ProgressBar from "../../components/scroll/ProgressBar"
import MobileNavigationWrapper from "../../components/navigation/MobileNavigationWrapper"
import DesktopNavigation from "../../components/navigation/DesktopNavigation";

export type LinkType = {
    name: string,
    url: string,
    icon: JSX.Element
}

function Header() {

    const lang = useLanguage()

    const links = sites.filter(e => e.navigation).map(e => ({ name: lang(e.name), url: e.path, icon: e.icon }))

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const location = useLocation()

    const headerHeight = location.pathname === "/" ? 1 : 1 / 2

    const Header = styled("header")({
        height: (headerHeight * 100) + "%",
        marginBottom: "64px",
    })

    return (
        <Header>
            {isMobile && <ProgressBar />}
            <TitleImage showScrollDownNotice={headerHeight === 1} />
            {isMobile && <MobileNavigationWrapper links={links} />}
            {!isMobile && <DesktopNavigation links={links} />}
        </Header>
    )
}

export default Header