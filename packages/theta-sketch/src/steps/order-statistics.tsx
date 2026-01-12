import React from 'react';
import { at } from 'obelus';
import { createDualRenderer, createOrthographicCamera } from "../utils/threeUtils";
import { buildAnimateTimeline } from 'obelus-gsap-player';
import { useThreeContainer } from "../hooks/useThreeContainer";
import { render, axis, latex, ring, text, DualScene } from 'obelus-three-render';
import { type Animatable } from "obelus";
import { AnimationController } from "../utils/animation-controller";
import NextPageButton from '../components/NextPageButton';
import StepTitle from '../components/StepTitle';
import { axisStyle, textStyle, ringStyle, useSyncObelusTheme } from '../theme/obelusTheme';
import { useTheme } from '@alchemist/shared';
import { Container } from '@mui/material';
import TimelinePlayer from '../components/TimelinePlayer';
import { Object3D } from 'three';

const scaleYAdjector = -35;
const scaleNumeratorYAdjector = scaleYAdjector + 15;
const scaleDenominatorYAdjector = scaleYAdjector - 13;

const z = 0;
const height = window.innerHeight / 6;
const width = Math.min(window.innerWidth / 4, 2000 / 4);
const scale0 = (y: number) => ({ x: -width, y, z });
const scale1 = (y: number) => ({ x: width, y, z });

function scaleK(dotCount: number, k: number) {
    const startX = 0 - width;
    const endX = width;

    const axisWidth = endX - startX;
    const step = axisWidth / (dotCount + 1);
    const x = startX + step * k;
    return x;
}

const OrderStatisticsExpression = `\\mathbb{E}[X_{(k)}] = \\frac{k}{n+1}`;
const BetaDistributionExpectedValueExpression = `
\\mathbb{E}[\\text{Beta}(\\alpha, \\beta)] = \\frac{\\alpha}{\\alpha + \\beta}

\\quad \\Rightarrow \\quad
\\mathbb{E}[X_{(k)}] = \\frac{k}{k + (n - k + 1)}

\\quad\\Rightarrow \\quad
\\mathbb{E}[X_{(k)}] = \\frac{k}{n + 1}
`;

const kTh = (k: number, n: string) => `\\frac{${k}}{\\text{${n}}}`;

const stepSceneObjects: Animatable<Object3D>[] = [
    latex("order_statistics_expression", OrderStatisticsExpression, { x: scaleK(1, 1), y: height + height / 2 - window.innerHeight, z }, { ...textStyle, fontSize: "20px" }),

    axis("axis_1", { x: -width, y: height - window.innerHeight, z }, { x: width, y: height - window.innerHeight, z }, { ...axisStyle, dotCount: 3 }),
    text("axis_1_start", "0", scale0(height + scaleYAdjector - window.innerHeight), textStyle),
    text("axis_1_end", "1", scale1(height + scaleYAdjector - window.innerHeight), textStyle),
    latex("axis_1_k_1", "\\frac{1}{2}", { x: scaleK(1, 1), y: height + scaleYAdjector - window.innerHeight, z }, textStyle),

    axis("axis_2", { x: -width, y: 0 - window.innerHeight, z }, { x: width, y: 0 - window.innerHeight, z }, { ...axisStyle, dotCount: 4 }),
    text("axis_2_start", "0", scale0(0 + scaleYAdjector - window.innerHeight), textStyle),
    text("axis_2_end", "1", scale1(0 + scaleYAdjector - window.innerHeight), textStyle),
    latex("axis_2_k_1", "\\frac{1}{3}", { x: scaleK(2, 1), y: 0 + scaleYAdjector - window.innerHeight, z }, textStyle),
    latex("axis_2_k_2", "\\frac{2}{3}", { x: scaleK(2, 2), y: 0 + scaleYAdjector - window.innerHeight, z }, textStyle),

    // expression
    latex("axis_1_k_1_expression_1", `= ${kTh(1, '1 + 1')}`, { x: scaleK(1, 1) + 50, y: height + scaleYAdjector - window.innerHeight, z }, textStyle),
    latex("axis_2_k_1_expression_1", `= ${kTh(1, '2 + 1')}`, { x: scaleK(2, 1) + 50, y: 0 + scaleYAdjector - window.innerHeight, z }, textStyle),
    latex("axis_2_k_2_expression_1", `= ${kTh(2, '2 + 1')}`, { x: scaleK(2, 2) + 50, y: 0 + scaleYAdjector - window.innerHeight, z }, textStyle),

    // rings
    ring("axis_1_k_1_ring_1", 10, 1.5, { x: scaleK(1, 1) + 43, y: height + scaleDenominatorYAdjector - window.innerHeight, z }, ringStyle),
    latex("axis_1_k_1_ring_1_k", "n = 1", { x: scaleK(1, 1) + 115, y: height + scaleDenominatorYAdjector - window.innerHeight, z }, textStyle),
    ring("axis_1_k_1_ring_2", 10, 1.5, { x: scaleK(1, 1) + 60, y: height + scaleNumeratorYAdjector - window.innerHeight, z }, ringStyle),
    latex("axis_1_k_1_ring_2_k", "k = 1", { x: scaleK(1, 1) + 115, y: height + scaleNumeratorYAdjector - 5 - window.innerHeight, z }, textStyle),

    ring("axis_2_k_1_ring_1", 10, 1, { x: scaleK(2, 1) + 43, y: 0 + scaleDenominatorYAdjector - window.innerHeight, z }, ringStyle),
    latex("axis_2_k_1_ring_1_k", "n = 2", { x: scaleK(2, 1) + 115, y: 0 + scaleDenominatorYAdjector - window.innerHeight, z }, textStyle),
    ring("axis_2_k_1_ring_2", 10, 1, { x: scaleK(2, 1) + 60, y: 0 + scaleNumeratorYAdjector - window.innerHeight, z }, ringStyle),
    latex("axis_2_k_1_ring_2_k", "k = 1", { x: scaleK(2, 1) + 115, y: 0 + scaleNumeratorYAdjector - 5 - window.innerHeight, z }, textStyle),
    ring("axis_2_k_2_ring_1", 10, 1, { x: scaleK(2, 2) + 43, y: 0 + scaleDenominatorYAdjector - window.innerHeight, z }, ringStyle),
    latex("axis_2_k_2_ring_1_k", "n = 2", { x: scaleK(2, 2) + 115, y: 0 + scaleDenominatorYAdjector - window.innerHeight, z }, textStyle),
    ring("axis_2_k_2_ring_2", 10, 1, { x: scaleK(2, 2) + 60, y: 0 + scaleNumeratorYAdjector - window.innerHeight, z }, ringStyle),
    latex("axis_2_k_2_ring_2_k", "k = 2", { x: scaleK(2, 2) + 115, y: 0 + scaleNumeratorYAdjector - 5 - window.innerHeight, z }, textStyle),

    latex("beta_distribution_expected_value_expression", BetaDistributionExpectedValueExpression, { x: scaleK(1, 1), y: 0 - height - window.innerHeight, z }, { ...textStyle })
];

const timelineSteps = [
    at(0).animate("axis_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(0).animate("axis_1_start", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(0).animate("axis_1_end", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(1).animate("axis_1_k_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(2).animate("axis_2", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(2).animate("axis_2_start", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(2).animate("axis_2_end", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(3).animate("axis_2_k_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(4).animate("axis_2_k_2", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    // expression
    at(5).animate("axis_1_k_1_expression_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(6).animate("axis_2_k_1_expression_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(7).animate("axis_2_k_2_expression_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    // rings axis_1
    at(8).animate("axis_1_k_1_ring_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(8).animate("axis_1_k_1_ring_1_k", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(9).animate("axis_1_k_1_ring_2", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(9).animate("axis_1_k_1_ring_2_k", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    // rings axis_2
    at(10).animate("axis_2_k_1_ring_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(10).animate("axis_2_k_1_ring_1_k", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(11).animate("axis_2_k_1_ring_2", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(11).animate("axis_2_k_1_ring_2_k", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(12).animate("axis_2_k_2_ring_1", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(12).animate("axis_2_k_2_ring_1_k", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    at(13).animate("axis_2_k_2_ring_2", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(13).animate("axis_2_k_2_ring_2_k", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),

    // equations
    at(14).animate("order_statistics_expression", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
    at(15).animate("beta_distribution_expected_value_expression", { position: { y: `+=${window.innerHeight}` } }, { duration: 1 }),
];

const renderer = createDualRenderer();
const scene = new DualScene();
const camera = createOrthographicCamera();
const animationController = new AnimationController(renderer, scene, camera);

const records = render(stepSceneObjects, scene as any);
let timelinePlayer = buildAnimateTimeline(
    timelineSteps,
    records,
    animationController.startAnimation,
    animationController.stopAnimation
);

let componentLevelShowNextPageButton: boolean = false;

function OrderStatisticsPageContent() {
    const [showNextPageButton, setShowNextPageButton] = React.useState(false);
    const { mode } = useTheme();

    // Sync Three.js materials with the current global theme
    useSyncObelusTheme();

    const { containerRef } = useThreeContainer(renderer);

    // Re-render the scene when mode changes to apply new colors
    React.useEffect(() => {
        animationController.renderAnimationOnce();
    }, [mode]);

    React.useEffect(() => {
        setShowNextPageButton(componentLevelShowNextPageButton);
        return () => {
            animationController.stopAnimation();
        };
    }, []);

    return (
        <>
            <StepTitle title="Order Statistics" />
            {showNextPageButton && <NextPageButton nextPagePath="/theta-sketch/kth-smallest" title="Go to Kth Smallest Estimation" />}

            <Container
                maxWidth="md"
                sx={{
                    position: 'fixed',
                    bottom: `${100 / 12}%`,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                }}
            >
                <TimelinePlayer
                    timeline={timelinePlayer}
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
                    }}
                />
            </Container>

            <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />
        </>
    );
}

export default OrderStatisticsPageContent
