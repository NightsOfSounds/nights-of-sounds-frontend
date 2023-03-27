import { useEffect, useState } from "react"
import { LinkType } from "../../pages/Header/Header"
import MobileOpenButton from "../button/MobileOpenButton"
import MobileNavigation from "./MobileNavigation"

type Props = {
    links: LinkType[]
}

export default function MobileNavigationHeader({links}: Props) {

    const [mobileDrawer, setMobileDrawer] = useState(false)

    useEffect(() => {
        set(false)
    }, [])

    const toggle = () => {
        set(!mobileDrawer)
    }

    const set = (b: boolean) => {
        document.body.style.overflow = b ? "hidden" : "auto"
        setMobileDrawer(b)
        return b
    }

    return (
        <>
            <MobileOpenButton mobileDrawer={mobileDrawer} onClick={toggle} />
            <MobileNavigation links={links} mobileDrawer={mobileDrawer} close={() => { set(false) }} />
        </>
    )
}