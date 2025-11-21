import { Box, Slide, Typography } from "@mui/material";
import { Fade } from "@mui/material";

const SimplestFunction = ({ isVisible, isDarkMode }: { isVisible: boolean, isDarkMode: boolean }) => {

    const aiColors = {
        warmAmber: isDarkMode ? '#FFB84D' : '#FFC966',
        softTeal: isDarkMode ? '#4ECDC4' : '#5EDDD6',
        warmPurple: isDarkMode ? '#9B7EDE' : '#AB8EEE',
        softGreen: isDarkMode ? '#6BCF7F' : '#7BDF8F',
        warmOrange: isDarkMode ? '#FF8C42' : '#FF9C52',
        softBlue: isDarkMode ? '#6BA3D8' : '#7BB3E8',
        softCyan: isDarkMode ? '#5BC8D8' : '#6BD8E8',
        text: isDarkMode ? '#F5F5F5' : '#2C2C2C',
    };

    return (
        <Fade in={isVisible} timeout={1000}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 3,
                    px: { xs: 2, md: 4 },
                }}
            >
                <Slide direction="up" in={isVisible} timeout={800} style={{ transitionDelay: '0ms' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            lineHeight: 1.8,
                            fontWeight: 300,
                            textAlign: 'center',
                            mb: 2,
                        }}
                    >
                        The simplest function is: <strong>if...else</strong>
                    </Typography>
                </Slide>

                <Slide direction="up" in={isVisible} timeout={800} style={{ transitionDelay: '200ms' }}>
                    <Box
                        sx={{
                            width: '60%',
                            p: { xs: 3, md: 4 },
                            borderRadius: '20px',
                            background: isDarkMode
                                ? 'rgba(155, 126, 222, 0.1)'
                                : 'rgba(155, 126, 222, 0.08)',
                            border: `2px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(155, 126, 222, 0.25)'}`,
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                fontWeight: 400,
                                textAlign: 'left',
                                fontFamily: 'monospace',
                                lineHeight: 2,
                                color: aiColors.text,
                            }}
                        >
                            <Box component="span" sx={{ color: aiColors.warmPurple, fontWeight: 600 }}>
                                if
                            </Box>
                            <Box component="span" sx={{ color: aiColors.text, mx: 1 }}>
                                {' '}(condition){' '}
                            </Box>
                            <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 600 }}>
                                {'{'}
                            </Box>
                            <br />
                            <Box component="span" sx={{ ml: 3, color: aiColors.softTeal }}>
                                return value1;
                            </Box>
                            <br />
                            <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 600 }}>
                                {'}'}
                            </Box>
                            <Box component="span" sx={{ color: aiColors.warmPurple, fontWeight: 600, mx: 1 }}>
                                else
                            </Box>
                            <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 600 }}>
                                {'{'}
                            </Box>
                            <br />
                            <Box component="span" sx={{ ml: 3, color: aiColors.softTeal }}>
                                return value2;
                            </Box>
                            <br />
                            <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 600 }}>
                                {'}'}
                            </Box>
                        </Box>
                    </Box>
                </Slide>

                <Slide direction="up" in={isVisible} timeout={800} style={{ transitionDelay: '400ms' }}>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            lineHeight: 1.8,
                            fontWeight: 300,
                            textAlign: 'center',
                            mt: 2,
                        }}
                    >
                        This simple pattern — <strong>if condition, then result A, else result B</strong> —
                        is the foundation of all decision-making, from basic programming to neural networks.
                    </Typography>
                </Slide>
            </Box>
        </Fade>
    );
};

export default SimplestFunction;
