import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton, FloatingParticles, useSpeech } from '@alchemist/shared';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Narration content for voice synthesis
const NARRATION_CONTENT = `
Welcome to the math behind Theta Sketch. We'll explore KMV, or K Minimum Values, the foundation that makes Theta Sketch work. Once you understand KMV, Theta Sketch becomes intuitive.

We'll build up step by step: first, Order Statistics, then K-th Smallest Estimation, followed by the KMV algorithm, and finally, Theta Sketch itself.

Don't be intimidated by the math. The ideas are surprisingly straightforward, requiring only elementary math knowledge. When you're ready, click below to begin the journey.
`.trim();

/**
 * ThetaSketchWelcome - Welcome/intro page for Theta Sketch
 */
export const ThetaSketchWelcome = () => {
    const navigate = useNavigate();
    const { speak, stop, pause, resume, isSpeaking, isPaused, isSupported } = useSpeech({ rate: 0.95 });

    // Toggle voice narration (play/pause)
    const handleVoiceToggle = useCallback(() => {
        if (isSpeaking && !isPaused) {
            // Currently playing -> pause
            pause();
        } else if (isPaused) {
            // Currently paused -> resume
            resume();
        } else {
            // Not started -> start speaking
            speak(NARRATION_CONTENT);
        }
    }, [isSpeaking, isPaused, speak, pause, resume]);

    // Start the learning journey
    const handleStart = useCallback(() => {
        stop(); // Stop any ongoing narration
        navigate('/alchemist-sketches/theta-sketch/learn');
    }, [stop, navigate]);

    // Determine button icon and tooltip
    const getVoiceButtonState = () => {
        if (isSpeaking && !isPaused) {
            return { icon: <PauseIcon />, tooltip: 'Pause narration' };
        } else if (isPaused) {
            return { icon: <PlayArrowIcon />, tooltip: 'Resume narration' };
        } else {
            return { icon: <VolumeUpIcon />, tooltip: 'Listen to introduction' };
        }
    };

    const voiceButtonState = getVoiceButtonState();

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Starfield Background */}
            <FloatingParticles particleCount={60} />

            <GradientTypography
                variant="h3"
                sx={{
                    mb: 5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 700,
                    textAlign: 'center',
                }}
            >
                <BarChartIcon fontSize="inherit" sx={{ color: 'primary.main' }} />
                The Math Behind THETA SKETCH
            </GradientTypography>

            <GradientTypography
                variant="h5"
                sx={{
                    color: 'text.primary',
                    mb: 5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    textAlign: 'center',
                }}
            >
                <PsychologyIcon fontSize="inherit" sx={{ color: 'secondary.main' }} />
                The Road to Theta Sketch: A Journey Through Order Statistics,
                K-th Smallest Estimation, KMV, and Beyond.
            </GradientTypography>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Voice Narration Button */}
                {isSupported && (
                    <Tooltip title={voiceButtonState.tooltip}>
                        <IconButton
                            onClick={handleVoiceToggle}
                            sx={{
                                width: 56,
                                height: 56,
                                bgcolor: isSpeaking 
                                    ? 'rgba(99, 102, 241, 0.25)' 
                                    : 'rgba(99, 102, 241, 0.15)',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                color: 'primary.light',
                                '&:hover': {
                                    bgcolor: 'rgba(99, 102, 241, 0.35)',
                                },
                                transition: 'all 0.2s ease',
                            }}
                        >
                            {voiceButtonState.icon}
                        </IconButton>
                    </Tooltip>
                )}

                {/* Dive In Button */}
                <GradientButton
                    onClick={handleStart}
                    size="medium"
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.2rem',
                        letterSpacing: '0.2px',
                    }}
                >
                    Dive In
                </GradientButton>
            </Box>

            {!isSupported && (
                <Typography
                    sx={{
                        mt: 2,
                        color: 'warning.main',
                        fontSize: '0.875rem',
                    }}
                >
                    Voice narration not supported in this browser
                </Typography>
            )}
        </Box>
    );
};

export default ThetaSketchWelcome;

