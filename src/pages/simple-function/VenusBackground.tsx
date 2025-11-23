import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';

// Configuration - Easy to update and maintain
const VENUS_CONFIG = {
  // Cloud colors (reddish-brown volcanic surface colors)
  clouds: {
    base: { r: 139, g: 69, b: 19 }, // Reddish-brown (SaddleBrown)
    secondary: { r: 160, g: 82, b: 45 }, // Lighter reddish-brown (Sienna)
    accent: { r: 101, g: 50, b: 14 }, // Darker reddish-brown
    shadow: { r: 80, g: 40, b: 10 }, // Dark shadow for contrast with stars
    variation: { r: 20, g: 20, b: 20 }, // Color variation range
    opacity: { dark: 0.2, light: 0.15 },
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
};

// Generate organic cloud-like SVG path using multiple overlapping circles/ellipses
// This creates a more realistic cloud shape by combining multiple blobs
const generateCloudPath = (width: number, height: number, seed: number = Math.random()) => {
  // Simple seeded random number generator
  let currentSeed = seed;
  const rng = (min: number, max: number) => {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    return min + (max - min) * (currentSeed / 233280);
  };
  
  const centerX = width / 2;
  const centerY = height / 2;
  const numBlobs = Math.floor(rng(5, 9)); // 5-8 blobs per cloud for more organic shape
  const paths: string[] = [];

  // Generate multiple overlapping blobs to create organic cloud shape
  // Larger blobs in center, smaller ones around edges for wispy effect
  for (let i = 0; i < numBlobs; i++) {
    const distanceFromCenter = rng(0, 0.5); // How far from center
    const angle = rng(0, Math.PI * 2);
    const blobX = centerX + Math.cos(angle) * width * distanceFromCenter * 0.4;
    const blobY = centerY + Math.sin(angle) * height * distanceFromCenter * 0.4;
    
    // Larger blobs in center, smaller at edges
    const sizeFactor = 1 - distanceFromCenter;
    const blobWidth = width * rng(0.25, 0.5) * sizeFactor;
    const blobHeight = height * rng(0.25, 0.5) * sizeFactor;
    
    // Create organic blob using ellipse with some variation
    const rx = blobWidth / 2;
    const ry = blobHeight / 2;
    
    // Add some irregularity to make it more cloud-like
    const irregularity = rng(0.85, 1.15);
    const rxVaried = rx * irregularity;
    const ryVaried = ry * irregularity;
    
    // Create ellipse path with slight variations
    const path = `M ${blobX},${blobY - ryVaried}
      A ${rxVaried},${ryVaried} 0 0,1 ${blobX + rxVaried},${blobY}
      A ${rxVaried},${ryVaried} 0 0,1 ${blobX},${blobY + ryVaried}
      A ${rxVaried},${ryVaried} 0 0,1 ${blobX - rxVaried},${blobY}
      A ${rxVaried},${ryVaried} 0 0,1 ${blobX},${blobY - ryVaried}
      Z`;
    
    paths.push(path);
  }

  return paths;
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
    const seed = Math.random();
    const left = Math.random() * 100;
    const top = Math.random() * (topRange[1] - topRange[0]) + topRange[0];
    const width = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    const height = Math.random() * (heightRange[1] - heightRange[0]) + heightRange[0];
    const opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
    const blur = Math.random() * 30 + 15;

    formations.push({ 
      id: i, 
      left, 
      top, 
      width, 
      height, 
      opacity, 
      blur,
      seed, // Store seed for consistent path generation
    });
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
      ? 'rgba(180, 100, 50, 0.4)'
      : 'rgba(200, 120, 70, 0.3)',
    // Simple variants for texture layers
    primarySimple: `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${opacity})`,
    secondarySimple: `rgba(${baseColor.r - 20}, ${baseColor.g - 20}, ${baseColor.b - 20}, ${opacity * 0.8})`,
    accentSimple: `rgba(${baseColor.r + 15}, ${baseColor.g + 15}, ${baseColor.b + 15}, ${opacity * 0.7})`,
    shadowSimple: `rgba(${baseColor.r - 40}, ${baseColor.g - 40}, ${baseColor.b - 40}, ${opacity * 0.6})`,
    highlightSimple: `rgba(${baseColor.r + 25}, ${baseColor.g + 25}, ${baseColor.b + 25}, ${opacity * 0.5})`,
  };

  // Subtle cloud swirl colors - reduced opacity for better blending
  const swirlColors = {
    shadow: isDarkMode
      ? { start: 'rgba(101, 50, 14, 0.15)', end: 'rgba(101, 50, 14, 0.08)' }
      : { start: 'rgba(101, 50, 14, 0.08)', end: 'rgba(101, 50, 14, 0.04)' },
    face: isDarkMode
      ? { top: 'rgba(160, 82, 45, 0.18)', bottom: 'rgba(139, 69, 19, 0.2)' }
      : { top: 'rgba(160, 82, 45, 0.1)', bottom: 'rgba(150, 75, 35, 0.12)' },
    highlight: isDarkMode ? 'rgba(180, 100, 50, 0.2)' : 'rgba(200, 120, 70, 0.12)',
    edgeShadow: isDarkMode ? 'rgba(80, 40, 10, 0.15)' : 'rgba(101, 50, 14, 0.08)',
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
          {/* Enhanced cloud texture filter - multiple layers */}
          <filter id="venusTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Fine grain texture for cloud detail */}
          <filter id="venusFineTexture" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2.5"
              numOctaves="2"
              result="fineNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="fineNoise"
              scale="1"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Cloud lighting gradient - simulates sunlight */}
          <radialGradient id="cloudLighting" cx="30%" cy="30%">
            <stop offset="0%" stopColor={cloudColors.highlightSimple} stopOpacity="0.3" />
            <stop offset="40%" stopColor={cloudColors.primarySimple} stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Horizon atmospheric glow */}
          <linearGradient id="horizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="60%" stopColor="transparent" stopOpacity="0" />
            <stop offset="67%" stopColor={cloudColors.primarySimple} stopOpacity="0.1" />
            <stop offset="75%" stopColor={cloudColors.accentSimple} stopOpacity="0.15" />
            <stop offset="100%" stopColor={cloudColors.shadowSimple} stopOpacity="0.2" />
          </linearGradient>

          {/* Subtle cloud swirl shadow - reduced opacity */}
          <linearGradient id="swirlDeepShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={swirlColors.edgeShadow} stopOpacity="0.25" />
            <stop offset="50%" stopColor={swirlColors.shadow.start} stopOpacity="0.15" />
            <stop offset="100%" stopColor={swirlColors.shadow.end} stopOpacity="0.1" />
          </linearGradient>

          {/* Subtle cloud swirl gradients */}
          <linearGradient id="swirlShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={swirlColors.shadow.start} />
            <stop offset="100%" stopColor={swirlColors.shadow.end} />
          </linearGradient>
          <linearGradient id="swirlFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={swirlColors.face.top} />
            <stop offset="100%" stopColor={swirlColors.face.bottom} />
          </linearGradient>
        </defs>

        {/* Base cloud texture layer */}
        <rect
          width="100%"
          height="100%"
          fill={cloudColors.primarySimple}
          opacity="0.12"
          filter="url(#venusTexture)"
        />

        {/* Fine grain texture overlay */}
        <rect
          width="100%"
          height="100%"
          fill={cloudColors.secondarySimple}
          opacity="0.08"
          filter="url(#venusFineTexture)"
        />

        {/* Cloud lighting simulation */}
        <rect
          width="100%"
          height="100%"
          fill="url(#cloudLighting)"
        />

        {/* Horizon atmospheric glow */}
        <rect
          width="100%"
          height="100%"
          fill="url(#horizonGlow)"
        />

        {/* Cloud Swirls (Atmospheric Bands) - subtle and blended */}
        {/* Swirl 1 - Curved from left to center */}
        <g>
          {/* Subtle shadow layer */}
          <path
            d="M 200 0 Q 400 -50, 600 0 T 1000 0 Q 1200 -20, 1400 0 T 1800 0 L 1800 50 Q 1400 30, 1000 50 T 200 50 Z"
            fill="url(#swirlShadow)"
            opacity={isDarkMode ? 0.25 : 0.15}
          />
          {/* Subtle face */}
          <path
            d="M 200 0 Q 400 -50, 600 0 T 1000 0 Q 1200 -20, 1400 0 T 1800 0 L 1800 25 Q 1400 15, 1000 25 T 200 25 Z"
            fill="url(#swirlFace)"
            opacity={isDarkMode ? 0.3 : 0.18}
          />
          {/* Subtle highlight edge */}
          <path
            d="M 200 0 Q 400 -50, 600 0 T 1000 0 Q 1200 -20, 1400 0 T 1800 0"
            stroke={swirlColors.highlight}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity={isDarkMode ? 0.3 : 0.2}
          />
        </g>

        {/* Swirl 2 - Curved from center-right to middle */}
        <g>
          {/* Subtle shadow */}
          <path
            d="M 100 400 Q 500 350, 900 400 T 1700 400 Q 1900 380, 1920 400 L 1920 450 Q 1900 430, 1700 450 T 900 450 Q 500 400, 100 450 Z"
            fill="url(#swirlShadow)"
            opacity={isDarkMode ? 0.25 : 0.15}
          />
          {/* Subtle face */}
          <path
            d="M 100 400 Q 500 350, 900 400 T 1700 400 Q 1900 380, 1920 400 L 1920 425 Q 1900 410, 1700 425 T 900 425 Q 500 375, 100 425 Z"
            fill="url(#swirlFace)"
            opacity={isDarkMode ? 0.3 : 0.18}
          />
          {/* Subtle highlight edge */}
          <path
            d="M 100 400 Q 500 350, 900 400 T 1700 400 Q 1900 380, 1920 400"
            stroke={swirlColors.highlight}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity={isDarkMode ? 0.3 : 0.2}
          />
        </g>

        {/* Swirl 3 - Vertical curved swirl */}
        <g>
          {/* Subtle shadow */}
          <path
            d="M 300 -440 Q 350 -140, 300 160 T 300 540 L 250 540 Q 250 160, 300 -140 T 250 -440 Z"
            fill="url(#swirlShadow)"
            opacity={isDarkMode ? 0.25 : 0.15}
          />
          {/* Subtle face */}
          <path
            d="M 300 -440 Q 350 -140, 300 160 T 300 540 L 275 540 Q 275 160, 300 -140 T 275 -440 Z"
            fill="url(#swirlFace)"
            opacity={isDarkMode ? 0.3 : 0.18}
          />
          {/* Subtle highlight edge */}
          <path
            d="M 300 -440 Q 350 -140, 300 160 T 300 540"
            stroke={swirlColors.highlight}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity={isDarkMode ? 0.3 : 0.2}
          />
        </g>
      </svg>

      {/* Large cloud formations - SVG-based organic shapes */}
      {largeClouds.map((cloud, index) => {
        const colorVariant = index % 3;
        const cloudColor = colorVariant === 0
          ? cloudColors.primary
          : colorVariant === 1
            ? cloudColors.secondary
            : cloudColors.accent;

        const cloudPaths = generateCloudPath(cloud.width, cloud.height, cloud.seed);

        return (
          <Box
            key={`large-${cloud.id}`}
            sx={{
              position: 'absolute',
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              zIndex: 0.4,
              opacity: cloud.opacity,
              filter: `blur(${cloud.blur * 0.4}px)`,
            }}
          >
            <svg
              width={cloud.width}
              height={cloud.height}
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <defs>
                <radialGradient id={`largeCloudGrad-${cloud.id}`} cx="50%" cy="50%">
                  <stop offset="0%" stopColor={cloudColor.light} />
                  <stop offset="70%" stopColor={cloudColor.medium} />
                  <stop offset="100%" stopColor={cloudColor.dark} />
                </radialGradient>
                <filter id={`largeCloudFilter-${cloud.id}`}>
                  <feGaussianBlur in="SourceGraphic" stdDeviation={cloud.blur * 0.2} />
                </filter>
              </defs>
              {cloudPaths.map((path, pathIndex) => (
                <path
                  key={`path-${pathIndex}`}
                  d={path}
                  fill={`url(#largeCloudGrad-${cloud.id})`}
                  filter={`url(#largeCloudFilter-${cloud.id})`}
                  opacity={0.9 - pathIndex * 0.1}
                />
              ))}
            </svg>
          </Box>
        );
      })}

      {/* Medium cloud formations - SVG-based organic shapes */}
      {mediumClouds.map((cloud, index) => {
        const colorVariant = index % 3;
        const cloudColor = colorVariant === 0
          ? cloudColors.primary
          : colorVariant === 1
            ? cloudColors.secondary
            : cloudColors.accent;

        const cloudPaths = generateCloudPath(cloud.width, cloud.height, cloud.seed);

        return (
          <Box
            key={`medium-${cloud.id}`}
            sx={{
              position: 'absolute',
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              zIndex: 0.4,
              opacity: cloud.opacity,
              filter: `blur(${cloud.blur * 0.35}px)`,
            }}
          >
            <svg
              width={cloud.width}
              height={cloud.height}
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <defs>
                <radialGradient id={`mediumCloudGrad-${cloud.id}`} cx="50%" cy="50%">
                  <stop offset="0%" stopColor={cloudColor.medium} />
                  <stop offset="70%" stopColor={cloudColor.dark} />
                  <stop offset="100%" stopColor={cloudColors.shadow.medium} />
                </radialGradient>
                <filter id={`mediumCloudFilter-${cloud.id}`}>
                  <feGaussianBlur in="SourceGraphic" stdDeviation={cloud.blur * 0.15} />
                </filter>
              </defs>
              {cloudPaths.map((path, pathIndex) => (
                <path
                  key={`path-${pathIndex}`}
                  d={path}
                  fill={`url(#mediumCloudGrad-${cloud.id})`}
                  filter={`url(#mediumCloudFilter-${cloud.id})`}
                  opacity={0.85 - pathIndex * 0.1}
                />
              ))}
            </svg>
          </Box>
        );
      })}

      {/* Small cloud formations - SVG-based organic shapes */}
      {smallClouds.map((cloud) => {
        const colorVariant = Math.floor(cloud.seed * 3);
        const cloudColor = colorVariant === 0
          ? cloudColors.primary
          : colorVariant === 1
            ? cloudColors.secondary
            : cloudColors.accent;

        const cloudPaths = generateCloudPath(cloud.width, cloud.height, cloud.seed);

        return (
          <Box
            key={`small-${cloud.id}`}
            sx={{
              position: 'absolute',
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
              width: `${cloud.width}px`,
              height: `${cloud.height}px`,
              zIndex: 0.4,
              opacity: cloud.opacity,
              filter: `blur(${cloud.blur * 0.4}px)`,
            }}
          >
            <svg
              width={cloud.width}
              height={cloud.height}
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <defs>
                <radialGradient id={`smallCloudGrad-${cloud.id}`} cx="50%" cy="50%">
                  <stop offset="0%" stopColor={cloudColor.medium} />
                  <stop offset="100%" stopColor={cloudColor.dark} />
                </radialGradient>
                <filter id={`smallCloudFilter-${cloud.id}`}>
                  <feGaussianBlur in="SourceGraphic" stdDeviation={cloud.blur * 0.1} />
                </filter>
              </defs>
              {cloudPaths.map((path, pathIndex) => (
                <path
                  key={`path-${pathIndex}`}
                  d={path}
                  fill={`url(#smallCloudGrad-${cloud.id})`}
                  filter={`url(#smallCloudFilter-${cloud.id})`}
                  opacity={0.8 - pathIndex * 0.1}
                />
              ))}
            </svg>
          </Box>
        );
      })}

      {/* Venus Symbol - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20 },
          left: { xs: 20 },
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: isDarkMode
            ? 'rgba(139, 69, 19, 0.6)'
            : 'rgba(160, 82, 45, 0.7)',
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
