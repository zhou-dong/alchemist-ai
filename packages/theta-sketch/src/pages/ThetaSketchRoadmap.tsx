import { Box, Typography, Card, CardActionArea, Fade, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlowOrbs } from '@alchemist/shared';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EastIcon from '@mui/icons-material/East';

// =============================================================================
// ROADMAP DATA
// =============================================================================

interface RoadmapStep {
    id: string;
    title: string;
    description: string;
    duration: string;
    status: 'completed' | 'current' | 'locked';
    route?: string;
}

const roadmapSteps: RoadmapStep[] = [
    {
        id: 'order-statistics',
        title: 'Order Statistics',
        description: 'Understanding sorted values and their properties. The foundation for minimum-based estimation.',
        duration: '~5 min',
        status: 'current',
        route: '/theta-sketch/learn/order-statistics',
    },
    {
        id: 'kth-smallest',
        title: 'K-th Smallest Estimation',
        description: 'How the k-th smallest value relates to the total count. The key insight behind KMV.',
        duration: '~8 min',
        status: 'locked',
        route: '/theta-sketch/learn/kth-smallest',
    },
    {
        id: 'kmv',
        title: 'KMV Algorithm',
        description: 'K Minimum Values - tracking the k smallest hashed values to estimate cardinality.',
        duration: '~10 min',
        status: 'locked',
        route: '/theta-sketch/learn/kmv',
    },
    {
        id: 'set-operations',
        title: 'Set Operations',
        description: 'Union, intersection, and difference. Combining sketches while preserving accuracy.',
        duration: '~8 min',
        status: 'locked',
        route: '/theta-sketch/learn/set-operations',
    },
    {
        id: 'theta-sketch',
        title: 'Theta Sketch',
        description: 'The complete algorithm - combining KMV with theta for efficient set operations.',
        duration: '~12 min',
        status: 'locked',
        route: '/theta-sketch/learn/theta-sketch',
    },
];

// =============================================================================
// STEP CARD COMPONENT
// =============================================================================

interface StepCardProps {
    step: RoadmapStep;
    index: number;
    onStart: () => void;
}

const StepCard = ({ step, index, onStart }: StepCardProps) => {
    const isCompleted = step.status === 'completed';
    const isCurrent = step.status === 'current';
    const isLocked = step.status === 'locked';

    return (
        <Fade in timeout={300 + index * 100}>
            <Card
                sx={{
                    opacity: isLocked ? 0.5 : 1,
                    transition: 'all 0.25s ease',
                    cursor: isCurrent ? 'pointer' : 'default',
                    '&:hover': isCurrent ? {
                        transform: 'translateX(8px)',
                    } : {},
                }}
            >
                <CardActionArea
                    onClick={isCurrent ? onStart : undefined}
                    disabled={!isCurrent}
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

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const completedCount = roadmapSteps.filter(s => s.status === 'completed').length;
    const totalCount = roadmapSteps.length;
    const currentStep = roadmapSteps.find(s => s.status === 'current');

    const handleStart = (step: RoadmapStep) => {
        if (step.route) {
            navigate(step.route);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                position: 'relative',
                pt: { xs: 10, md: 12 },
                pb: 8,
                px: { xs: 3, md: 6 },
            }}
        >
            {/* Background */}
            <GlowOrbs preset="minimal" />

            {/* Content */}
            <Box
                sx={{
                    maxWidth: '80%',
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

                {/* Start Button */}
                {currentStep && (
                    <Fade in={isLoaded} timeout={800}>
                        <Box sx={{ mt: 6, textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                size="large"
                                endIcon={<EastIcon />}
                                onClick={() => handleStart(currentStep)}
                                sx={{ px: 4 }}
                            >
                                Start: {currentStep.title}
                            </Button>
                        </Box>
                    </Fade>
                )}
            </Box>
        </Box>
    );
};

export default ThetaSketchRoadmap;

