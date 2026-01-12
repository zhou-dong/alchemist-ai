import { Box, Typography, Card, CardActionArea, Fade, Button, keyframes } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useThetaSketchProgress, type StepStatus, type RoadmapStep } from '../contexts/ThetaSketchProgressContext';

// =============================================================================
// CONFETTI ANIMATION
// =============================================================================

const confettiFall = keyframes`
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
`;

const celebratePulse = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -200% center;
    }
    100% {
        background-position: 200% center;
    }
`;

const CONFETTI_COLORS = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];

interface ConfettiPieceProps {
    delay: number;
    left: number;
    color: string;
    size: number;
    duration: number;
}

const ConfettiPiece = ({ delay, left, color, size, duration }: ConfettiPieceProps) => (
    <Box
        sx={{
            position: 'fixed',
            top: 0,
            left: `${left}%`,
            width: size,
            height: size * 1.5,
            bgcolor: color,
            borderRadius: '2px',
            animation: `${confettiFall} ${duration}s ease-in-out ${delay}s infinite`,
            zIndex: 9999,
            pointerEvents: 'none',
        }}
    />
);

const Confetti = () => {
    const pieces = useMemo(() =>
        Array.from({ length: 50 }, (_, i) => ({
            id: i,
            delay: Math.random() * 3,
            left: Math.random() * 100,
            color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
            size: 6 + Math.random() * 8,
            duration: 3 + Math.random() * 2,
        })),
        []);

    return (
        <>
            {pieces.map(piece => (
                <ConfettiPiece key={piece.id} {...piece} />
            ))}
        </>
    );
};

// =============================================================================
// CELEBRATION BANNER
// =============================================================================

interface CelebrationBannerProps {
    onClose: () => void;
}

const CelebrationBanner = ({ onClose }: CelebrationBannerProps) => (
    <Fade in timeout={800}>
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9998,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
            }}
            onClick={onClose}
        >
            <Card
                sx={{
                    p: 5,
                    maxWidth: 500,
                    mx: 2,
                    textAlign: 'center',
                    background: theme => theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 107, 107, 0.2) 50%, rgba(78, 205, 196, 0.2) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 107, 107, 0.3) 50%, rgba(78, 205, 196, 0.3) 100%)',
                    border: '2px solid',
                    borderColor: 'warning.main',
                    animation: `${celebratePulse} 2s ease-in-out infinite`,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                }}
                onClick={e => e.stopPropagation()}
            >
                <EmojiEventsIcon
                    sx={{
                        fontSize: 80,
                        color: 'warning.main',
                        mb: 2,
                    }}
                />
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        background: 'linear-gradient(90deg, #FFD700, #FF6B6B, #4ECDC4, #FFD700)',
                        backgroundSize: '200% auto',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: `${shimmer} 3s linear infinite`,
                    }}
                >
                    🎉 Congratulations! 🎉
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
                    You&apos;ve mastered all the concepts behind Theta Sketch!
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ mb: 3, lineHeight: 1.6 }}>
                    You now understand order statistics, k-th smallest estimation, KMV algorithm,
                    set operations, and the complete Theta Sketch algorithm.
                </Typography>
                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{ mt: 1 }}
                >
                    Continue
                </Button>
            </Card>
        </Box>
    </Fade>
);

// =============================================================================
// STEP CARD COMPONENT
// =============================================================================

interface StepCardProps {
    step: RoadmapStep & { status: StepStatus };
    index: number;
    onStart: () => void;
}

const StepCard = ({ step, index, onStart }: StepCardProps) => {
    const isCompleted = step.status === 'completed';
    const isCurrent = step.status === 'current';
    const isLocked = step.status === 'locked';
    const isAccessible = isCompleted || isCurrent;

    return (
        <Fade in timeout={300 + index * 100}>
            <Card
                sx={{
                    opacity: isLocked ? 0.5 : 1,
                    transition: 'all 0.25s ease',
                    cursor: isAccessible ? 'pointer' : 'default',
                    '&:hover': isAccessible ? {
                        transform: 'translateX(8px)',
                    } : {},
                }}
            >
                <CardActionArea
                    onClick={isAccessible ? onStart : undefined}
                    disabled={!isAccessible}
                    sx={{ p: 0 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
                        {/* Left: Step number/status */}
                        <Box
                            sx={{
                                width: 64,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                py: 3,
                                bgcolor: isCompleted ? 'success.main' : isCurrent ? 'primary.main' : 'action.hover',
                                color: isCompleted || isCurrent ? 'white' : 'text.disabled',
                            }}
                        >
                            {isCompleted ? (
                                <CheckCircleIcon sx={{ fontSize: 28 }} />
                            ) : (
                                <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>
                                    {index + 1}
                                </Typography>
                            )}
                        </Box>

                        {/* Middle: Content */}
                        <Box sx={{ flex: 1, p: 3, }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                {/* Title */}
                                <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1.1rem' }}>
                                    {step.title}
                                </Typography>
                            </Box>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ lineHeight: 1.6 }}
                            >
                                {step.description}
                            </Typography>
                        </Box>

                        {/* Right: Duration + Action */}
                        <Box
                            sx={{
                                width: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                py: 3,
                                px: 2,
                                borderLeft: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ mb: 1 }}
                            >
                                {step.duration}
                            </Typography>

                            {isCurrent && (
                                <PlayArrowIcon
                                    sx={{
                                        color: 'primary.main',
                                        fontSize: 24,
                                    }}
                                />
                            )}
                            {isCompleted && (
                                <VisibilityIcon
                                    sx={{
                                        color: 'success.main',
                                        fontSize: 22,
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                </CardActionArea>
            </Card>
        </Fade>
    );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const ThetaSketchRoadmap = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const { getStepsWithStatus, resetProgress } = useThetaSketchProgress();

    // Get steps with dynamic status
    const roadmapSteps = getStepsWithStatus();

    const completedCount = roadmapSteps.filter(s => s.status === 'completed').length;
    const totalCount = roadmapSteps.length;
    const isAllCompleted = completedCount === totalCount;
    const currentStep = roadmapSteps.find(s => s.status === 'current');

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    // Show celebration when all steps are completed
    useEffect(() => {
        if (isAllCompleted) {
            setShowCelebration(true);
        }
    }, [isAllCompleted]);

    const handleStart = (step: RoadmapStep & { status: StepStatus }) => {
        if (step.route) {
            navigate(step.route);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                position: 'relative',
                pt: { xs: 5, md: 5 },
                px: { xs: 2, md: 4 },
            }}
        >
            {/* Confetti when celebration is shown */}
            {showCelebration && <Confetti />}

            {/* Celebration Banner (floating overlay) */}
            {showCelebration && <CelebrationBanner onClose={() => setShowCelebration(false)} />}

            {/* Content */}
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: 'auto',
                    position: 'relative',
                    zIndex: 10,
                }}
            >

                {/* Header */}
                <Fade in={isLoaded} timeout={400}>
                    <Box sx={{ mb: 6 }}>
                        {/* Back link */}
                        <Button
                            variant="text"
                            size="small"
                            onClick={() => navigate('/theta-sketch')}
                            sx={{
                                mb: 3,
                                color: 'text.secondary',
                                '&:hover': { color: 'text.primary' },
                            }}
                        >
                            ← Back to Theta Sketch
                        </Button>

                        {/* Title */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Typography
                                sx={{
                                    fontSize: '2.5rem',
                                    fontWeight: 300,
                                    fontFamily: '"JetBrains Mono", monospace',
                                    color: 'primary.main',
                                }}
                            >
                                θ
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '1.8rem', md: '2.2rem' },
                                }}
                            >
                                Theta Sketch
                            </Typography>
                        </Box>

                        {/* Subtitle */}
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7, mb: 3 }}
                        >
                            Learn the math behind Theta Sketch step by step. From order statistics
                            to the complete algorithm.
                        </Typography>

                        {/* Progress */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    maxWidth: 200,
                                    height: 4,
                                    bgcolor: 'action.hover',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: `${(completedCount / totalCount) * 100}%`,
                                        height: '100%',
                                        bgcolor: 'success.main',
                                        transition: 'width 0.3s ease',
                                    }}
                                />
                            </Box>
                            <Typography variant="caption" color="text.secondary">
                                {completedCount} / {totalCount} completed
                            </Typography>
                            {completedCount > 0 && (
                                <Button
                                    variant="text"
                                    size="small"
                                    startIcon={<RestartAltIcon sx={{ fontSize: 16 }} />}
                                    onClick={resetProgress}
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: '0.75rem',
                                        '&:hover': { color: 'error.main' },
                                    }}
                                >
                                    Reset
                                </Button>
                            )}
                        </Box>
                    </Box>
                </Fade>

                {/* Steps */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {roadmapSteps.map((step, index) => (
                        <StepCard
                            key={step.id}
                            step={step}
                            index={index}
                            onStart={() => handleStart(step)}
                        />
                    ))}
                </Box>

                {/* Current Step Button */}
                {currentStep && (
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => navigate(currentStep.route)}
                            sx={{
                                px: 4,
                                py: 1.5,
                                fontWeight: 600,
                            }}
                        >
                            Continue: {currentStep.title}
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ThetaSketchRoadmap;
