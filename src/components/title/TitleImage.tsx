import { Box, ThemeProvider, Typography } from '@mui/material'
import { useRef } from 'react'
import { headerTheme } from '../../utils/theme';
import { useScrollHandler } from '../scroll/scrollHandler';

const sizes = [
  {
    height: 270,
    width: 480,
  }, {
    height: 405,
    width: 720,
  }, {
    height: 1080,
    width: 1920,
  }, {
    height: 1440,
    width: 2560,
  },
]

type TitleImageType = {
  height?: number
}
function TitleImage({height = 1}:TitleImageType) {

    const imgRef = useRef<any>();
    const textRef = useRef<any>();

    const imageWidth = window.innerWidth
    const imageVersion = sizes.filter(e => e.width >= imageWidth)[0]
    const url = `/img/banner/banner-${imageVersion.width}-${imageVersion.height}.webp`
    

    const handler = () => {
        if(imgRef.current) {
          imgRef.current.style.objectPosition = `50% calc( 50% + ${window.scrollY * 0.3}px )`
          imgRef.current.style.filter = `brightness(${1 - (window.scrollY / (window.innerHeight * height))})`
        }
        if(textRef.current) {
          textRef.current.style.top = `calc( 50% + ${window.scrollY / 2}px )`
        }
      }
  
      useScrollHandler(handler)

    return (
      <ThemeProvider theme={headerTheme}>
        <Box sx={{
            position: "relative",
            marginBottom: 8,
            overflow: "hidden",
            display: "flex",
            zIndex: 2,
            "&:after": {
              position: "absolute",
              content: '""',
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              boxShadow: "inset 0px -14px 31px -16px #000000",
            }
          }}>
          <img src={url} alt="" style={{
            width: "100%",
            height: `${height * 100}vh`,
            objectFit: "cover",
            position: "relative",
          }} ref={imgRef}/>
          <Typography sx={{
              position: "absolute",
              transform: "translateY(-50%)",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
              top: "50%",
              willChange: "top",
              fontSize: "3rem",
            }} ref={textRef}>NIGHTS OF SOUNDS</Typography>
        </Box>
      </ThemeProvider>
    )
}

export default TitleImage