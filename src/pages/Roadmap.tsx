import {
  Box,
  Typography,
  Fade,
} from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Circular/Radial Roadmap Style
// Steps arranged in a circle, starting from top and going clockwise
// Creates a continuous learning loop with all concepts connected

// Calculate circular positions
const centerX = 50;
const centerY = 50;
const radius = 32; // Distance from center
const totalSteps = 8;
const angleStep = (2 * Math.PI) / totalSteps; // 45 degrees between steps
const startAngle = -Math.PI / 2; // Start from top (12 o'clock)

const calculateCircularPosition = (index: number) => {
  const angle = startAngle + (index * angleStep);
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle)
  };
};

const learningPath = [
  {
    title: 'Functions as Decisions',
    description: 'Every decision is a function',
    path: '/alchemist-ai/functions-decisions',
    unlocked: true,
    position: calculateCircularPosition(0)
  },
  {
    title: 'Simple Functions',
    description: 'Build the simplest function: if...else',
    path: '/alchemist-ai/simple-functions',
    unlocked: false,
    position: calculateCircularPosition(1)
  },
  {
    title: 'Multi-Input Functions',
    description: 'Multiple inputs, one output function',
    path: '/alchemist-ai/multi-input-functions',
    unlocked: false,
    position: calculateCircularPosition(2)
  },
  {
    title: 'Math to Neurons',
    description: 'From mathematical functions to neural networks',
    path: '/alchemist-ai/math-to-neurons',
    unlocked: false,
    position: calculateCircularPosition(3)
  },
  {
    title: 'Logistic Regression',
    description: 'Understanding binary classification',
    path: '/alchemist-ai/logistic-regression',
    unlocked: false,
    position: calculateCircularPosition(4)
  },
  {
    title: 'Multi-Layer Network',
    description: 'Stacking layers for complex patterns',
    path: '/alchemist-ai/multi-layer-network',
    unlocked: false,
    position: calculateCircularPosition(5)
  },
  {
    title: 'Backpropagation',
    description: 'The algorithm that enables deep learning',
    path: '/alchemist-ai/backpropagation',
    unlocked: false,
    position: calculateCircularPosition(6)
  },
  {
    title: 'Neural Networks',
    description: 'Master the complete neural network architecture',
    path: '/alchemist-ai/neural-networks',
    unlocked: false,
    position: calculateCircularPosition(7)
  },
];

export const Roadmap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };


  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'auto',
        pb: 8
      }}
    >

      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Main Title */}
        <Fade in={isLoaded} timeout={800}>
          <Box sx={{ 
            position: 'absolute',
            top: { xs: 40, md: 60 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3
          }}>
            <Typography
              variant="h1"
              component="h1"
              fontWeight={900}
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                animation: 'glow 2s ease-in-out infinite alternate, gradientShift 8s ease infinite',
                letterSpacing: { xs: '0.05em', md: '0.1em' },
                textAlign: 'center'
              }}
            >
              LEARNING PATH
            </Typography>
          </Box>
        </Fade>

        {/* Roadmap Container - Centered */}
        <Box
          ref={mapRef}
          sx={{
            position: 'relative',
            width: { xs: '95%', md: '90%' },
            maxWidth: '1200px',
            height: { xs: '500px', md: '600px', lg: '700px' },
            minHeight: { xs: '500px', md: '600px', lg: '700px' },
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Circular Track - The base circle connecting all steps */}
          <Box
            component="svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          >
            {/* Main Circular Track */}
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="url(#circularTrackGradient)"
              strokeWidth="2"
              opacity={0.4}
              style={{
                animation: 'gradientShift 8s ease infinite',
                filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.2))'
              }}
            />

            {/* Connecting Lines Between Steps */}
            {learningPath.map((item, index) => {
              const nextIndex = (index + 1) % learningPath.length; // Wrap around to complete the circle
              const nextItem = learningPath[nextIndex];
              const isUnlocked = item.unlocked;
              const isNextUnlocked = nextItem.unlocked;

              const startX = item.position.x;
              const startY = item.position.y;
              const endX = nextItem.position.x;
              const endY = nextItem.position.y;

              return (
                <g key={`connection-${index}`}>
                  {/* Main Connection Line */}
                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={isUnlocked && isNextUnlocked ? "url(#connectionGradient)" : "rgba(99, 102, 241, 0.25)"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity={isUnlocked && isNextUnlocked ? 0.6 : 0.4}
                    className={isUnlocked && isNextUnlocked ? "connection-line" : ""}
                    style={{
                      filter: isUnlocked && isNextUnlocked ? 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.4))' : 'none',
                      animation: isUnlocked && isNextUnlocked ? 'gradientShift 8s ease infinite' : 'none',
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </g>
              );
            })}
            <defs>
              {/* Circular Track Gradient - Applied along the circle path */}
              <linearGradient id="circularTrackGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="12.5%" stopColor="#7C3AED" />
                <stop offset="25%" stopColor="#8B5CF6" />
                <stop offset="37.5%" stopColor="#A78BFA" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="62.5%" stopColor="#10B981" />
                <stop offset="75%" stopColor="#06B6D4" />
                <stop offset="87.5%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
              {/* Connection Gradient */}
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.8} />
                <stop offset="25%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="50%" stopColor="#F59E0B" stopOpacity={0.8} />
                <stop offset="75%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#EC4899" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </Box>

          {/* Waypoints/Nodes */}
          {learningPath.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isUnlocked = item.unlocked;

            return (
              <Fade
                in={isLoaded}
                timeout={800}
                key={item.title}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Box
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => item.path && isUnlocked && navigate(item.path)}
                  sx={{
                    position: 'absolute',
                    left: `calc(${item.position.x}% - 90px)`,
                    top: `calc(${item.position.y}% - 90px)`,
                    width: 180,
                    height: 180,
                    aspectRatio: '1 / 1',
                    cursor: isUnlocked && item.path ? 'pointer' : 'default',
                    zIndex: 10,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered && isUnlocked ? 'scale(1.05)' : 'scale(1)',
                    opacity: isUnlocked ? 1 : 0.6,
                  }}
                >
                  {/* Circular Waypoint Card */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      minWidth: 180,
                      minHeight: 180,
                      aspectRatio: '1 / 1',
                      borderRadius: '50%',
                      background: 'transparent',
                      border: '3px solid transparent',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 2,
                      backdropFilter: 'blur(10px)',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        padding: '2px',
                        background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                        backgroundSize: '200% 200%',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        opacity: isUnlocked ? 0.5 : 0.3,
                        animation: 'gradientShift 8s ease infinite',
                        zIndex: -1
                      },
                      '&:hover': {
                        '&::before': {
                          opacity: isUnlocked ? 0.8 : 0.5
                        },
                        boxShadow: `0 8px 32px rgba(99, 102, 241, ${isUnlocked ? '0.4' : '0.2'})`
                      },
                      boxShadow: `0 4px 24px rgba(99, 102, 241, ${isUnlocked ? '0.3' : '0.15'})`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    {/* Title - Centered */}
                    <Typography
                      variant="h5"
                      component="h3"
                      fontWeight={700}
                      sx={{
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                        backgroundSize: '200% 200%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        mb: 1.5,
                        animation: 'gradientShift 8s ease infinite',
                        textShadow: isUnlocked ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                        opacity: isUnlocked ? 1 : 0.7,
                        lineHeight: 1.4,
                        px: 2
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Description - Centered */}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.7rem', md: '0.8rem' },
                        color: 'text.secondary',
                        textAlign: 'center',
                        opacity: isUnlocked ? 0.9 : 0.6,
                        lineHeight: 1.5,
                        px: 2
                      }}
                    >
                      {isUnlocked ? item.description : 'Complete previous steps to unlock'}
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            );
          })}
        </Box>
      </Box>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes glow {
          from { text-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
          to { text-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 0 0 70px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
        
        .connection-line {
          animation: gradientShift 8s ease infinite;
        }
      `}} />
    </Box>
  );
};

export default Roadmap;

