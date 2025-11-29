import {
    Box,
    Typography,
    Fade,
} from '@mui/material';

interface FunctionFlowDiagramProps {
    isVisible: boolean;
    isDarkMode: boolean;
}
import { mercuryBaseColor as baseColor } from '../../theme/mercury/MercuryTheme';

export const FunctionFlowDiagram = ({ isVisible, isDarkMode }: FunctionFlowDiagramProps) => {
    // Mercury's characteristic gray-brown colors
    const mercuryPrimary = isDarkMode
        ? `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.6)`
        : `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 0.5)`;
    const mercurySecondary = isDarkMode
        ? `rgba(${baseColor.r - 20}, ${baseColor.g - 20}, ${baseColor.b - 20}, 0.5)`
        : `rgba(${baseColor.r - 20}, ${baseColor.g - 20}, ${baseColor.b - 20}, 0.4)`;
    const mercuryAccent = isDarkMode
        ? `rgba(${baseColor.r + 15}, ${baseColor.g + 15}, ${baseColor.b + 15}, 0.5)`
        : `rgba(${baseColor.r + 15}, ${baseColor.g + 15}, ${baseColor.b + 15}, 0.4)`;
    const mercuryShadow = isDarkMode
        ? `rgba(${baseColor.r - 40}, ${baseColor.g - 40}, ${baseColor.b - 40}, 0.4)`
        : `rgba(${baseColor.r - 40}, ${baseColor.g - 40}, ${baseColor.b - 40}, 0.3)`;
    const mercuryHighlight = isDarkMode
        ? `rgba(${baseColor.r + 25}, ${baseColor.g + 25}, ${baseColor.b + 25}, 0.5)`
        : `rgba(${baseColor.r + 25}, ${baseColor.g + 25}, ${baseColor.b + 25}, 0.4)`;

    return (
        <Fade in={isVisible} timeout={1000}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    px: { xs: 2, md: 4 },
                }}
            >
                {/* Top row: Circles and Arrows */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: { xs: 1, md: 2 },
                        flexWrap: { xs: 'wrap', sm: 'nowrap' }
                    }}
                >
                    {/* Input Circle */}
                    <Box
                        sx={{
                            width: { xs: '120px', md: '140px' },
                            height: { xs: '120px', md: '140px' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            border: `2px solid ${mercuryPrimary}`,
                            textAlign: 'center',
                            position: 'relative',
                            px: 2,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'scale(1)' : 'scale(0.3)',
                            transition: isVisible
                                ? 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms, border 0.3s ease, boxShadow 0.3s ease'
                                : 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms',
                            willChange: 'transform, opacity',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.15)',
                                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.3s ease, boxShadow 0.3s ease',
                                border: `4px solid ${mercuryPrimary}`,
                                boxShadow: `0 0 20px ${mercuryShadow}`,
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                padding: '2px',
                                background: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
                                backgroundSize: '200% 200%',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                zIndex: -1,
                                animation: 'gradientShift 8s ease infinite',
                            },
                            '&:hover::before': {
                                opacity: 0.6,
                            },
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: mercuryPrimary,
                            }}
                        >
                            Input
                        </Typography>
                    </Box>

                    {/* Arrow 1 */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0
                        }}
                    >
                        <svg
                            width={60}
                            height={20}
                            viewBox="0 0 60 20"
                            style={{ overflow: 'visible' }}
                        >
                            <defs>
                                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor={mercuryPrimary} />
                                    <stop offset="100%" stopColor={mercurySecondary} />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 0 10 L 50 10 M 45 5 L 50 10 L 45 15"
                                stroke="url(#arrowGradient)"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Box>

                    {/* Function/Decision Circle */}
                    <Box
                        sx={{
                            width: { xs: '220px', md: '280px' },
                            height: { xs: '220px', md: '280px' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            border: `2px solid ${mercuryPrimary}`,
                            textAlign: 'center',
                            position: 'relative',
                            px: 2,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'scale(1)' : 'scale(0.3)',
                            transition: isVisible
                                ? 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 400ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 400ms, border 0.3s ease, boxShadow 0.3s ease'
                                : 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 400ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 400ms',
                            willChange: 'transform, opacity',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.2)',
                                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.3s ease, boxShadow 0.3s ease',
                                border: `4px solid ${mercuryPrimary}`,
                                boxShadow: `0 0 30px ${mercuryShadow}`,
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                padding: '2px',
                                background: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
                                backgroundSize: '200% 200%',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                zIndex: -1,
                                animation: 'gradientShift 8s ease infinite',
                            },
                            '&:hover::before': {
                                opacity: 0.8,
                            },
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: mercuryPrimary,
                            }}
                        >
                            Decision
                        </Typography>
                    </Box>

                    {/* Arrow 2 */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0
                        }}
                    >
                        <svg
                            width={60}
                            height={20}
                            viewBox="0 0 60 20"
                            style={{ overflow: 'visible' }}
                        >
                            <path
                                d="M 0 10 L 50 10 M 45 5 L 50 10 L 45 15"
                                stroke="url(#arrowGradient)"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Box>

                    {/* Output Circle */}
                    <Box
                        sx={{
                            width: { xs: '120px', md: '140px' },
                            height: { xs: '120px', md: '140px' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            border: `2px solid ${mercuryPrimary}`,
                            textAlign: 'center',
                            position: 'relative',
                            px: 2,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'scale(1)' : 'scale(0.3)',
                            transition: isVisible
                                ? 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 600ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 600ms, border 0.3s ease, boxShadow 0.3s ease'
                                : 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 600ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 600ms',
                            willChange: 'transform, opacity',
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.15)',
                                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), border 0.3s ease, boxShadow 0.3s ease',
                                border: `4px solid ${mercuryPrimary}`,
                                boxShadow: `0 0 20px ${mercuryShadow}`,
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                padding: '2px',
                                background: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
                                backgroundSize: '200% 200%',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                zIndex: -1,
                                animation: 'gradientShift 8s ease infinite',
                            },
                            '&:hover::before': {
                                opacity: 0.6,
                            },
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: mercuryPrimary,
                            }}
                        >
                            Output
                        </Typography>
                    </Box>
                </Box>

                {/* Bottom row: Example Text Labels */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        gap: { xs: 1, md: 2 },
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        mt: 1
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '120px', md: '140px' },
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: '1.2rem', md: '1.4rem' },
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                color: mercuryPrimary,
                            }}
                        >
                            x
                        </Typography>
                    </Box>

                    {/* Spacer for arrow */}
                    <Box sx={{ width: { xs: '60px', md: '60px' }, flexShrink: 0 }} />

                    <Box
                        sx={{
                            width: { xs: '220px', md: '280px' },
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: '1.2rem', md: '1.4rem' },
                                fontStyle: 'italic',
                                textAlign: 'center',
                                color: mercuryPrimary,
                            }}
                        >
                            f(x)
                        </Typography>
                    </Box>

                    {/* Spacer for arrow */}
                    <Box sx={{ width: { xs: '60px', md: '60px' }, flexShrink: 0 }} />

                    <Box
                        sx={{
                            width: { xs: '120px', md: '140px' },
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: { xs: '1.2rem', md: '1.4rem' },
                                fontFamily: 'monospace',
                                textAlign: 'center',
                                color: mercuryPrimary,
                            }}
                        >
                            y
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Fade>
    );
};
