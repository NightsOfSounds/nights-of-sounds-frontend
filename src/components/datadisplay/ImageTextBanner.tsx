import { Grid, Paper } from "@mui/material"
import ScrollInto from "../scroll/ScrollInto"

type SplitType = {
    children: JSX.Element[],
}
function ImageTextBanner({children}:SplitType) {

    return(
        <ScrollInto>
            <Paper sx={{
                marginBottom: 4,
                display: "flex"
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                    padding: 2,
                }}>
                    {children.map((e,i)=>(<Grid key={`split.i.${i}`} item xs={6} sx={{margin: "auto"}}>{e}</Grid>))}
                </Grid>
            </Paper>
        </ScrollInto>
    )
}

export default ImageTextBanner