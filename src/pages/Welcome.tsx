import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

const Welcome = () => {
    const [particles, setParticles] = useState([]);
    const [neuralNetwork, setNeuralNetwork] = useState<{
        nodes: Array<{
            id: string;
            x: number;
            y: number;
            layer: string;
            size: number;
            opacity: number;
        }>;
        connections: Array<{
            id: string;
            from: any;
            to: any;
            opacity: number;
            delay: number;
        }>;
    }>({ nodes: [], connections: [] });

    useEffect(() => {
        generateParticles();
        generateNeuralNetwork();
    }, []);

    const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 80; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.4,
                type: 'star',
                twinkle: Math.random() * 3 + 2
            });
        }
        setParticles(newParticles as any);
    };

    const generateNeuralNetwork = () => {
        const nodes: Array<{
            id: string;
            x: number;
            y: number;
            layer: string;
            size: number;
            opacity: number;
        }> = [];
        const connections: Array<{
            id: string;
            from: any;
            to: any;
            opacity: number;
            delay: number;
        }> = [];

        // Create input layer (left side)
        for (let i = 0; i < 4; i++) {
            nodes.push({
                id: `input-${i}`,
                x: 100,
                y: 150 + i * 80,
                layer: 'input',
                size: 8,
                opacity: 0.8
            });
        }

        // Create hidden layer 1
        for (let i = 0; i < 6; i++) {
            nodes.push({
                id: `hidden1-${i}`,
                x: 300,
                y: 120 + i * 60,
                layer: 'hidden1',
                size: 10,
                opacity: 0.9
            });
        }

        // Create hidden layer 2
        for (let i = 0; i < 5; i++) {
            nodes.push({
                id: `hidden2-${i}`,
                x: 500,
                y: 130 + i * 70,
                layer: 'hidden2',
                size: 9,
                opacity: 0.85
            });
        }

        // Create output layer (right side)
        for (let i = 0; i < 3; i++) {
            nodes.push({
                id: `output-${i}`,
                x: 700,
                y: 150 + i * 100,
                layer: 'output',
                size: 12,
                opacity: 1
            });
        }

        // Create connections between layers
        nodes.forEach(node => {
            if (node.layer === 'input') {
                // Connect input to hidden1
                nodes.filter(n => n.layer === 'hidden1').forEach(target => {
                    connections.push({
                        id: `${node.id}-${target.id}`,
                        from: node,
                        to: target,
                        opacity: Math.random() * 0.6 + 0.2,
                        delay: Math.random() * 2
                    });
                });
            } else if (node.layer === 'hidden1') {
                // Connect hidden1 to hidden2
                nodes.filter(n => n.layer === 'hidden2').forEach(target => {
                    connections.push({
                        id: `${node.id}-${target.id}`,
                        from: node,
                        to: target,
                        opacity: Math.random() * 0.6 + 0.2,
                        delay: Math.random() * 2
                    });
                });
            } else if (node.layer === 'hidden2') {
                // Connect hidden2 to output
                nodes.filter(n => n.layer === 'output').forEach(target => {
                    connections.push({
                        id: `${node.id}-${target.id}`,
                        from: node,
                        to: target,
                        opacity: Math.random() * 0.6 + 0.2,
                        delay: Math.random() * 2
                    });
                });
            }
        });

        setNeuralNetwork({ nodes, connections });
    };

    useEffect(() => {
        const animateParticles = () => {
            setParticles((prev: any) => prev.map((particle: any) => ({
                ...particle,
                x: particle.x + particle.vx,
                y: particle.y + particle.vy,
            })) as any);
        };

        const interval = setInterval(animateParticles, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: `
                    linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%)
                `,
                position: 'relative',
                overflow: 'hidden',
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
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        conic-gradient(from 0deg at 50% 50%, 
                            rgba(99, 102, 241, 0.1) 0deg,
                            rgba(139, 92, 246, 0.1) 60deg,
                            rgba(236, 72, 153, 0.1) 120deg,
                            rgba(245, 158, 11, 0.1) 180deg,
                            rgba(16, 185, 129, 0.1) 240deg,
                            rgba(99, 102, 241, 0.1) 300deg,
                            rgba(99, 102, 241, 0.1) 360deg
                        )
                    `,
                    zIndex: 0,
                    opacity: 0.3
                }
            }}
        >
            {/* Starfield Background */}
            {particles.map((particle: any) => (
                <Box
                    key={(particle as any).id}
                    sx={{
                        position: 'absolute',
                        left: (particle as any).x,
                        top: (particle as any).y,
                        width: (particle as any).size,
                        height: (particle as any).size,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, 
                            rgba(99, 102, 241, ${(particle as any).opacity}) 0%, 
                            rgba(139, 92, 246, ${(particle as any).opacity * 0.8}) 30%, 
                            rgba(236, 72, 153, ${(particle as any).opacity * 0.6}) 60%, 
                            rgba(16, 185, 129, ${(particle as any).opacity * 0.4}) 80%, 
                            transparent 100%
                        )`,
                        opacity: (particle as any).opacity,
                        pointerEvents: 'none',
                        zIndex: 1,
                        animation: `twinkle ${(particle as any).twinkle}s ease-in-out infinite, float 12s ease-in-out infinite`,
                        animationDelay: `${(particle as any).id * 0.1}s`,
                        boxShadow: `
                            0 0 ${(particle as any).size * 3}px rgba(99, 102, 241, ${(particle as any).opacity * 0.8}), 
                            0 0 ${(particle as any).size * 6}px rgba(139, 92, 246, ${(particle as any).opacity * 0.6}),
                            0 0 ${(particle as any).size * 9}px rgba(236, 72, 153, ${(particle as any).opacity * 0.4})
                        `
                    }}
                />
            ))}

            {/* Neural Network */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            >
                {neuralNetwork.connections.map((connection: any) => (
                    <line
                        key={connection.id}
                        x1={connection.from.x}
                        y1={connection.from.y}
                        x2={connection.to.x}
                        y2={connection.to.y}
                        stroke={`url(#gradient-${connection.id})`}
                        strokeWidth="2"
                        opacity={connection.opacity}
                        style={{
                            filter: `drop-shadow(0 0 4px rgba(99, 102, 241, ${connection.opacity * 0.5}))`
                        }}
                    />
                ))}

                {/* Define gradients for each connection */}
                <defs>
                    {neuralNetwork.connections.map((connection: any) => (
                        <linearGradient
                            key={`gradient-${connection.id}`}
                            id={`gradient-${connection.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor={`rgba(99, 102, 241, ${connection.opacity})`}>
                                <animate
                                    attributeName="stop-color"
                                    values={`rgba(99, 102, 241, ${connection.opacity});rgba(139, 92, 246, ${connection.opacity});rgba(236, 72, 153, ${connection.opacity});rgba(16, 185, 129, ${connection.opacity});rgba(99, 102, 241, ${connection.opacity})`}
                                    dur={`${3 + connection.delay}s`}
                                    repeatCount="indefinite"
                                />
                            </stop>
                            <stop offset="50%" stopColor={`rgba(139, 92, 246, ${connection.opacity * 0.8})`}>
                                <animate
                                    attributeName="stop-color"
                                    values={`rgba(139, 92, 246, ${connection.opacity * 0.8});rgba(236, 72, 153, ${connection.opacity * 0.8});rgba(16, 185, 129, ${connection.opacity * 0.8});rgba(245, 158, 11, ${connection.opacity * 0.8});rgba(139, 92, 246, ${connection.opacity * 0.8})`}
                                    dur={`${3 + connection.delay}s`}
                                    repeatCount="indefinite"
                                />
                            </stop>
                            <stop offset="100%" stopColor={`rgba(236, 72, 153, ${connection.opacity * 0.6})`}>
                                <animate
                                    attributeName="stop-color"
                                    values={`rgba(236, 72, 153, ${connection.opacity * 0.6});rgba(16, 185, 129, ${connection.opacity * 0.6});rgba(245, 158, 11, ${connection.opacity * 0.6});rgba(99, 102, 241, ${connection.opacity * 0.6});rgba(236, 72, 153, ${connection.opacity * 0.6})`}
                                    dur={`${3 + connection.delay}s`}
                                    repeatCount="indefinite"
                                />
                            </stop>
                        </linearGradient>
                    ))}
                </defs>
            </svg>

            {neuralNetwork.nodes.map((node: any) => (
                <Box
                    key={node.id}
                    sx={{
                        position: 'absolute',
                        left: node.x - node.size / 2,
                        top: node.y - node.size / 2,
                        width: node.size,
                        height: node.size,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, 
                            rgba(99, 102, 241, ${node.opacity}) 0%, 
                            rgba(139, 92, 246, ${node.opacity * 0.8}) 30%, 
                            rgba(236, 72, 153, ${node.opacity * 0.6}) 60%, 
                            rgba(16, 185, 129, ${node.opacity * 0.4}) 80%, 
                            transparent 100%
                        )`,
                        opacity: node.opacity,
                        zIndex: 3,
                        animation: `neuralPulse ${3 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                        boxShadow: `
                            0 0 ${node.size * 2}px rgba(99, 102, 241, ${node.opacity * 0.8}), 
                            0 0 ${node.size * 4}px rgba(139, 92, 246, ${node.opacity * 0.6}),
                            0 0 ${node.size * 6}px rgba(236, 72, 153, ${node.opacity * 0.4})
                        `
                    }}
                />
            ))}

            {/* CSS Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 0.6; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.3); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes glow {
                    from { opacity: 0.8; }
                    to { opacity: 1; }
                }
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                @keyframes typing {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                    30% { transform: translateY(-10px); opacity: 1; }
                }
                @keyframes neuralPulse {
                    0%, 100% { 
                        opacity: 0.6; 
                        transform: scale(1); 
                        box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);
                    }
                    50% { 
                        opacity: 1; 
                        transform: scale(1.2); 
                        box-shadow: 0 0 16px rgba(99, 102, 241, 0.8);
                    }
                }
            `}} />
        </Box>
    );
};

export default Welcome;
