import { Box } from "@mui/material"

type MobileOpenType = {
    mobileDrawer: boolean,
    isMobile: boolean,
    onClick: () => void
}
function MobileOpenButton({ mobileDrawer, isMobile, onClick }: MobileOpenType) {

    const maxRotate = 45

    const outerSX = {
        backgroundColor: "white",
        left: "0",
        width: "100%",
        height: "2px",
        position: "absolute",
        transition: ".3s",
        opacity: mobileDrawer ? "0" : "1"
    }

    const innerSX = {
        backgroundColor: "white",
        top: "calc( 50% - 0px )",
        left: "0",
        width: "100%",
        height: "1px",
        position: "absolute",
        transition: ".3s",
    }

    return (
        <Box sx={{
            width: "50px",
            height: "45px",
            position: "fixed",
            top: "0",
            right: "0",
            zIndex: "17",
            display: isMobile ? "block" : "none",
            pointerEvents: "all",
            padding: "10px",
            paddingTop: "15px",
            cursor: "pointer",
        }} onClick={() => {
            onClick()
        }} role="button"
            aria-label="open navigation">
            <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
                <Box sx={{
                    ...outerSX,
                    top: "0",
                }}></Box>
                <Box sx={{
                    ...innerSX,
                    transform: `rotate(${mobileDrawer ? `${maxRotate}deg` : "0"})`,
                }}></Box>
                <Box sx={{
                    ...innerSX,
                    transform: `rotate(${mobileDrawer ? `${-maxRotate}deg` : "0"})`,
                }}></Box>
                <Box sx={{
                    ...outerSX,
                    bottom: "0",
                }}></Box>
            </Box>
        </Box>
    )
}

export default MobileOpenButton