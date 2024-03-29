import { Box, Paper, Stack, styled, Typography } from '@mui/material';
import ContentBox from '../../components/content/ContentBox';
import { hoverPaperStyle } from '../../components/datadisplay/ImageTextBanner';
import { useLanguage } from '../../components/localization/Localization';
import ScrollInto from '../../components/scroll/ScrollInto';
import YoutubEmbed from '../../components/social/YoutubeEmbed';
import TextProcessor from '../../components/text/TextProcessor';
import SiteTitle from '../../components/title/SiteTitle';
import NOS from '../../img/nos-logo.webp'

function Home() {

    const lang = useLanguage()
    const StyledImg = styled("img")({
            width: "100%",
        }
    )

    const SyledIframe = styled("iframe")(({theme}) => 
        theme.unstable_sx([{
            width: "350px",
            maxWidth: {
                xs: "100%",
                md: "350px",
            },
        }])
    )

    const paperStyle = {
        textAlign: "center", 
        marginBottom: 4, 
        p: 2,
        ...hoverPaperStyle
    }

    return (
        <ContentBox>
            <SiteTitle>{lang("home.title")}</SiteTitle>
            <ScrollInto>
                <Paper sx={ paperStyle }>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>{lang("home.01.title")}</Typography>
                    <Stack direction={{ xs: "column", md: "row" }} gap={2}>
                        <Box sx={{
                            margin: "auto",
                        }}>
                            <Box sx={{
                                overflow: "hidden",
                                borderRadius: 1,
                                width: "200px",
                                maxWidth: {
                                    xs: "100%",
                                    md: "200px",
                                },
                            }}>
                                <StyledImg alt="Profile image" src={NOS} />
                            </Box>
                        </Box>
                        <Box>
                            <TextProcessor>
                                {lang("home.01.text")}
                            </TextProcessor>
                        </Box>
                    </Stack>
                </Paper>
            </ScrollInto>
            <ScrollInto>
                <Paper sx={ paperStyle }>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>{lang("home.02.title")}</Typography>
                    <Stack direction={{ xs: "column", md: "row" }} gap={2}>
                        <Box>
                            <TextProcessor>
                                {lang("home.02.text")}
                            </TextProcessor>
                        </Box>
                    </Stack>
                </Paper>
            </ScrollInto>
            <ScrollInto>
                <Paper sx={ paperStyle }>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>{lang("home.03.title")}</Typography>
                    <TextProcessor>{lang("home.03.text")}</TextProcessor>
                    <YoutubEmbed controls />
                </Paper>
            </ScrollInto>
            <ScrollInto>
                <Paper sx={ paperStyle }>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>{lang("home.04.title")}</Typography>
                    <Stack direction={{ xs: "column", md: "row" }} gap={2}>
                        <Box>
                            <TextProcessor>
                                {lang("home.04.text")}
                            </TextProcessor>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <SyledIframe
                                src="https://discord.com/widget?id=744705193995796522&theme=dark"
                                height="350"
                                frameBorder={0}
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                title='Discord server overview'
                            ></SyledIframe>
                        </Box>
                    </Stack>
                </Paper>
            </ScrollInto>
        </ContentBox>
    )
}

export default Home