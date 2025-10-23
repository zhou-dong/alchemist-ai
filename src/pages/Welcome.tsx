import {
    Box,
} from '@mui/material';
import { useState, useEffect } from 'react';

const Welcome = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        generateParticles();
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
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
                @keyframes typing {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
                    30% { transform: translateY(-10px); opacity: 1; }
                }
            `}} />
        </Box>
    );
};

export default Welcome;
