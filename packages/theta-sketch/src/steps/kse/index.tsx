import React from 'react';
import { at, type TimelineEvent } from 'obelus';
import { createDualRenderer, createOrthographicCamera } from "../../utils/threeUtils";
import { buildAnimateTimeline } from 'obelus-gsap-animator';
import { useThreeContainer } from "../../hooks/useThreeContainer";
import { DualScene, latex, type TimelineSceneThree, render, axis, text } from 'obelus-three-render';
import { AnimationController } from "../../utils/animation-controller";
import { ORDER_STATISTICS_TO_KMV_FORMULAS } from './order-statistics-to-kth-smallest-estimation-latex';
import NextPageButton from '../../components/NextPageButton';
import StepTitle from '@alchemist/theta-sketch/components/StepTitle';
import { axisStyle, textStyle, useSyncObelusTheme } from '../../theme/obelusTheme';
import TimelinePlayer from '@alchemist/theta-sketch/components/TimelinePlayer';
import { Container } from '@mui/material';
import { useTheme } from '@alchemist/shared';
import { useThetaSketchProgress } from '../../contexts/ThetaSketchProgressContext';

const latexes = ORDER_STATISTICS_TO_KMV_FORMULAS.map((formula, index) => {
    const top = window.innerHeight / 4 - window.innerHeight;
    const lineHeight: number = window.innerHeight / 2 / ORDER_STATISTICS_TO_KMV_FORMULAS.length;
    const y = top - (index * lineHeight);
    return latex(`formula_${index}`, formula, { y }, textStyle);
});

const displayLatexesSteps: TimelineEvent[] = latexes.map((_, index) => {
    return at(index + 1).animate(`formula_${index}`, { position: { y: `+=${window.innerHeight}` } }, { duration: 1 });
});

const moveLatexesToLeftSteps: TimelineEvent[] = latexes.map((_, index) => {
    const start = latexes.length;
    const distance = window.innerWidth / 4;
    return at(start + 1).animate(`formula_${index}`, { position: { x: `-=${distance}` } }, { duration: 1 });
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
const moveAxisSteps = (start: number): TimelineEvent[] => {
    return axisStepIds.map((id, index) => at(start + index + 1).animate(id, { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }));
};

const moveMarks = (start: number): TimelineEvent[] => {
    const ids = ["one_third_k", "one_third_theta", "one_third_n", "two_thirds_k", "two_thirds_theta", "two_thirds_n"];
    return ids.map((id, index) => at(start + index + 1).animate(id, { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }));
};

const stepScene: TimelineSceneThree = {
    objects: [
        ...latexes,
        ...buildAxis(),
    ],
    timeline: [
        ...displayLatexesSteps,
        ...moveLatexesToLeftSteps,
        ...moveAxisSteps(latexes.length),
        ...moveMarks(latexes.length + axisStepIds.length + 1),
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

let componentLevelShowNextPageButton: boolean = false;

function KmvPageContent() {
    const { completeStep } = useThetaSketchProgress();
    const [showNextPageButton, setShowNextPageButton] = React.useState(false);
    const { mode } = useTheme();
    // Sync Three.js materials with the current global theme
    useSyncObelusTheme();

    const { containerRef } = useThreeContainer(renderer);

    React.useEffect(() => {
        setShowNextPageButton(componentLevelShowNextPageButton);
        return () => {
            animationController.stopAnimation();
        };
    }, []);

    // Re-render the scene when mode changes to apply new colors
    React.useEffect(() => {
        animationController.renderAnimationOnce();
    }, [mode]);


    return (
        <>
            <StepTitle title="K-th Smallest Estimation" />
            {showNextPageButton && <NextPageButton nextPagePath="/theta-sketch/roadmap" title="Go to Roadmap" />}

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
                    onStart={() => {
                        animationController.startAnimation();
                    }}
                    onPause={() => {
                        animationController.stopAnimation();
                    }}
                    onComplete={() => {
                        setShowNextPageButton(true);
                        componentLevelShowNextPageButton = true;
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
