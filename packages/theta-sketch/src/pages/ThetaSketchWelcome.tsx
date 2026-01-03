import { Box, Typography } from '@mui/material';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton, FloatingParticles, useSpeech } from '@alchemist/shared';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Narration script - each segment syncs with a visual phase
const NARRATION_SEGMENTS = [
    "Welcome to the math behind Theta Sketch.",
    "Actually, we are going to explore what is KMV, K minimum values.",
    "Theta Sketch is a practical application of KMV, a probabilistic data structure for counting unique elements.",
    "As long as you know what is KMV, you will understand Theta Sketch.",
    "We will explore the sub concepts of KMV step by step.",
    "First, we will explore the order statistics.",
    "Then, we will explore the k_th smallest estimation.",
    "Then, we will explore the KMV algorithm.",
    "Finally, we will explore Theta Sketch.",
    "Please do not be intimidated by the math, actually the ideas behind them are quite straightforward.",
    "We will just need elementary math knowledge to understand them.",
    "when you are ready, please click the button below to start the journey.",
];

interface AnimationPhase {
    id: string;
    delay: number; // delay in ms from start
}

const ANIMATION_PHASES: AnimationPhase[] = [
    { id: 'theta-symbol', delay: 0 },
    { id: 'title', delay: 800 },
    { id: 'subtitle', delay: 1600 },
    { id: 'features', delay: 2400 },
    { id: 'cta', delay: 3200 },
];

/**
 * ThetaSketchWelcome - Animated welcome/intro page for Theta Sketch
 */
export const ThetaSketchWelcome = () => {
    const navigate = useNavigate();
    const [currentPhase, setCurrentPhase] = useState(-1);
    const [hasStarted, setHasStarted] = useState(false);
    const segmentIndexRef = useRef(0);

    const { stop, isSpeaking, isSupported } = useSpeech({ rate: 0.95 });

    // Reveal phases progressively
    useEffect(() => {
        if (!hasStarted) return;

        const timers: ReturnType<typeof setTimeout>[] = [];
        ANIMATION_PHASES.forEach((phase, index) => {
            const timer = setTimeout(() => {
                setCurrentPhase(index);
            }, phase.delay);
            timers.push(timer);
        });

        return () => timers.forEach(clearTimeout);
    }, [hasStarted]);

    // Speak next segment
    const speakNextSegment = useCallback(() => {
        if (segmentIndexRef.current < NARRATION_SEGMENTS.length) {
            const text = NARRATION_SEGMENTS[segmentIndexRef.current];
            segmentIndexRef.current += 1;

            // Create utterance with onend handler for chaining
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.95;

            // Get best voice
            const voices = speechSynthesis.getVoices();
            const googleVoice = voices.find(v => v.name.includes('Google US English'));
            if (googleVoice) {
                utterance.voice = googleVoice;
            }

            utterance.onend = () => {
                // Small pause between segments
                setTimeout(() => {
                    if (segmentIndexRef.current < NARRATION_SEGMENTS.length) {
                        speakNextSegment();
                    }
                }, 500);
            };

            speechSynthesis.speak(utterance);
        }
    }, []);

    // Start the experience
    const handleStart = useCallback(() => {
        setHasStarted(true);
        segmentIndexRef.current = 0;

        // Start narration after a brief delay
        setTimeout(() => {
            speakNextSegment();
        }, 500);
    }, [speakNextSegment]);

    // Skip to main content
    const handleSkip = useCallback(() => {
        stop();
        navigate('/alchemist-sketches/theta-sketch/learn');
    }, [navigate, stop]);

    // Continue to learn page
    const handleContinue = useCallback(() => {
        stop();
        navigate('/alchemist-sketches/theta-sketch/learn');
    }, [navigate, stop]);

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

