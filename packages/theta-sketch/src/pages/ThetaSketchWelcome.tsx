import { Box, Typography, Tooltip, IconButton, Button } from '@mui/material';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeech, GlowOrbs, slideUp, fadeIn } from '@alchemist/shared';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EastIcon from '@mui/icons-material/East';

// Narration content
const NARRATION_CONTENT = `
Welcome to the math behind Theta Sketch. We'll explore KMV, or K Minimum Values, the foundation that makes Theta Sketch work. Once you understand KMV, Theta Sketch becomes intuitive.

We'll build up step by step: first, Order Statistics, then K-th Smallest Estimation, followed by the KMV algorithm, and finally, Theta Sketch itself.

Don't be intimidated by the math, the ideas are surprisingly straightforward, requiring only elementary math knowledge. When you're ready, click begin to start the journey.
`.trim();

export const ThetaSketchWelcome = () => {
    const navigate = useNavigate();
    const { isSupported, currentVoice } = useSpeech({ rate: 0.95 });

    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentSentence, setCurrentSentence] = useState<string>('');
    const [showSubtitles, setShowSubtitles] = useState(false);

    const sentences = NARRATION_CONTENT.split(/(?<=[.!?])\s+/).filter(s => s.trim());

    const speakSentence = useCallback((index: number) => {
        if (index >= sentences.length) {
            setIsPlaying(false);
            setIsPaused(false);
            setShowSubtitles(false);
            setCurrentSentence('');
            return;
        }

        const text = sentences[index];
        setCurrentSentence(text);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;

        if (currentVoice) {
            utterance.voice = currentVoice;
        } else {
            const voices = speechSynthesis.getVoices();
            const googleVoice = voices.find(v => v.name.includes('Google US English'));
            if (googleVoice) {
                utterance.voice = googleVoice;
            }
        }

        utterance.onend = () => {
            setTimeout(() => speakSentence(index + 1), 400);
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setIsPaused(false);
            setShowSubtitles(false);
            setCurrentSentence('');
        };

        speechSynthesis.speak(utterance);
    }, [sentences, currentVoice]);

    const speakWithTracking = useCallback(() => {
        speechSynthesis.cancel();
        setIsPlaying(true);
        setIsPaused(false);
        setShowSubtitles(true);
        speakSentence(0);
    }, [speakSentence]);

    const handleVoiceToggle = useCallback(() => {
        if (isPlaying && !isPaused) {
            speechSynthesis.pause();
            setIsPaused(true);
        } else if (isPaused) {
            speechSynthesis.resume();
            setIsPaused(false);
        } else {
            speakWithTracking();
        }
    }, [isPlaying, isPaused, speakWithTracking]);

    const handleDiveIn = useCallback(() => {
        speechSynthesis.cancel();
        navigate('/theta-sketch/roadmap');
    }, [navigate]);

    // Auto-start disabled - user clicks play button to start narration

    useEffect(() => {
        return () => {
            speechSynthesis.cancel();
        };
    }, []);

    const getVoiceButtonState = () => {
        if (isPlaying && !isPaused) {
            return { icon: <PauseIcon />, tooltip: 'Pause' };
        } else if (isPaused) {
            return { icon: <PlayArrowIcon />, tooltip: 'Resume' };
        } else {
            return { icon: <VolumeUpIcon />, tooltip: 'Listen' };
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
                position: 'relative',
            }}
        >
            {/* Background Orbs - Uses theme colors automatically */}
            <GlowOrbs preset="default" />

            {/* Main Content - Centered */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 4,
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* Title with Theta Icon */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                        animation: `${slideUp} 1s ease-out 0.3s both`,
                    }}
                >
                    {/* Theta Icon */}
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            boxShadow: (theme) => `0 4px 20px ${theme.palette.primary.main}40`,
                        }}
                    >
                        <Typography
                            component="span"
                            sx={{
                                fontSize: '1.8rem',
                                fontStyle: 'italic',
                                fontWeight: 400,
                                color: 'primary.contrastText',
                            }}
                        >
                            θ
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.8rem' },
                            fontWeight: 700,
                            textTransform: 'uppercase',
                        }}
                    >
                        Theta Sketch
                    </Typography>
                </Box>

                {/* Subtitle */}
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        fontWeight: 400,
                        textAlign: 'center',
                        lineHeight: 1.8,
                        mb: 8,
                        animation: `${slideUp} 1s ease-out 0.5s both`,
                    }}
                >
                    A journey through Order Statistics, K-th Smallest Estimation, KMV, and beyond.
                </Typography>

                {/* Narration Display */}
                <Box
                    sx={{
                        maxWidth: 600,
                        minHeight: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 6,
                        px: 4,
                        animation: `${slideUp} 1s ease-out 0.7s both`,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            fontWeight: 300,
                            lineHeight: 2,
                            textAlign: 'center',
                            color: showSubtitles && currentSentence ? 'text.primary' : 'text.secondary',
                            fontStyle: showSubtitles && currentSentence ? 'normal' : 'italic',
                            transition: 'all 0.5s ease',
                        }}
                    >
                        {currentSentence}
                    </Typography>
                </Box>

                {/* Controls */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        animation: `${slideUp} 1s ease-out 0.9s both`,
                    }}
                >
                    {/* Play/Pause - Standard MUI IconButton with theme styling */}
                    {isSupported && (
                        <Tooltip title={voiceButtonState.tooltip}>
                            <IconButton
                                onClick={handleVoiceToggle}
                                color="primary"
                                size="large"
                                sx={{ width: 52, height: 52 }}
                            >
                                {voiceButtonState.icon}
                            </IconButton>
                        </Tooltip>
                    )}

                    {/* Begin Button - Standard MUI Button */}
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleDiveIn}
                        endIcon={<EastIcon />}
                    >
                        Begin
                    </Button>
                </Box>

                {!isSupported && (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mt: 4 }}
                    >
                        Voice narration requires a supported browser
                    </Typography>
                )}
            </Box>

            {/* Speaking Indicator */}
            {isPlaying && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        animation: `${fadeIn} 0.5s ease-out`,
                    }}
                >
                    {/* Sound wave visualization */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                        {[0, 1, 2, 3, 4].map((i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: 2,
                                    height: 16,
                                    bgcolor: 'primary.main',
                                    borderRadius: 1,
                                    opacity: 0.7,
                                    animation: `soundWave 1s ease-in-out infinite`,
                                    animationDelay: `${i * 0.1}s`,
                                    '@keyframes soundWave': {
                                        '0%, 100%': { transform: 'scaleY(0.3)' },
                                        '50%': { transform: 'scaleY(1)' },
                                    },
                                }}
                            />
                        ))}
                    </Box>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ letterSpacing: '0.1em' }}
                    >
                        listening
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default ThetaSketchWelcome;
