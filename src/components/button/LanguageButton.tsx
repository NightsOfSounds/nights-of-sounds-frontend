import { Language } from "@mui/icons-material"
import { Box, Button, ClickAwayListener, Grow, MenuList, Paper, Popper, styled } from "@mui/material"
import { useState } from "react"
import { languages, useLanguage, useLanguageSelected, useSetLanguage } from "../localization/Localization"
import LanguageMenuButton from "./LanguageMenuButton"
import MobileButton from "./MobileButton"

type LanguageButtonType = {
    mobile?: any,
}
function LanguageButton({mobile}:LanguageButtonType) {

    const language = useLanguageSelected()
    const setLanguage = useSetLanguage()
    const lang = useLanguage()
    const [anchorEl, setAnchorEl] = useState<HTMLElement|null>(null)
    const isOpen = !!anchorEl
    const open = (e:React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const close = (e:React.MouseEvent<Element>) => {
        setLanguage(e.currentTarget.id)
        setAnchorEl(null)
    }

    return (
        <Box sx={{
            position: mobile ? "" : "absolute",
            right: "0",
            top: "50%",
            transform: mobile ? "" : "translateY(-50%)",
            height: mobile ? "50px" : "100%",
            m: "auto",
            width: mobile ? "100%" : "auto",
        }}>
            <Button 
            onClick={open}
            sx={{
                color: "text.primary",
                margin: "auto",
                height: "100%",
                width: mobile ? "100%" : "auto",
                textTransform: "none",
                padding: "0",
                fontWeight: "normal",
                fontSize: "inherit",
            }}>
                {mobile ? <MobileButton icon={<Language/>}>{lang("language.language")}</MobileButton> : <LanguageIcon/>}
            </Button>

            <Popper
                open={isOpen}
                anchorEl={anchorEl}
                role={undefined}
                placement="bottom-end"
                disablePortal
                transition
                style={{
                    width: "calc( 100% - 2px )",
                    position: "relative",
                    top: "0",
                }}
            >
            {({ TransitionProps}) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        width: mobile ? "100%" : "auto",
                        position: "absolute",
                        right: mobile ? "" : "0",
                    }}
                >
                    <Paper sx={{
                        display: "inline-block",
                    }}>
                        <ClickAwayListener onClickAway={() => {setAnchorEl(null)}}>
                            <MenuList
                                autoFocusItem={isOpen}
                            >
                                {languages.map((e,i)=><LanguageMenuButton key={`lang.${i}`} onClick={close} src={e.image} short={e.short} selected={e.short === language}>{e.name}</LanguageMenuButton>)}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}

            </Popper>
        </Box>
    )
}

function LanguageIcon() {
    const language = useLanguageSelected()

    const StyledImg = styled("img")({
        position: "absolute",
        width: "15px",
        height: "15px",
        bottom: "-10%",
        right: "-20%",
        borderRadius: "100%",
    })

    return (
        <Box sx={{
            display: "flex",
            position: "relative",
        }}>
            <Language/>
            <StyledImg src={languages.filter(e => e.short === language)[0].image}/>
        </Box>
    )
}

export default LanguageButton