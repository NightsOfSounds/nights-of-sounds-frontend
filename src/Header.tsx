import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  
    const links = [
      {
        "name": "Home",
        "url": "/",
      },{
        "name": "About Us",
        "url": "/about",
      },{
        "name": "Socials",
        "url": "/social",
      },
    ]
  
    const [scrollHeight, setScrollHeight] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY
        setScrollHeight(currentScrollY)
      };
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }, [scrollHeight]);
  
    return (
      <Box sx ={[
        {
          backgroundImage: "url(img/untitled2.png)",
          backgroundPosition: `50% calc( 50% + ${scrollHeight * 0.2}px )`,
          height: "100vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 1)",
        }, {
          "&::before": {
            content: '""',
            width: "100%",
            height: "100%",
            backgroundColor: `rgba(0, 0, 0, ${scrollHeight / window.innerHeight})`,
            position: "absolute"
          }
        }
      ]}>
        <Typography variant="h3" sx={{
          position: "absolute",
          width: "100%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          textAlign: "center"
        }}>NIGHTS OF SOUNDS</Typography>
  
        <Box sx={{
          top: "0",
          left: "0",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "rgba(50, 50, 50, 0.5)",
          padding: "10px 0",
          position: "fixed"
        }}>
  
          {links.map(e => <HeaderButton url={e.url}>{e.name}</HeaderButton>)}
  
        </Box>
      </Box> 
    )
}
  
export default Header;

type HeaderButtonType = {
    url: string,
    children: any
}
function HeaderButton({url, children}:HeaderButtonType) {
    return (
      <Link to={url} >
        <Box sx={[
          {
            "&:hover": {
              color: "#000",
            }
          },
          {
            "&::before": {
              width: "100%",
              height: "100%",
              content: '""',
              left: 0,
              top: 0,
              bgcolor: "text.primary",
              position: "absolute",
              transform: "translateY(100%)",
              transition: ".3s",
              zIndex: -1,
            }
          },
          {
            "&:hover::before": {
              transform: "translateY(0)",
            }
          },
          {
            color: "text.primary",
            textDecoration: "none",
            display: "inline-block",
            margin: "0 10px",
            transition: ".5s",
            position: "relative",
            overflow: "hidden",
            borderBottom: "2px solid white",
            padding: "5px 20px",
            zIndex: 0,
          }
        ]}>
          <Typography variant='h6' sx={{
            color: "inherit",
            zIndex: -1,
          }}>{children}</Typography>
        </Box>
      </Link>
    )
}