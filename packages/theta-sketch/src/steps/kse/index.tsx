import React, { useCallback, useRef, useEffect } from 'react';
import { at, type TimelineEvent } from 'obelus';
import { createDualRenderer, createOrthographicCamera } from "../../utils/threeUtils";
import { buildAnimateTimeline } from 'obelus-gsap-animator';
import { useThreeContainer } from "../../hooks/useThreeContainer";
import { DualScene, latex, type TimelineSceneThree, render, axis, text } from 'obelus-three-render';
import { AnimationController } from "../../utils/animation-controller";
import { ORDER_STATISTICS_TO_KMV_FORMULAS } from './order-statistics-to-kth-smallest-estimation-latex';
import StepTitle from '@alchemist/theta-sketch/components/StepTitle';
import { axisStyle, textStyle, useSyncObelusTheme } from '../../theme/obelusTheme';
import TimelinePlayer from '@alchemist/theta-sketch/components/TimelinePlayer';
import { Container, Box, Typography, Fade } from '@mui/material';
import { useTheme } from '@alchemist/shared';
import { useThetaSketchProgress } from '../../contexts/ThetaSketchProgressContext';

// Narration for each timeline step
const STEP_NARRATIONS: Record<number, string> = {
    0: "Now let's see how to use order statistics to estimate the total number of samples.",
    1: "Starting with the order statistics formula: the expected value of the k-th smallest sample equals k over n plus 1.",
    2: "We define theta as the k-th smallest value.",
    3: "Substituting theta for the expected value.",
    4: "Now we can solve for n by rearranging the equation.",
    5: "Cross multiply to get n plus 1 equals k over theta.",
    6: "Subtract 1 from both sides to isolate n.",
    7: "This gives us the formula to estimate n from k and theta.",
    8: "Now let's see this in action with an axis from 0 to 1.",
    9: "The axis represents our sample space.",
    10: "With endpoints labeled 0 and 1.",
    11: "The first sample falls at one-third.",
    12: "The second sample falls at two-thirds.",
    13: "For the first sample, k equals 1.",
    14: "And theta equals one-third.",
    15: "Plugging into our formula: n equals 1 divided by one-third, minus 1, which equals 2.",
    16: "For the second sample, k equals 2.",
    17: "And theta equals two-thirds.",
    18: "Again, n equals 2 divided by two-thirds, minus 1, which also equals 2. Both estimates correctly tell us there are 2 samples!",
};

// Estimate speaking duration based on word count
const WORDS_PER_SECOND = 150 / 60;

function estimateNarrationDuration(text: string, rate: number = 1.0): number {
    const cleanedText = text.replace(/[.,!?;:'"()\-]/g, '');
    const wordCount = cleanedText.split(/\s+/).filter(w => w.length > 0).length;
    return wordCount / (WORDS_PER_SECOND * rate);
}

// Calculate step durations and cumulative start times
const STEP_DURATIONS: Record<number, number> = {};
const STEP_START_TIMES: Record<number, number> = {};

let cumulativeTime = 0;
Object.entries(STEP_NARRATIONS).forEach(([key, narration]) => {
    const stepIndex = parseInt(key);
    const duration = estimateNarrationDuration(narration);
    STEP_DURATIONS[stepIndex] = duration;
    STEP_START_TIMES[stepIndex] = cumulativeTime;
    cumulativeTime += duration;
});

const ANIMATION_DURATION = 0.8;

const latexes = ORDER_STATISTICS_TO_KMV_FORMULAS.map((formula, index) => {
    const top = window.innerHeight / 4 - window.innerHeight;
    const lineHeight: number = window.innerHeight / 2 / ORDER_STATISTICS_TO_KMV_FORMULAS.length;
    const y = top - (index * lineHeight);
    return latex(`formula_${index}`, formula, { y }, textStyle);
});

// Helper to get step start time
const t = (step: number) => STEP_START_TIMES[step] ?? 0;
const d = ANIMATION_DURATION;

const displayLatexesSteps: TimelineEvent[] = latexes.map((_, index) => {
    // Steps 1-7 for displaying formulas
    return at(t(index + 1)).animate(`formula_${index}`, { position: { y: `+=${window.innerHeight}` } }, { duration: d });
});

const moveLatexesToLeftSteps: TimelineEvent[] = latexes.map((_, index) => {
    // Step 8 - move all formulas to the left
    const distance = window.innerWidth / 4;
    return at(t(8)).animate(`formula_${index}`, { position: { x: `-=${distance}` } }, { duration: d });
});

const ONE_THIRD_N_LATEX = `
n = \\frac{k}{\\theta} - 1
= \\frac{1}{\\frac{1}{3}} - 1
= 1 \\times {\\frac{3}{1}} - 1
= 3 - 1
= 2
`;

const TWO_THIRDS_N_LATEX = `
n = \\frac{k}{\\theta} - 1
= \\frac{2}{\\frac{2}{3}} - 1
= 2 \\times {\\frac{3}{2}} - 1
= 3 - 1
= 2
`;

const buildAxis = () => {
    const y = window.innerHeight / 16 * 3 - window.innerHeight;
    const start = { x: 0, y: y, z: 0, };
    const end = { x: window.innerWidth / 8 * 3, y: y, z: 0, };
    const axisLine = axis("axis", start, end, { ...axisStyle, dotCount: 4 });
    const axisStart = text("axis_start", "0", { ...start, y: y - 15 }, textStyle);
    const axisEnd = text("axis_end", "1", { ...end, y: y - 15 }, textStyle);

    const oneThird = latex("one_third", "\\frac{1}{3}", { ...start, x: window.innerWidth / 8, y: y - 35 }, textStyle);
    const oneThirdK = latex("one_third_k", "k = 1", { ...start, x: window.innerWidth / 8, y: y - 80 }, textStyle);
    const oneThirdTheta = latex("one_third_theta", "\\theta = \\frac{1}{3}", { ...start, x: window.innerWidth / 8, y: y - 120 }, textStyle);
    const oneThirdN = latex("one_third_n", ONE_THIRD_N_LATEX, { ...start, x: window.innerWidth / 16 * 3, y: y - 200 }, textStyle);

    const twoThirds = latex("two_thirds", "\\frac{2}{3}", { ...start, x: window.innerWidth / 8 * 2, y: y - 35 }, textStyle);
    const twoThirdsK = latex("two_thirds_k", "k = 2", { ...start, x: window.innerWidth / 8 * 2, y: y - 80 }, textStyle);
    const twoThirdsTheta = latex("two_thirds_theta", "\\theta = \\frac{2}{3}", { ...start, x: window.innerWidth / 8 * 2, y: y - 120 }, textStyle);
    const twoThirdsN = latex("two_thirds_n", TWO_THIRDS_N_LATEX, { ...start, x: window.innerWidth / 16 * 3, y: y - 280 }, textStyle);
    return [axisLine, axisStart, axisEnd, oneThird, twoThirds, oneThirdK, oneThirdTheta, oneThirdN, twoThirdsK, twoThirdsTheta, twoThirdsN];
}

const axisStepIds = ["axis", "axis_start", "axis_end", "one_third", "two_thirds"];
const moveAxisSteps = (): TimelineEvent[] => {
    // Steps 8-12: Show axis and first samples
    return axisStepIds.map((id, index) => at(t(8 + index)).animate(id, { position: { y: `+=${window.innerHeight}` } }, { duration: d }));
};

const moveMarks = (): TimelineEvent[] => {
    // Steps 13-18: Show k, theta, and n calculations
    const ids = ["one_third_k", "one_third_theta", "one_third_n", "two_thirds_k", "two_thirds_theta", "two_thirds_n"];
    return ids.map((id, index) => at(t(13 + index)).animate(id, { position: { y: `+=${window.innerHeight}` } }, { duration: d }));
};

const stepScene: TimelineSceneThree = {
    objects: [
        ...latexes,
        ...buildAxis(),
    ],
    timeline: [
        ...displayLatexesSteps,
        ...moveLatexesToLeftSteps,
        ...moveAxisSteps(),
        ...moveMarks(),
    ],
}

const renderer = createDualRenderer();
const camera = createOrthographicCamera();
const scene = new DualScene();
const animationController = new AnimationController(renderer, scene, camera);

const record = render(stepScene.objects, scene as any);
let timeline = buildAnimateTimeline(
    stepScene.timeline,
    record,
    animationController.startAnimation,
    animationController.stopAnimation
);

function KmvPageContent() {
    const { completeStep, isStepCompleted } = useThetaSketchProgress();
    const [currentNarration, setCurrentNarration] = React.useState<string>('');
    const { mode } = useTheme();
    
    const lastSpokenStepRef = useRef<number>(-1);

    // Sync Three.js materials with the current global theme
    useSyncObelusTheme();

    const { containerRef } = useThreeContainer(renderer);

    // Speak narration for a step
    const speakStep = useCallback((stepIndex: number) => {
        const narration = STEP_NARRATIONS[stepIndex];
        if (narration && stepIndex !== lastSpokenStepRef.current) {
            lastSpokenStepRef.current = stepIndex;
            setCurrentNarration(narration);

            speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(narration);

            const googleVoice = speechSynthesis.getVoices().find(v => v.name.includes('Google US English'));
            if (googleVoice) {
                utterance.voice = googleVoice;
            }

            utterance.rate = 1.0;
            utterance.onend = () => {
                setCurrentNarration('');
            };
            speechSynthesis.speak(utterance);
        }
    }, []);

    // Add callbacks to timeline for each step
    useEffect(() => {
        if (!timeline) return;

        Object.keys(STEP_NARRATIONS).forEach((stepKey) => {
            const stepIndex = parseInt(stepKey);
            const startTime = STEP_START_TIMES[stepIndex] ?? 0;
            timeline.call(() => speakStep(stepIndex), [], startTime);
        });

        return () => {
            speechSynthesis.cancel();
        };
    }, [speakStep]);

    React.useEffect(() => {
        return () => {
            animationController.stopAnimation();
            speechSynthesis.cancel();
        };
    }, []);

    // Re-render the scene when mode changes to apply new colors
    React.useEffect(() => {
        animationController.renderAnimationOnce();
    }, [mode]);

    return (
        <>
            <StepTitle title="K-th Smallest Estimation" />

            {/* Subtitle Display */}
            <Fade in={!!currentNarration}>
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: window.innerHeight / 12 + 140,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        maxWidth: '80%',
                        zIndex: 1001,
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.primary',
                            px: 3,
                            py: 1.5,
                        }}
                    >
                        {currentNarration}
                    </Typography>
                </Box>
            </Fade>

            <Container
                maxWidth="md"
                sx={{
                    position: 'fixed',
                    bottom: window.innerHeight / 12,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                }}
            >
                <TimelinePlayer
                    timeline={timeline}
                    showNextButton={true}
                    nextPagePath="/theta-sketch/roadmap"
                    nextPageTitle="Go to Roadmap"
                    enableNextButton={isStepCompleted('kth-smallest')}
                    onStart={() => {
                        animationController.startAnimation();
                    }}
                    onPause={() => {
                        animationController.stopAnimation();
                        speechSynthesis.pause();
                    }}
                    onComplete={() => {
                        animationController.stopAnimation();
                        completeStep('kth-smallest');
                    }}
                />
            </Container>

            <div ref={containerRef} style={{ width: '100vw', height: '100vh', }} />
        </>
    );
}

export default KmvPageContent;
