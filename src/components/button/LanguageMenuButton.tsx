import { MenuItem, experimental_sx as sx, styled } from "@mui/material"
import { MouseEventHandler } from "react"

type LanguageItemType = {
    children: string,
    src: string,
    onClick: MouseEventHandler,
    short: string,
    selected: boolean,
}
function LanguageMenuButton({short, children, src, onClick, selected}:LanguageItemType) {

    const StyledImage = styled("img")(
        sx({
            height: "14px",
            width: "25px",
            marginRight: 1
        })
    )

    return (
        <MenuItem onClick={onClick} id={short} sx={{
            backgroundColor: selected ? "action.hover" : ""
        }}>
            <StyledImage alt="Language Flag" src={src}/>
            {children}
        </MenuItem>
    )
}

export default LanguageMenuButton