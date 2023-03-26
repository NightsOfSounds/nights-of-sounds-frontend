import { experimental_sx as sx, styled } from "@mui/material";

const HoverImage = styled("img")(
    sx([{
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