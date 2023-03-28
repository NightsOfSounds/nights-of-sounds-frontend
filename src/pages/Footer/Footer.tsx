import { Box, styled, Typography } from "@mui/material";
import UnderlinedLink from "../../components/link/UnderlinedLink";
import { useLanguage } from "../../components/localization/Localization";
import Moon from "../../img/moon.webp"
import MoonSmall from "../../img/moon-small.webp"
import { useRef } from "react";

const StyledFooter = styled("footer")(({theme}) =>
    theme.unstable_sx({
        backgroundColor: "black",
        p: 6,
        textAlign: "center",
        marginTop: 8,
        position: "relative",
    })
)

export default function Footer() {

    const LinkA = styled("a")(({theme}) => ({color: theme.palette.text.primary}))

    const lang = useLanguage()

    const StyledImage = styled("img")(({theme}) =>
        theme.unstable_sx([{
            objectFit: "contain",
            maxHeight: "100%",
            maxWidth: "100%",
            animation: "rotate linear 100s infinite",
            "@keyframes rotate": {
                "0%": {
                    filter: "drop-shadow(0 0 10px white)",
                    transform: "rotate(0deg)",
                },
                "7%": {
                    filter: "drop-shadow(0 0 15px white)",
                },
                "16%": {
                    filter: "drop-shadow(0 0 13px white)",
                },
                "31%": {
                    filter: "drop-shadow(0 0 20px white)",
                },
                "53%": {
                    filter: "drop-shadow(0 0 15px white)",
                },
                "62%": {
                    filter: "drop-shadow(0 0 6px gray)",
                },
                "75%": {
                    filter: "drop-shadow(0 0 11px white)",
                },
                "84%": {
                    filter: "drop-shadow(0 0 17px white)",
                },
                "96%": {
                    filter: "drop-shadow(0 0 12px white)",
                },
                "100%": {
                    transform: "rotate(360deg)",
                },
            }
        }])
    )

    let clicks:number[] = []
    let cursorSet = false
    let lastChange = 0;
    const moonEffectRef = useRef<HTMLDivElement>()

    const filterClicks = () => {
        const now = new Date().getTime()
        clicks = clicks.filter(click => click > (now - 2000))
    }

    const click = (e:any) => {
        filterClicks()
        clicks.push(new Date().getTime())
        if(clicks.length === 3) {
            clicks = []
            if(cursorSet) {
                document.body.style.cursor = ""
            } else {
                document.body.style.cursor = `url("${MoonSmall}") 15 15, auto`
            }
            cursorSet = !cursorSet

            if(lastChange > (new Date().getTime() - 1500)) {
                return
            }
            lastChange = new Date().getTime()
            if(moonEffectRef.current) {
                moonEffectRef.current.style.opacity = "0"
                moonEffectRef.current.style.transform = "translate(-50%, -50%) scale(2)"

                setTimeout(()=>{
                    if(!moonEffectRef.current) return

                    moonEffectRef.current.style.transition = "0s"
                    setTimeout(() => {
                        if(!moonEffectRef.current) return

                        moonEffectRef.current.style.opacity = "1"
                        moonEffectRef.current.style.transform = "translate(-50%, -50%) scale(0)"
                        setTimeout(() => {
                            if(!moonEffectRef.current) return

                            moonEffectRef.current.style.transition = "1s"
                        }, 10)
                    }, 1)
                }, 1000)
            }
        }
    }

    return (
        <StyledFooter>
            <Box sx={{
                position: "absolute",
                left: 10,
                maxHeight: "50%",
                maxWidth: "20%",
                display: "flex",
            }}>
                <Box sx={{
                    display: "relative",
                }}>
                    <Box sx={{
                        backgroundColor: "white",
                        maxWidth: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        position: "absolute",
                        aspectRatio: "1",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%) scale(0)",
                        zIndex: "2",
                        opacity: "1",
                        transition: "1s",
                    }} ref={moonEffectRef}></Box>
                    <StyledImage src={Moon} alt="Moon" onClick={click}/>
                </Box>
            </Box>
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
                <UnderlinedLink to="/imprint">
                    {lang("imprint.title")}
                </UnderlinedLink>
                &nbsp;
                <UnderlinedLink to="/privacy">
                    {lang("privacy.title")}
                </UnderlinedLink>
            </Box>
        </StyledFooter>
    )
}