import { Box } from "@mui/material";
import { buildRgba, type RgbaColor } from "../../theme/PlanetTheme";

export interface ProgressProps {
    isDarkMode: boolean,
    currentSection: number,
    totalSections: number,
    colorPrimary: RgbaColor,
    colorSecondary: RgbaColor,
}

export const Progress = ({ isDarkMode, currentSection, totalSections, colorPrimary, colorSecondary }: ProgressProps) => {

    // Shadow colors for progress bar glow (different opacity for dark/light modes)
    const shadowDark: RgbaColor = { ...colorPrimary, a: 0.4 };
    const shadowLight: RgbaColor = { ...colorPrimary, a: 0.3 };
    // Border colors
    const borderDark: RgbaColor = { ...colorPrimary, a: 0.3 };
    const borderLight: RgbaColor = { ...colorPrimary, a: 0.4 };
    // Box shadow colors
    const boxShadowDark: RgbaColor = { ...colorPrimary, a: 0.2 };
    const boxShadowLight: RgbaColor = { ...colorPrimary, a: 0.25 };

    const shadowColor = isDarkMode ? buildRgba(shadowDark) : buildRgba(shadowLight);
    const borderColor = isDarkMode ? buildRgba(borderDark) : buildRgba(borderLight);
    const boxShadowColor = isDarkMode ? buildRgba(boxShadowDark) : buildRgba(boxShadowLight);
    
    // Convert colors to strings for gradient
    const primaryColorString = buildRgba(colorPrimary);
    const secondaryColorString = buildRgba(colorSecondary);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                px: { xs: 2.5, },
                py: { xs: 1.5, },
                borderRadius: '16px',
                backdropFilter: 'blur(1px)',
                border: `1px solid ${borderColor}`,
                boxShadow: `0 8px 32px ${boxShadowColor}`,
            }}
        >
            {/* Progress Text */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1.5,
                }}
            >
                <Box
                    component="span"
                    sx={{
                        color: buildRgba(colorPrimary),
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        fontFamily: 'monospace',
                    }}
                >
                    {currentSection + 1} / {totalSections}
                </Box>
            </Box>

            {/* Progress Bar */}
            <Box
                sx={{
                    width: '100%',
                    height: '4px',
                    borderRadius: '2px',
                    background: isDarkMode
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: `${((currentSection + 1) / totalSections) * 100}%`,
                        background: `linear-gradient(90deg, ${primaryColorString}, ${secondaryColorString})`,
                        borderRadius: '2px',
                        transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: `0 0 8px ${shadowColor}`,
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                            animation: 'shimmer 2s ease-in-out infinite',
                            '@keyframes shimmer': {
                                '0%': { transform: 'translateX(-100%)' },
                                '100%': { transform: 'translateX(100%)' },
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

