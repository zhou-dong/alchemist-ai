import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMemo, useEffect } from 'react';

export const VenusBackground = ({ clipPath }: { clipPath: string }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Theme-aware colors for Venus cloud features
  const cloudColors = {
    primary: isDarkMode
      ? { light: 'rgba(255, 198, 73, 0.6)', medium: 'rgba(255, 198, 73, 0.5)', dark: 'rgba(255, 198, 73, 0.4)' }
      : { light: 'rgba(255, 198, 73, 0.4)', medium: 'rgba(255, 198, 73, 0.35)', dark: 'rgba(255, 198, 73, 0.28)' },
    secondary: isDarkMode
      ? { light: 'rgba(255, 220, 140, 0.55)', medium: 'rgba(255, 220, 140, 0.45)', dark: 'rgba(255, 220, 140, 0.35)' }
      : { light: 'rgba(255, 220, 140, 0.38)', medium: 'rgba(255, 220, 140, 0.3)', dark: 'rgba(255, 220, 140, 0.22)' },
    accent: isDarkMode
      ? { light: 'rgba(255, 165, 0, 0.5)', medium: 'rgba(255, 165, 0, 0.4)', dark: 'rgba(255, 165, 0, 0.3)' }
      : { light: 'rgba(255, 165, 0, 0.35)', medium: 'rgba(255, 165, 0, 0.28)', dark: 'rgba(255, 165, 0, 0.2)' },
    shadow: isDarkMode
      ? { deep: 'rgba(200, 150, 50, 0.5)', medium: 'rgba(200, 150, 50, 0.4)', light: 'rgba(200, 150, 50, 0.3)' }
      : { deep: 'rgba(200, 150, 50, 0.28)', medium: 'rgba(200, 150, 50, 0.22)', light: 'rgba(200, 150, 50, 0.15)' },
    highlight: isDarkMode
      ? 'rgba(255, 240, 200, 0.6)'
      : 'rgba(255, 240, 200, 0.4)',
  };

  const atmosphericColors = {
    glow: isDarkMode
      ? { outer: 'rgba(255, 198, 73, 0.25)', inner: 'rgba(255, 220, 140, 0.18)' }
      : { outer: 'rgba(255, 198, 73, 0.18)', inner: 'rgba(255, 220, 140, 0.12)' },
    haze: isDarkMode
      ? 'rgba(255, 198, 73, 0.15)'
      : 'rgba(255, 198, 73, 0.1)',
  };

  // Generate cloud formations - only in bottom half (top: 50-100%)
  const cloudFormations = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 50 + 50, // Only in bottom half (50-100%)
      width: Math.random() * 300 + 150,
      height: Math.random() * 200 + 100,
      opacity: Math.random() * 0.3 + 0.2,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 20 + 15,
      blur: Math.random() * 30 + 15,
    }));
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
          opacity: 0.6;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
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
      }}
    >
      {/* Atmospheric glow layers - positioned in bottom half */}
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
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 30% 30%, ${atmosphericColors.haze} 0%, transparent 50%),
                         radial-gradient(circle at 70% 70%, ${atmosphericColors.haze} 0%, transparent 50%)`,
          zIndex: 0.2,
        }}
      />

      {/* Large cloud formations - adjusted for bottom half */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '250px',
          borderRadius: '50% 40% 60% 30%',
          background: `radial-gradient(ellipse at 30% 40%, ${cloudColors.primary.light}, ${cloudColors.primary.medium})`,
          boxShadow: `
            inset 0 0 100px ${cloudColors.shadow.deep},
            0 0 80px ${cloudColors.shadow.medium},
            inset -50px -30px 120px ${cloudColors.shadow.light}
          `,
          filter: `blur(20px)`,
          zIndex: 0.4,
          opacity: cloudColors.primary.medium,
          animation: 'cloudDrift 25s ease-in-out infinite',
          animationDelay: '0s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '10%',
          width: '450px',
          height: '280px',
          borderRadius: '40% 50% 30% 60%',
          background: `radial-gradient(ellipse at 60% 50%, ${cloudColors.secondary.light}, ${cloudColors.secondary.medium})`,
          boxShadow: `
            inset 0 0 110px ${cloudColors.shadow.deep},
            0 0 90px ${cloudColors.shadow.medium},
            inset 50px 30px 130px ${cloudColors.shadow.light}
          `,
          filter: `blur(17px)`,
          zIndex: 0.4,
          opacity: cloudColors.secondary.medium,
          animation: 'cloudDrift 30s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '20%',
          width: '380px',
          height: '240px',
          borderRadius: '60% 30% 50% 40%',
          background: `radial-gradient(ellipse at 50% 35%, ${cloudColors.accent.light}, ${cloudColors.accent.medium})`,
          boxShadow: `
            inset 0 0 95px ${cloudColors.shadow.deep},
            0 0 75px ${cloudColors.shadow.medium},
            inset -40px 20px 115px ${cloudColors.shadow.light}
          `,
          filter: `blur(22px)`,
          zIndex: 0.4,
          opacity: cloudColors.accent.medium,
          animation: 'cloudDrift 28s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '25%',
          width: '420px',
          height: '260px',
          borderRadius: '35% 55% 45% 25%',
          background: `radial-gradient(ellipse at 45% 55%, ${cloudColors.primary.light}, ${cloudColors.primary.dark})`,
          boxShadow: `
            inset 0 0 105px ${cloudColors.shadow.deep},
            0 0 85px ${cloudColors.shadow.medium},
            inset 35px -25px 125px ${cloudColors.shadow.light}
          `,
          filter: `blur(23px)`,
          zIndex: 0.4,
          opacity: cloudColors.primary.medium,
          animation: 'cloudDrift 27s ease-in-out infinite',
          animationDelay: '1.5s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          right: '15%',
          width: '360px',
          height: '220px',
          borderRadius: '50% 30% 60% 40%',
          background: `radial-gradient(ellipse at 40% 45%, ${cloudColors.secondary.light}, ${cloudColors.secondary.dark})`,
          boxShadow: `
            inset 0 0 90px ${cloudColors.shadow.deep},
            0 0 70px ${cloudColors.shadow.medium},
            inset -45px 25px 110px ${cloudColors.shadow.light}
          `,
          filter: `blur(20px)`,
          zIndex: 0.4,
          opacity: cloudColors.secondary.medium,
          animation: 'cloudDrift 26s ease-in-out infinite',
          animationDelay: '3s',
        }}
      />

      {/* Medium cloud formations - adjusted for bottom half */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          width: '280px',
          height: '180px',
          borderRadius: '45% 35% 55% 25%',
          background: `radial-gradient(ellipse at 50% 50%, ${cloudColors.accent.light}, ${cloudColors.accent.medium})`,
          boxShadow: `
            inset 0 0 70px ${cloudColors.shadow.medium},
            0 0 60px ${cloudColors.shadow.light}
          `,
          filter: `blur(18px)`,
          zIndex: 0.4,
          opacity: cloudColors.accent.medium,
          animation: 'cloudDrift 24s ease-in-out infinite',
          animationDelay: '5s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '30%',
          width: '300px',
          height: '190px',
          borderRadius: '35% 50% 40% 60%',
          background: `radial-gradient(ellipse at 55% 40%, ${cloudColors.primary.medium}, ${cloudColors.primary.dark})`,
          boxShadow: `
            inset 0 0 75px ${cloudColors.shadow.medium},
            0 0 65px ${cloudColors.shadow.light}
          `,
          filter: `blur(19px)`,
          zIndex: 0.4,
          opacity: cloudColors.primary.medium,
          animation: 'cloudDrift 23s ease-in-out infinite',
          animationDelay: '6s',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '60%',
          width: '260px',
          height: '170px',
          borderRadius: '50% 40% 50% 30%',
          background: `radial-gradient(ellipse at 35% 50%, ${cloudColors.secondary.medium}, ${cloudColors.secondary.dark})`,
          boxShadow: `
            inset 0 0 65px ${cloudColors.shadow.medium},
            0 0 55px ${cloudColors.shadow.light}
          `,
          filter: `blur(17px)`,
          zIndex: 0.4,
          opacity: cloudColors.secondary.medium,
          animation: 'cloudDrift 22s ease-in-out infinite',
          animationDelay: '7s',
        }}
      />

      {/* Small cloud formations */}
      {cloudFormations.slice(0, 15).map((cloud) => (
        <Box
          key={cloud.id}
          sx={{
            position: 'absolute',
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
            borderRadius: `${Math.random() * 30 + 40}% ${Math.random() * 30 + 30}% ${Math.random() * 30 + 50}% ${Math.random() * 30 + 25}%`,
            background: `radial-gradient(ellipse at ${Math.random() * 100}% ${Math.random() * 100}%, 
              ${cloudColors.primary.medium}, ${cloudColors.primary.dark})`,
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
      ))}

      {/* Cloud swirls and atmospheric bands - adjusted for bottom half */}
      <svg
        viewBox="0 540 1920 540"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0.3,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <linearGradient id="venusCloudGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={cloudColors.primary.light} stopOpacity="0.3" />
            <stop offset="50%" stopColor={cloudColors.secondary.medium} stopOpacity="0.25" />
            <stop offset="100%" stopColor={cloudColors.accent.dark} stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="venusCloudGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cloudColors.highlight} stopOpacity="0.25" />
            <stop offset="100%" stopColor={cloudColors.primary.medium} stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="venusAtmosphericBand" cx="50%" cy="50%">
            <stop offset="0%" stopColor={atmosphericColors.glow.inner} stopOpacity="0.4" />
            <stop offset="100%" stopColor={atmosphericColors.glow.outer} stopOpacity="0.1" />
          </radialGradient>
        </defs>

        {/* Atmospheric band 1 - Horizontal (in bottom half) */}
        <ellipse
          cx="50%"
          cy="20%"
          rx="60%"
          ry="8%"
          fill="url(#venusAtmosphericBand)"
          opacity="0.6"
        />

        {/* Atmospheric band 2 - Horizontal (in bottom half) */}
        <ellipse
          cx="50%"
          cy="60%"
          rx="55%"
          ry="10%"
          fill="url(#venusAtmosphericBand)"
          opacity="0.5"
        />

        {/* Cloud swirl 1 - adjusted for bottom half */}
        <path
          d="M 200 0 Q 400 -50, 600 0 T 1000 0 Q 1200 -20, 1400 0 T 1800 0"
          stroke="url(#venusCloudGradient1)"
          strokeWidth="80"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
          filter="blur(12px)"
        />

        {/* Cloud swirl 2 - adjusted for bottom half */}
        <path
          d="M 100 400 Q 500 350, 900 400 T 1700 400 Q 1900 380, 1920 400"
          stroke="url(#venusCloudGradient2)"
          strokeWidth="100"
          fill="none"
          strokeLinecap="round"
          opacity="0.35"
          filter="blur(15px)"
        />

        {/* Cloud swirl 3 - Vertical (in bottom half) */}
        <path
          d="M 300 -440 Q 350 -140, 300 160 T 300 540"
          stroke="url(#venusCloudGradient1)"
          strokeWidth="70"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
          filter="blur(11px)"
        />
      </svg>

      {/* Venus Symbol - Bottom Left */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20 },
          left: { xs: 20 },
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: isDarkMode
            ? 'rgba(255, 198, 73, 0.6)'
            : 'rgba(255, 165, 0, 0.7)',
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
