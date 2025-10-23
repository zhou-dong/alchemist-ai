import { Box, Typography, Slider, Button, Paper, Chip } from '@mui/material';
import { useState, useEffect } from 'react';

interface PerceptronData {
    inputs: number[];
    weights: number[];
    bias: number;
    output: number;
    activated: boolean;
}

const Perceptron = () => {
    const [perceptronData, setPerceptronData] = useState<PerceptronData>({
        inputs: [1, 0, 1],
        weights: [0.5, -0.3, 0.8],
        bias: 0.2,
        output: 0,
        activated: false
    });

    const [isAnimating, setIsAnimating] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const calculatePerceptron = () => {
        const weightedSum = perceptronData.inputs.reduce((sum, input, index) => 
            sum + (input * perceptronData.weights[index]), 0) + perceptronData.bias;
        
        const activated = weightedSum > 0;
        
        setPerceptronData(prev => ({
            ...prev,
            output: weightedSum,
            activated
        }));
    };

    useEffect(() => {
        calculatePerceptron();
    }, [perceptronData.inputs, perceptronData.weights, perceptronData.bias]);

    const animateCalculation = () => {
        setIsAnimating(true);
        setCurrentStep(0);
        
        const steps = [
            () => setCurrentStep(1), // Show inputs
            () => setCurrentStep(2), // Show weights
            () => setCurrentStep(3), // Show multiplication
            () => setCurrentStep(4), // Show sum
            () => setCurrentStep(5), // Show bias
            () => setCurrentStep(6), // Show activation
        ];

        steps.forEach((step, index) => {
            setTimeout(step, index * 1000);
        });

        setTimeout(() => {
            setIsAnimating(false);
            setCurrentStep(0);
        }, steps.length * 1000);
    };

    const updateInput = (index: number, value: number) => {
        setPerceptronData(prev => ({
            ...prev,
            inputs: prev.inputs.map((input, i) => i === index ? value : input)
        }));
    };

    const updateWeight = (index: number, value: number) => {
        setPerceptronData(prev => ({
            ...prev,
            weights: prev.weights.map((weight, i) => i === index ? value : weight)
        }));
    };

    const updateBias = (value: number) => {
        setPerceptronData(prev => ({
            ...prev,
            bias: value
        }));
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `
                    linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%)
                `,
                position: 'relative',
                overflow: 'hidden',
                padding: 4,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 50% 10%, rgba(236, 72, 153, 0.08) 0%, transparent 60%),
                        radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 90% 30%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)
                    `,
                    zIndex: 0,
                    animation: 'gradientShift 8s ease-in-out infinite'
                }
            }}
        >
            {/* Header */}
            <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', mb: 4 }}>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold',
                        mb: 2
                    }}
                >
                    Perceptron Visualization
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Interactive Neural Network Building Block
                </Typography>
            </Box>

            {/* Main Content */}
            <Box sx={{ display: 'flex', gap: 4, position: 'relative', zIndex: 2 }}>
                {/* Perceptron Visualization */}
                <Paper 
                    elevation={8}
                    sx={{ 
                        flex: 1, 
                        p: 4, 
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3
                    }}
                >
                    <Typography variant="h5" sx={{ color: 'white', mb: 3, textAlign: 'center' }}>
                        Perceptron Structure
                    </Typography>
                    
                    {/* SVG Perceptron Diagram */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, width: '100%' }}>
                        <svg
                            width="1200"
                            height="600"
                            viewBox="0 0 1200 600"
                            style={{ 
                                background: 'rgba(0,0,0,0.1)', 
                                borderRadius: '12px', 
                                padding: '30px',
                                maxWidth: '100%',
                                height: 'auto'
                            }}
                        >
                            {/* Input Layer */}
                            <g>
                                {perceptronData.inputs.map((input, index) => (
                                    <g key={`input-${index}`}>
                                        {/* Input Node */}
                                        <circle
                                            cx={150}
                                            cy={150 + index * 120}
                                            r="45"
                                            fill={currentStep === 1 ? 
                                                'url(#inputGradient)' : 
                                                'url(#defaultGradient)'
                                            }
                                            stroke={currentStep === 1 ? '#6366F1' : '#4A5568'}
                                            strokeWidth={currentStep === 1 ? '3' : '2'}
                                            style={{
                                                filter: currentStep === 1 ? 
                                                    'drop-shadow(0 0 15px rgba(99, 102, 241, 0.8))' : 
                                                    'drop-shadow(0 0 8px rgba(99, 102, 241, 0.3))',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                        {/* Input Value */}
                                        <text
                                            x={150}
                                            y={150 + index * 120 + 8}
                                            textAnchor="middle"
                                            fill="white"
                                            fontSize="24"
                                            fontWeight="bold"
                                        >
                                            {input}
                                        </text>
                                        {/* Input Label */}
                                        <text
                                            x={150}
                                            y={150 + index * 120 - 30}
                                            textAnchor="middle"
                                            fill="rgba(255,255,255,0.8)"
                                            fontSize="18"
                                        >
                                            x{index + 1}
                                        </text>
                                    </g>
                                ))}
                            </g>

                            {/* Weight Lines and Labels */}
                            <g>
                                {perceptronData.inputs.map((_, index) => (
                                    <g key={`weight-${index}`}>
                                        {/* Weight Line */}
                                        <line
                                            x1={195}
                                            y1={150 + index * 120}
                                            x2={450}
                                            y2={300}
                                            stroke={currentStep === 2 ? '#8B5CF6' : '#6B7280'}
                                            strokeWidth={currentStep === 2 ? '3' : '2'}
                                            strokeDasharray={currentStep === 2 ? '0' : '5,5'}
                                            markerEnd="url(#arrowhead)"
                                            style={{
                                                filter: currentStep === 2 ? 
                                                    'drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))' : 
                                                    'drop-shadow(0 0 4px rgba(139, 92, 246, 0.3))',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                        {/* Weight Value */}
                                        <text
                                            x={322}
                                            y={225 + index * 60}
                                            textAnchor="middle"
                                            fill={currentStep === 2 ? '#8B5CF6' : 'rgba(255,255,255,0.7)'}
                                            fontSize="11"
                                            fontWeight="bold"
                                            style={{
                                                filter: currentStep === 2 ? 
                                                    'drop-shadow(0 0 4px rgba(139, 92, 246, 0.8))' : 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            w{index + 1}={perceptronData.weights[index].toFixed(1)}
                                        </text>
                                    </g>
                                ))}
                            </g>

                            {/* Summation Node */}
                            <g>
                                <circle
                                    cx={525}
                                    cy={300}
                                    r="60"
                                    fill={currentStep === 4 ? 
                                        'url(#sumGradient)' : 
                                        'url(#defaultGradient)'
                                    }
                                    stroke={currentStep === 4 ? '#F59E0B' : '#4A5568'}
                                    strokeWidth={currentStep === 4 ? '3' : '2'}
                                    style={{
                                        filter: currentStep === 4 ? 
                                            'drop-shadow(0 0 20px rgba(245, 158, 11, 0.8))' : 
                                            'drop-shadow(0 0 10px rgba(245, 158, 11, 0.3))',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <text
                                    x={525}
                                    y={292}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="24"
                                    fontWeight="bold"
                                >
                                    Σ
                                </text>
                                <text
                                    x={525}
                                    y={322}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="18"
                                >
                                    {perceptronData.output.toFixed(1)}
                                </text>
                            </g>

                            {/* Bias Connection */}
                            <g>
                                <line
                                    x1={600}
                                    y1={180}
                                    x2={525}
                                    y2={240}
                                    stroke={currentStep === 5 ? '#10B981' : '#6B7280'}
                                    strokeWidth={currentStep === 5 ? '3' : '2'}
                                    strokeDasharray={currentStep === 5 ? '0' : '5,5'}
                                    markerEnd="url(#arrowheadBias)"
                                    style={{
                                        filter: currentStep === 5 ? 
                                            'drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))' : 
                                            'drop-shadow(0 0 4px rgba(16, 185, 129, 0.3))',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <text
                                    x={600}
                                    y={180}
                                    textAnchor="middle"
                                    fill={currentStep === 5 ? '#10B981' : 'rgba(255,255,255,0.7)'}
                                    fontSize="11"
                                    fontWeight="bold"
                                    style={{
                                        filter: currentStep === 5 ? 
                                            'drop-shadow(0 0 4px rgba(16, 185, 129, 0.8))' : 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    b={perceptronData.bias.toFixed(1)}
                                </text>
                            </g>

                            {/* Activation Function */}
                            <g>
                                <rect
                                    x={630}
                                    y={240}
                                    width="120"
                                    height="120"
                                    rx="10"
                                    fill={currentStep === 6 ? 
                                        (perceptronData.activated ? 
                                            'url(#activatedGradient)' : 
                                            'url(#deactivatedGradient)') : 
                                        'url(#defaultGradient)'
                                    }
                                    stroke={currentStep === 6 ? 
                                        (perceptronData.activated ? '#10B981' : '#EF4444') : 
                                        '#4A5568'
                                    }
                                    strokeWidth={currentStep === 6 ? '3' : '2'}
                                    style={{
                                        filter: currentStep === 6 ? 
                                            `drop-shadow(0 0 20px ${perceptronData.activated ? 
                                                'rgba(16, 185, 129, 0.8)' : 
                                                'rgba(239, 68, 68, 0.8)'})` : 
                                            'drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                {/* Step Function Symbol */}
                                <path
                                    d="M 670 310 L 690 310 L 690 270 L 710 270"
                                    stroke="white"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <text
                                    x={690}
                                    y={340}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="18"
                                >
                                    {perceptronData.activated ? '1' : '0'}
                                </text>
                            </g>

                            {/* Output */}
                            <g>
                                <circle
                                    cx={900}
                                    cy={300}
                                    r="52"
                                    fill={currentStep === 6 ? 
                                        (perceptronData.activated ? 
                                            'url(#activatedGradient)' : 
                                            'url(#deactivatedGradient)') : 
                                        'url(#defaultGradient)'
                                    }
                                    stroke={currentStep === 6 ? 
                                        (perceptronData.activated ? '#10B981' : '#EF4444') : 
                                        '#4A5568'
                                    }
                                    strokeWidth={currentStep === 6 ? '3' : '2'}
                                    style={{
                                        filter: currentStep === 6 ? 
                                            `drop-shadow(0 0 20px ${perceptronData.activated ? 
                                                'rgba(16, 185, 129, 0.8)' : 
                                                'rgba(239, 68, 68, 0.8)'})` : 
                                            'drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                                <text
                                    x={900}
                                    y={308}
                                    textAnchor="middle"
                                    fill="white"
                                    fontSize="27"
                                    fontWeight="bold"
                                >
                                    {perceptronData.activated ? '1' : '0'}
                                </text>
                                <text
                                    x={900}
                                    y={240}
                                    textAnchor="middle"
                                    fill="rgba(255,255,255,0.8)"
                                    fontSize="21"
                                >
                                    Output
                                </text>
                            </g>

                            {/* Connection from Sum to Activation */}
                            <line
                                x1={585}
                                y1={300}
                                x2={630}
                                y2={300}
                                stroke={currentStep === 6 ? '#F59E0B' : '#6B7280'}
                                strokeWidth={currentStep === 6 ? '3' : '2'}
                                markerEnd="url(#arrowheadSum)"
                                style={{
                                    filter: currentStep === 6 ? 
                                        'drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))' : 
                                        'drop-shadow(0 0 4px rgba(245, 158, 11, 0.3))',
                                    transition: 'all 0.3s ease'
                                }}
                            />

                            {/* Connection from Activation to Output */}
                            <line
                                x1={750}
                                y1={300}
                                x2={848}
                                y2={300}
                                stroke={currentStep === 6 ? 
                                    (perceptronData.activated ? '#10B981' : '#EF4444') : 
                                    '#6B7280'
                                }
                                strokeWidth={currentStep === 6 ? '3' : '2'}
                                markerEnd="url(#arrowheadOutput)"
                                style={{
                                    filter: currentStep === 6 ? 
                                        `drop-shadow(0 0 8px ${perceptronData.activated ? 
                                            'rgba(16, 185, 129, 0.8)' : 
                                            'rgba(239, 68, 68, 0.8)'})` : 
                                        'drop-shadow(0 0 4px rgba(99, 102, 241, 0.3))',
                                    transition: 'all 0.3s ease'
                                }}
                            />

                            {/* Gradient Definitions */}
                            <defs>
                                <linearGradient id="inputGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#6366F1" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                                <linearGradient id="sumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#F59E0B" />
                                    <stop offset="100%" stopColor="#FBBF24" />
                                </linearGradient>
                                <linearGradient id="activatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#10B981" />
                                    <stop offset="100%" stopColor="#34D399" />
                                </linearGradient>
                                <linearGradient id="deactivatedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#EF4444" />
                                    <stop offset="100%" stopColor="#F87171" />
                                </linearGradient>
                                <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#1a1a2e" />
                                    <stop offset="100%" stopColor="#16213e" />
                                </linearGradient>
                                
                                {/* Arrow Markers */}
                                <marker
                                    id="arrowhead"
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="9"
                                    refY="3.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 10 3.5, 0 7"
                                        fill="#8B5CF6"
                                    />
                                </marker>
                                <marker
                                    id="arrowheadBias"
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="9"
                                    refY="3.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 10 3.5, 0 7"
                                        fill="#10B981"
                                    />
                                </marker>
                                <marker
                                    id="arrowheadSum"
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="9"
                                    refY="3.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 10 3.5, 0 7"
                                        fill="#F59E0B"
                                    />
                                </marker>
                                <marker
                                    id="arrowheadOutput"
                                    markerWidth="10"
                                    markerHeight="7"
                                    refX="9"
                                    refY="3.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 10 3.5, 0 7"
                                        fill="#EC4899"
                                    />
                                </marker>
                            </defs>
                        </svg>
                    </Box>


                    {/* Animation Button */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={animateCalculation}
                            disabled={isAnimating}
                            sx={{
                                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                                },
                                px: 4,
                                py: 1.5,
                                borderRadius: 3
                            }}
                        >
                            {isAnimating ? 'Animating...' : 'Animate Calculation'}
                        </Button>
                    </Box>
                </Paper>

                {/* Controls */}
                <Paper 
                    elevation={8}
                    sx={{ 
                        width: 300, 
                        p: 3, 
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 3
                    }}
                >
                    <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>
                        Interactive Controls
                    </Typography>

                    {/* Input Controls */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: 'white', mb: 2 }}>
                            Input Values
                        </Typography>
                        {perceptronData.inputs.map((input, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', mb: 1 }}>
                                    Input {index + 1}
                                </Typography>
                                <Slider
                                    value={input}
                                    onChange={(_, value) => updateInput(index, value as number)}
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    sx={{
                                        color: '#6366F1',
                                        '& .MuiSlider-thumb': {
                                            background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                                        }
                                    }}
                                />
                                <Typography sx={{ color: 'white', textAlign: 'center', mt: 1 }}>
                                    {input.toFixed(1)}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Weight Controls */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: 'white', mb: 2 }}>
                            Weights
                        </Typography>
                        {perceptronData.weights.map((weight, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', mb: 1 }}>
                                    Weight {index + 1}
                                </Typography>
                                <Slider
                                    value={weight}
                                    onChange={(_, value) => updateWeight(index, value as number)}
                                    min={-1}
                                    max={1}
                                    step={0.1}
                                    sx={{
                                        color: '#8B5CF6',
                                        '& .MuiSlider-thumb': {
                                            background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                                        }
                                    }}
                                />
                                <Typography sx={{ color: 'white', textAlign: 'center', mt: 1 }}>
                                    {weight.toFixed(1)}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Bias Control */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: 'white', mb: 2 }}>
                            Bias
                        </Typography>
                        <Slider
                            value={perceptronData.bias}
                            onChange={(_, value) => updateBias(value as number)}
                            min={-1}
                            max={1}
                            step={0.1}
                            sx={{
                                color: '#10B981',
                                '& .MuiSlider-thumb': {
                                    background: 'linear-gradient(135deg, #10B981, #34D399)',
                                }
                            }}
                        />
                        <Typography sx={{ color: 'white', textAlign: 'center', mt: 1 }}>
                            {perceptronData.bias.toFixed(1)}
                        </Typography>
                    </Box>

                    {/* Result Display */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="subtitle1" sx={{ color: 'white', mb: 2 }}>
                            Result
                        </Typography>
                        <Chip
                            label={perceptronData.activated ? 'Activated (1)' : 'Not Activated (0)'}
                            sx={{
                                background: perceptronData.activated ? 
                                    'linear-gradient(135deg, #10B981, #34D399)' :
                                    'linear-gradient(135deg, #EF4444, #F87171)',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                px: 2,
                                py: 1
                            }}
                        />
                        <Typography sx={{ color: 'rgba(255,255,255,0.7)', mt: 2, fontSize: '0.9rem' }}>
                            Sum: {perceptronData.output.toFixed(2)}
                        </Typography>
                    </Box>
                </Paper>
            </Box>

            {/* CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                `}} />
        </Box>
    );
};

export default Perceptron;
