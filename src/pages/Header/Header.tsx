import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { sites } from "../../utils/sites";
import { useLanguage } from "../../components/localization/Localization";
import MobileOpenButton from "../../components/button/MobileOpenButton";
import TitleImage from "../../components/title/TitleImage";
import DesktopNavigation from "../../navigation/DesktopNavigation";
import MobileNavigation from "../../navigation/MobileNavigation";

export type LinkType = {
  name: string,
  url: string,
  icon: JSX.Element
}

function Header() {
  
    const lang = useLanguage()

    const links = sites.filter(e=>e.navigation).map(e=>({name: lang(e.name), url: e.path, icon: e.icon}))
  
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [mobileDrawer, setMobileDrawer] = useState(false)

    useEffect(() => {
      if(!isMobile) {
        set(false)
      }
    }, [isMobile])

    const toggle = ()=>{
      set(!mobileDrawer)
    }

    const set = (b:boolean) => {
      document.body.style.overflow = b ? "hidden" : "auto"
      setMobileDrawer(b)
      return b
    }

    return (
      <>
        <TitleImage/>
        <MobileOpenButton isMobile={isMobile} mobileDrawer={mobileDrawer} onClick={toggle}/>
        <MobileNavigation links={links} isMobile={isMobile} mobileDrawer={mobileDrawer} close={()=>{set(false)}}/>
        <DesktopNavigation links={links} isMobile={isMobile}/>
      </>
    )
}
  
export default Header