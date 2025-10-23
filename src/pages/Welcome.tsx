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
                    radial-gradient(ellipse at top, #1e293b 0%, #0f172a 50%),
                    linear-gradient(180deg, #0f172a 0%, #000000 100%)
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
                        radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 70%)
                    `,
                    zIndex: 0
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
                        background: `radial-gradient(circle, rgba(255,255,255,${(particle as any).opacity}) 0%, rgba(255,255,255,${(particle as any).opacity * 0.6}) 30%, rgba(255,255,255,${(particle as any).opacity * 0.2}) 70%, transparent 100%)`,
                        opacity: (particle as any).opacity,
                        pointerEvents: 'none',
                        zIndex: 1,
                        animation: `twinkle ${(particle as any).twinkle}s ease-in-out infinite, float 12s ease-in-out infinite`,
                        animationDelay: `${(particle as any).id * 0.1}s`,
                        boxShadow: `0 0 ${(particle as any).size * 3}px rgba(255,255,255,${(particle as any).opacity * 0.8}), 0 0 ${(particle as any).size * 6}px rgba(255,255,255,${(particle as any).opacity * 0.3})`
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
