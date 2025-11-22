import {
    Box,
    Typography,
    Fade,
} from '@mui/material';

interface FunctionFlowDiagramProps {
    isVisible: boolean;
    isDarkMode: boolean;
}

export const FunctionFlowDiagram = ({ isVisible, isDarkMode }: FunctionFlowDiagramProps) => {
    // Define colors locally
    const warmPurple = isDarkMode ? '#9B7EDE' : '#AB8EEE';
    const softBlue = isDarkMode ? '#6BA3D8' : '#7BB3E8';

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
                            border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.5)'}`,
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
                                border: `4px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.9)' : 'rgba(99, 102, 241, 0.8)'}`,
                                boxShadow: `0 0 20px ${isDarkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                padding: '2px',
                                background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)',
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
                                    <stop offset="0%" stopColor={warmPurple} />
                                    <stop offset="100%" stopColor={softBlue} />
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
                            border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.5)'}`,
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
                                border: `4px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.9)' : 'rgba(99, 102, 241, 0.8)'}`,
                                boxShadow: `0 0 30px ${isDarkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(99, 102, 241, 0.4)'}`,
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                padding: '2px',
                                background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)',
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
                            border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.5)'}`,
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
                                border: `4px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.9)' : 'rgba(99, 102, 241, 0.8)'}`,
                                boxShadow: `0 0 20px ${isDarkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                            },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '50%',
                                padding: '2px',
                                background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)',
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
