import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMemo, useEffect } from 'react';

// Configuration - Easy to update and maintain
const VENUS_CONFIG = {
  // Cloud colors (real Venus: yellow-orange sulfuric acid clouds, muted for starfield compatibility)
  clouds: {
    base: { r: 180, g: 140, b: 50 }, // Darker, muted yellow-orange
    secondary: { r: 200, g: 160, b: 90 }, // Muted yellow
    accent: { r: 160, g: 110, b: 30 }, // Darker orange accent
    shadow: { r: 120, g: 90, b: 40 }, // Dark shadow for contrast with stars
    opacity: { dark: 0.4, light: 0.3 },
  },
  // Atmospheric glow configuration
  atmosphere: {
    glow: {
      inner: { r: 200, g: 160, b: 100 },
      outer: { r: 180, g: 140, b: 60 },
      opacity: { dark: 0.15, light: 0.1 },
    },
    haze: {
      r: 160,
      g: 120,
      b: 50,
      opacity: { dark: 0.12, light: 0.08 },
    },
  },
  // Cloud formations configuration
  cloudFormations: {
    large: 5, // Number of large cloud formations
    medium: 3, // Number of medium cloud formations
    small: 15, // Number of small cloud formations
    sizeRange: { large: [360, 450], medium: [260, 300], small: [150, 300] },
    heightRange: { large: [220, 280], medium: [170, 190], small: [100, 200] },
    opacityRange: { large: [0.3, 0.4], medium: [0.25, 0.35], small: [0.2, 0.4] },
  },
  // Cloud swirls configuration
  swirls: [
    { path: 'M 200 0 Q 400 -50, 600 0 T 1000 0 Q 1200 -20, 1400 0 T 1800 0', position: 'top' },
    { path: 'M 100 400 Q 500 350, 900 400 T 1700 400 Q 1900 380, 1920 400', position: 'middle' },
    { path: 'M 300 -440 Q 350 -140, 300 160 T 300 540', position: 'vertical' },
  ],
  // Atmospheric bands configuration
  atmosphericBands: [
    { cx: '50%', cy: '20%', rx: '60%', ry: '8%', opacity: 0.4 },
    { cx: '50%', cy: '60%', rx: '55%', ry: '10%', opacity: 0.35 },
  ],
};

// Generate random cloud formations
// All coordinates are in percentage (0-100) for responsive scaling
const generateCloudFormations = (
  count: number,
  sizeRange: [number, number],
  heightRange: [number, number],
  opacityRange: [number, number],
  topRange: [number, number] = [50, 100]
) => {
  const formations = [];

  for (let i = 0; i < count; i++) {
    const left = Math.random() * 100;
    const top = Math.random() * (topRange[1] - topRange[0]) + topRange[0];
    const width = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    const height = Math.random() * (heightRange[1] - heightRange[0]) + heightRange[0];
    const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
    const animationDelay = Math.random() * 5;
    const animationDuration = Math.random() * 20 + 15;
    const blur = Math.random() * 30 + 15;

    formations.push({ id: i, left, top, width, height, opacity, animationDelay, animationDuration, blur });
  }

  return formations;
};

export const VenusBackground = ({ clipPath }: { clipPath: string }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Theme-aware colors derived from config
  const baseColor = VENUS_CONFIG.clouds.base;
  const secondaryColor = VENUS_CONFIG.clouds.secondary;
  const accentColor = VENUS_CONFIG.clouds.accent;
  const shadowColor = VENUS_CONFIG.clouds.shadow;
  const opacity = VENUS_CONFIG.clouds.opacity[isDarkMode ? 'dark' : 'light'];

  const cloudColors = {
    primary: {
      light: `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity})`,
      medium: `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity * 0.83})`,
      dark: `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity * 0.8})`,
    },
    secondary: {
      light: `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${opacity * 0.92})`,
      medium: `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${opacity * 0.75})`,
      dark: `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b}, ${opacity * 0.64})`,
    },
    accent: {
      light: `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, ${opacity * 0.83})`,
      medium: `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, ${opacity * 0.67})`,
      dark: `rgba(${accentColor.r}, ${accentColor.g}, ${accentColor.b}, ${opacity * 0.5})`,
    },
    shadow: {
      deep: `rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${opacity})`,
      medium: `rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${opacity * 0.8})`,
      light: `rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${opacity * 0.6})`,
    },
    highlight: isDarkMode
      ? 'rgba(220, 200, 160, 0.4)'
      : 'rgba(240, 220, 180, 0.3)',
  };

  // Atmospheric colors derived from config
  const glowInner = VENUS_CONFIG.atmosphere.glow.inner;
  const glowOuter = VENUS_CONFIG.atmosphere.glow.outer;
  const glowOpacity = VENUS_CONFIG.atmosphere.glow.opacity[isDarkMode ? 'dark' : 'light'];
  const hazeColor = VENUS_CONFIG.atmosphere.haze;
  const hazeOpacity = VENUS_CONFIG.atmosphere.haze.opacity[isDarkMode ? 'dark' : 'light'];

  const atmosphericColors = {
    glow: {
      outer: `rgba(${glowOuter.r}, ${glowOuter.g}, ${glowOuter.b}, ${glowOpacity * 1.39})`,
      inner: `rgba(${glowInner.r}, ${glowInner.g}, ${glowInner.b}, ${glowOpacity})`,
    },
    haze: `rgba(${hazeColor.r}, ${hazeColor.g}, ${hazeColor.b}, ${hazeOpacity})`,
  };

  // Generate cloud formations
  const largeClouds = useMemo(() => {
    return generateCloudFormations(
      VENUS_CONFIG.cloudFormations.large,
      VENUS_CONFIG.cloudFormations.sizeRange.large as [number, number],
      VENUS_CONFIG.cloudFormations.heightRange.large as [number, number],
      VENUS_CONFIG.cloudFormations.opacityRange.large as [number, number],
      [5, 35] // Large clouds in top portion
    );
  }, []);

  const mediumClouds = useMemo(() => {
    return generateCloudFormations(
      VENUS_CONFIG.cloudFormations.medium,
      VENUS_CONFIG.cloudFormations.sizeRange.medium as [number, number],
      VENUS_CONFIG.cloudFormations.heightRange.medium as [number, number],
      VENUS_CONFIG.cloudFormations.opacityRange.medium as [number, number],
      [5, 30] // Medium clouds in top portion
    );
  }, []);

  const smallClouds = useMemo(() => {
    return generateCloudFormations(
      VENUS_CONFIG.cloudFormations.small,
      VENUS_CONFIG.cloudFormations.sizeRange.small as [number, number],
      VENUS_CONFIG.cloudFormations.heightRange.small as [number, number],
      VENUS_CONFIG.cloudFormations.opacityRange.small as [number, number],
      [50, 100] // Small clouds in bottom half
    );
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes cloudDrift {
        0%, 100% {
          transform: translateX(0) translateY(0);
          opacity: 1;
        }
        25% {
          transform: translateX(20px) translateY(-10px);
          opacity: 0.9;
        }
        50% {
          transform: translateX(-15px) translateY(15px);
          opacity: 0.85;
        }
        75% {
          transform: translateX(10px) translateY(-5px);
          opacity: 0.95;
        }
      }
      @keyframes atmosphericGlow {
        0%, 100% {
          opacity: 0.5;
          transform: scale(1);
        }
        50% {
          opacity: 0.65;
          transform: scale(1.05);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
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
        // Venus atmospheric base background - darker for starfield compatibility
        background: `radial-gradient(ellipse at 30% 40%, 
          ${atmosphericColors.glow.inner} 0%, 
          ${atmosphericColors.glow.outer} 20%, 
          ${atmosphericColors.haze} 40%, 
          ${cloudColors.primary.medium} 60%, 
          ${cloudColors.secondary.medium} 80%, 
          ${cloudColors.shadow.medium} 100%
        ), linear-gradient(135deg, 
          ${atmosphericColors.glow.outer} 0%, 
          ${cloudColors.primary.light} 25%, 
          ${cloudColors.secondary.light} 50%, 
          ${cloudColors.accent.medium} 75%, 
          ${cloudColors.shadow.deep} 100%
        ), 
        radial-gradient(circle at 50% 50%, rgba(20, 15, 10, 0.3) 0%, transparent 70%)`,
      }}
    >
      {/* Realistic Venus Atmosphere - SVG based */}
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
          {/* Cloud texture filter - simulates cloud turbulence */}
          <filter id="venusCloudTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
              result="cloudNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="cloudNoise"
              scale="2"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Fine cloud texture for atmospheric detail */}
          <filter id="venusFineTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2.0"
              numOctaves="2"
              result="fineNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="fineNoise"
              scale="0.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Atmospheric lighting gradient - simulates sunlight through clouds */}
          <radialGradient id="atmosphericLighting" cx="30%" cy="30%">
            <stop offset="0%" stopColor={cloudColors.highlight} stopOpacity="0.25" />
            <stop offset="40%" stopColor={cloudColors.primary.light} stopOpacity="0.12" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Horizon atmospheric glow */}
          <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="60%" stopColor="transparent" stopOpacity="0" />
            <stop offset="67%" stopColor={cloudColors.primary.medium} stopOpacity="0.08" />
            <stop offset="75%" stopColor={cloudColors.accent.medium} stopOpacity="0.12" />
            <stop offset="100%" stopColor={cloudColors.shadow.medium} stopOpacity="0.15" />
          </linearGradient>

          {/* Cloud gradient definitions */}
          <linearGradient id="venusCloudGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={cloudColors.primary.light} stopOpacity="0.25" />
            <stop offset="50%" stopColor={cloudColors.secondary.medium} stopOpacity="0.2" />
            <stop offset="100%" stopColor={cloudColors.accent.dark} stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="venusCloudGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cloudColors.highlight} stopOpacity="0.2" />
            <stop offset="100%" stopColor={cloudColors.primary.medium} stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="venusAtmosphericBand" cx="50%" cy="50%">
            <stop offset="0%" stopColor={atmosphericColors.glow.inner} stopOpacity="0.3" />
            <stop offset="100%" stopColor={atmosphericColors.glow.outer} stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Base cloud texture layer */}
        <rect
          width="100%"
          height="100%"
          fill={cloudColors.primary.medium}
          opacity="0.1"
          filter="url(#venusCloudTexture)"
        />

        {/* Fine grain texture overlay */}
        <rect
          width="100%"
          height="100%"
          fill={cloudColors.secondary.medium}
          opacity="0.06"
          filter="url(#venusFineTexture)"
        />

        {/* Atmospheric lighting simulation */}
        <rect
          width="100%"
          height="100%"
          fill="url(#atmosphericLighting)"
        />

        {/* Horizon atmospheric glow */}
        <rect
          width="100%"
          height="100%"
          fill="url(#horizonGlow)"
        />

        {/* Atmospheric bands */}
        {VENUS_CONFIG.atmosphericBands.map((band, index) => (
          <ellipse
            key={`band-${index}`}
            cx={band.cx}
            cy={band.cy}
            rx={band.rx}
            ry={band.ry}
            fill="url(#venusAtmosphericBand)"
            opacity={band.opacity}
          />
        ))}

        {/* Cloud swirls */}
        {VENUS_CONFIG.swirls.map((swirl, index) => (
          <path
            key={`swirl-${index}`}
            d={swirl.path}
            stroke={index === 1 ? 'url(#venusCloudGradient2)' : 'url(#venusCloudGradient1)'}
            strokeWidth={index === 1 ? 100 : index === 0 ? 80 : 70}
            fill="none"
            strokeLinecap="round"
            opacity={index === 1 ? 0.25 : index === 0 ? 0.3 : 0.2}
            filter="blur(12px)"
          />
        ))}
      </svg>

      {/* Large cloud formations */}
      {largeClouds.map((cloud, index) => {
        const colorVariant = index % 3;
        const cloudColor = colorVariant === 0
          ? cloudColors.primary
          : colorVariant === 1
            ? cloudColors.secondary
            : cloudColors.accent;

        return (
          <Box
            key={`large-${cloud.id}`}
            sx={{
              position: 'absolute',
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              borderRadius: `${Math.random() * 30 + 40}% ${Math.random() * 30 + 30}% ${Math.random() * 30 + 50}% ${Math.random() * 30 + 25}%`,
              background: `radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, 
                ${cloudColor.light}, ${cloudColor.medium})`,
              boxShadow: `
                inset 0 0 ${cloud.blur}px ${cloudColors.shadow.deep},
                0 0 ${cloud.blur * 0.8}px ${cloudColors.shadow.medium},
                inset -${cloud.blur * 0.5}px -${cloud.blur * 0.3}px ${cloud.blur * 1.2}px ${cloudColors.shadow.light}
              `,
              filter: `blur(${cloud.blur * 0.4}px)`,
              zIndex: 0.4,
              opacity: cloud.opacity,
              animation: `cloudDrift ${cloud.animationDuration}s ease-in-out infinite`,
              animationDelay: `${cloud.animationDelay}s`,
            }}
          />
        );
      })}

      {/* Medium cloud formations */}
      {mediumClouds.map((cloud, index) => {
        const colorVariant = index % 3;
        const cloudColor = colorVariant === 0
          ? cloudColors.primary
          : colorVariant === 1
            ? cloudColors.secondary
            : cloudColors.accent;

        return (
          <Box
            key={`medium-${cloud.id}`}
            sx={{
              position: 'absolute',
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              borderRadius: `${Math.random() * 30 + 35}% ${Math.random() * 30 + 40}% ${Math.random() * 30 + 45}% ${Math.random() * 30 + 30}%`,
              background: `radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, 
                ${cloudColor.medium}, ${cloudColor.dark})`,
              boxShadow: `
                inset 0 0 ${cloud.blur * 0.7}px ${cloudColors.shadow.medium},
                0 0 ${cloud.blur * 0.6}px ${cloudColors.shadow.light}
              `,
              filter: `blur(${cloud.blur * 0.35}px)`,
              zIndex: 0.4,
              opacity: cloud.opacity,
              animation: `cloudDrift ${cloud.animationDuration}s ease-in-out infinite`,
              animationDelay: `${cloud.animationDelay}s`,
            }}
          />
        );
      })}

      {/* Small cloud formations */}
      {smallClouds.map((cloud) => {
        const colorVariant = Math.floor(Math.random() * 3);
        const cloudColor = colorVariant === 0
          ? cloudColors.primary
          : colorVariant === 1
            ? cloudColors.secondary
            : cloudColors.accent;

        return (
          <Box
            key={`small-${cloud.id}`}
            sx={{
              position: 'absolute',
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              borderRadius: `${Math.random() * 30 + 40}% ${Math.random() * 30 + 30}% ${Math.random() * 30 + 50}% ${Math.random() * 30 + 25}%`,
              background: `radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, 
                ${cloudColor.medium}, ${cloudColor.dark})`,
              boxShadow: `
                inset 0 0 ${cloud.blur}px ${cloudColors.shadow.light},
                0 0 ${cloud.blur * 0.8}px ${cloudColors.shadow.light}
              `,
              filter: `blur(${cloud.blur * 0.4}px)`,
              zIndex: 0.4,
              opacity: cloud.opacity,
              animation: `cloudDrift ${cloud.animationDuration}s ease-in-out infinite`,
              animationDelay: `${cloud.animationDelay}s`,
            }}
          />
        );
      })}

      {/* Atmospheric glow layer - positioned in bottom half */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120%',
          height: '120%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${atmosphericColors.glow.inner} 0%, ${atmosphericColors.glow.outer} 40%, transparent 70%)`,
          animation: 'atmosphericGlow 8s ease-in-out infinite',
          zIndex: 0.1,
        }}
      />

      {/* Venus Symbol - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20 },
          left: { xs: 20 },
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: isDarkMode
            ? 'rgba(180, 140, 50, 0.6)'
            : 'rgba(200, 160, 90, 0.7)',
          fontFamily: 'serif',
          lineHeight: 1,
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          textShadow: isDarkMode
            ? '0 2px 8px rgba(0, 0, 0, 0.3)'
            : '0 2px 8px rgba(255, 255, 255, 0.3)',
        }}
      >
        ♀
      </Box>
    </Box>
  );
};
