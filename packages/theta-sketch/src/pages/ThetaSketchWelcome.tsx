import { Box, Typography, keyframes } from '@mui/material';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton, FloatingParticles, useSpeech } from '@alchemist/shared';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Narration script - each segment syncs with a visual phase
const NARRATION_SEGMENTS = [
    "Welcome to Theta Sketch.",
    "A powerful probabilistic data structure for counting unique elements.",
    "Imagine counting billions of items using only kilobytes of memory.",
    "Let's explore how it works.",
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

            <Typography
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
            </Typography>

            <GradientButton
                onClick={handleStart}
                size="medium"
                sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.2rem',
                    //   animation: `${pulse} 2s ease-in-out infinite`,
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

