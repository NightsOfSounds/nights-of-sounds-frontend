import { styled } from "@mui/material";

const HoverImage = styled("img")(({theme}) => 
    theme.unstable_sx([{
        width: "100%",
        transition: ".3s",
    }, {
        "&:hover": {
            transform: {
                md: "scale(1.1)",
                xs: "scale(1)",
            },
        }
    }])
)

export default HoverImage