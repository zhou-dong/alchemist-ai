import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';

// Configuration - Easy to update and maintain
const MERCURY_CONFIG = {
  // Surface colors (real Mercury: gray-brown rocky surface)
  surface: {
    base: { r: 184, g: 160, b: 130 }, // Mercury's characteristic gray-brown
    variation: { r: 20, g: 20, b: 20 }, // Color variation range
    opacity: { dark: 0.2, light: 0.15 },
  },
  // Dust particles configuration
  dust: {
    count: 150, // Number of dust particles
    sizeRange: [1, 4], // Particle size in pixels
    opacityRange: [0.1, 0.4], // Opacity range
  },
};

// Generate random dust particles
const generateDustParticles = (count: number, sizeRange: [number, number], opacityRange: [number, number]) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];

    particles.push({ x, y, size, opacity });
  }

  return particles;
};

export const MercuryBackground = ({ clipPath }: { clipPath: string }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Theme-aware colors derived from config
  const baseColor = MERCURY_CONFIG.surface.base;
  const opacity = MERCURY_CONFIG.surface.opacity[isDarkMode ? 'dark' : 'light'];

  const surfaceColors = {
    primary: `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity})`,
    secondary: `rgba(${baseColor.r - 20}, ${baseColor.g - 20}, ${baseColor.b - 20}, ${opacity * 0.8})`,
    accent: `rgba(${baseColor.r + 15}, ${baseColor.g + 15}, ${baseColor.b + 15}, ${opacity * 0.7})`,
    shadow: `rgba(${baseColor.r - 40}, ${baseColor.g - 40}, ${baseColor.b - 40}, ${opacity * 0.6})`,
    highlight: `rgba(${baseColor.r + 25}, ${baseColor.g + 25}, ${baseColor.b + 25}, ${opacity * 0.5})`,
  };

  // Dust particle colors
  const dustColors = {
    primary: isDarkMode ? 'rgba(184, 160, 130, 1)' : 'rgba(200, 180, 150, 1)',
    secondary: isDarkMode ? 'rgba(160, 140, 110, 1)' : 'rgba(180, 160, 130, 1)',
    dark: isDarkMode ? 'rgba(140, 120, 100, 1)' : 'rgba(160, 140, 120, 1)',
  };

  // Scarp colors
  const scarpColors = {
    shadow: isDarkMode
      ? { start: 'rgba(140, 120, 100, 0.15)', end: 'rgba(140, 120, 100, 0.08)' }
      : { start: 'rgba(140, 120, 100, 0.08)', end: 'rgba(140, 120, 100, 0.04)' },
    face: isDarkMode
      ? { top: 'rgba(200, 180, 160, 0.18)', bottom: 'rgba(180, 160, 140, 0.2)' }
      : { top: 'rgba(200, 180, 160, 0.1)', bottom: 'rgba(190, 170, 150, 0.12)' },
    highlight: isDarkMode ? 'rgba(220, 200, 180, 0.2)' : 'rgba(240, 220, 200, 0.12)',
  };

  // Generate dust particles
  const dustParticles = useMemo(() => {
    return generateDustParticles(
      MERCURY_CONFIG.dust.count,
      MERCURY_CONFIG.dust.sizeRange as [number, number],
      MERCURY_CONFIG.dust.opacityRange as [number, number]
    );
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        clipPath: clipPath,
        WebkitClipPath: clipPath,
        background: 'transparent',
      }}
    >
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0.5,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <filter id="mercuryTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <radialGradient id="surfaceLighting" cx="30%" cy="30%">
            <stop offset="0%" stopColor={surfaceColors.highlight} stopOpacity="0.3" />
            <stop offset="40%" stopColor={surfaceColors.primary} stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="60%" stopColor="transparent" stopOpacity="0" />
            <stop offset="75%" stopColor={surfaceColors.accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={surfaceColors.shadow} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="scarpShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={scarpColors.shadow.start} />
            <stop offset="100%" stopColor={scarpColors.shadow.end} />
          </linearGradient>
          <linearGradient id="scarpFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={scarpColors.face.top} />
            <stop offset="100%" stopColor={scarpColors.face.bottom} />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill={surfaceColors.primary} opacity="0.12" filter="url(#mercuryTexture)" />
        <rect width="100%" height="100%" fill="url(#surfaceLighting)" />
        <rect width="100%" height="100%" fill="url(#horizonGlow)" />

        {dustParticles.map((particle, index) => {
          const x = (particle.x / 100) * 1920;
          const y = (particle.y / 100) * 1080;
          const colorIndex = Math.floor(Math.random() * 3);
          const dustColor = colorIndex === 0 ? dustColors.primary : colorIndex === 1 ? dustColors.secondary : dustColors.dark;
          return <circle key={`dust-${index}`} cx={x} cy={y} r={particle.size} fill={dustColor} opacity={particle.opacity} />;
        })}

        {/* Scarps */}
        <g>
          <path d="M 0 740 Q 200 790, 400 760 T 600 740 L 600 790 Q 400 820, 200 840 T 0 790 Z" fill="url(#scarpShadow)" opacity={isDarkMode ? 0.25 : 0.15} />
          <path d="M 0 740 Q 200 790, 400 760 T 600 740 L 600 760 Q 400 780, 200 770 T 0 750 Z" fill="url(#scarpFace)" opacity={isDarkMode ? 0.3 : 0.18} />
          <path d="M 0 740 Q 200 790, 400 760 T 600 740" stroke={scarpColors.highlight} strokeWidth="2" fill="none" strokeLinecap="round" opacity={isDarkMode ? 0.3 : 0.2} />
        </g>
      </svg>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20 },
          left: { xs: 20 },
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: isDarkMode ? 'rgba(184, 160, 130, 0.6)' : 'rgba(160, 140, 110, 0.7)',
          fontFamily: 'serif',
          lineHeight: 1,
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        ☿
      </Box>
    </Box>
  );
};

