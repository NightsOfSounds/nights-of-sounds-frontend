import { Box, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'

const useScrollHandler = (handler: ()=>void) => {
    useEffect(() => {
        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [handler])
}

function TitleImage() {

    const imgRef = useRef<any>();
    const textRef = useRef<any>();

    const handler = ()=>{
        if(imgRef.current) {
          imgRef.current.style.objectPosition = `50% calc( 50% + ${window.scrollY * 0.3}px )`
          imgRef.current.style.filter = `brightness(${1 - (window.scrollY / window.innerHeight)})`
        }
        if(textRef.current) {
          textRef.current.style.top = `calc( 50% + ${window.scrollY / 2}px )`
        }
      }
  
      useScrollHandler(handler)

    return (
        <Box sx={{
            position: "relative",
            marginBottom: 8,
            overflow: "hidden",
            display: "flex",
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
          <img src="/img/untitled2.webp" alt="Background banner" style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            position: "relative",
          }} ref={imgRef}/>
          <Typography variant="h3" sx={{
              position: "absolute",
              transform: "translateY(-50%)",
              fontWeight: "bold",
              width: "100%",
              textAlign: "center",
              top: "50%",
            }} ref={textRef}>NIGHTS OF SOUNDS</Typography>
        </Box>
    )
}

export default TitleImage