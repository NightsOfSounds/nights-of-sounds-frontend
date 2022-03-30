import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      },{
        "name": "Equipment",
        "url": "/equipment"
      }
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
      <>
      <Box sx={{
        position: "relative",
        marginBottom: "40px",
        overflow: "hidden",
        display: "flex",
      }}>
      <img src="img/untitled2.webp" alt="Background banner" style={{
        width: "100%",
        height: "100vh",
        objectFit: "cover",
        position: "relative",
        objectPosition: `50% calc( 50% + ${scrollHeight * 0.3}px )`,
        filter: `brightness(${1 - (scrollHeight / window.innerHeight)})`,
      }}/>
      <Typography variant="h3" sx={{
          position: "absolute",
          top: `calc( 50% + ${scrollHeight / 2}px )`,
          transform: "translateY(-50%)",
          fontWeight: "bold",
          width: "100%",
          textAlign: "center",
        }}>NIGHTS OF SOUNDS</Typography>
      </Box>
      <Box sx={{
          top: "0",
          left: "0",
          width: "100%",
          margin: "auto",
          textAlign: "center",
          backgroundColor: "rgba(50, 50, 50, 0.5)",
          padding: "10px 0",
          position: "fixed",
          zIndex: "10",
        }}>
  
          {links.map((e, i) => <HeaderButton key={`header.button.${i}`} url={e.url}>{e.name}</HeaderButton>)}
  
        </Box>
      </>
    )
}
  
export default Header;

type HeaderButtonType = {
    url: string,
    children: string
}
function HeaderButton({url, children}:HeaderButtonType) {
  
  const location = useLocation();
  const [isActive, setActive] = useState(window.location.pathname === url);

  useEffect(()=>{
    setActive(window.location.pathname === url)
  }, [location])

  
  
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
            backgroundColor: (isActive ? "rgba(0, 0, 0, 0.5)" : "transparent")
          }
        ]}>
          <Typography sx={{
            color: "inherit",
            zIndex: -1,
          }}>{children}</Typography>
        </Box>
      </Link>
    )
}