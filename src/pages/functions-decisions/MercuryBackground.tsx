import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMemo, useEffect } from 'react';

export const MercuryBackground = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Theme-aware colors for Mercury surface features
  const craterColors = {
    border: isDarkMode
      ? { large: 'rgba(200, 180, 160, 0.35)', medium: 'rgba(200, 180, 160, 0.3)', small: 'rgba(200, 180, 160, 0.25)' }
      : { large: 'rgba(200, 180, 160, 0.2)', medium: 'rgba(200, 180, 160, 0.18)', small: 'rgba(200, 180, 160, 0.15)' },
    shadow: isDarkMode
      ? { inset: 'rgba(180, 160, 140, 0.25)', outer: 'rgba(200, 180, 160, 0.2)', deep: 'rgba(180, 160, 140, 0.2)' }
      : { inset: 'rgba(180, 160, 140, 0.12)', outer: 'rgba(200, 180, 160, 0.1)', deep: 'rgba(180, 160, 140, 0.1)' },
    opacity: isDarkMode ? 0.4 : 0.25,
  };

  const scarpColors = {
    shadow: isDarkMode
      ? { start: 'rgba(180, 160, 140, 0.25)', end: 'rgba(180, 160, 140, 0.1)' }
      : { start: 'rgba(180, 160, 140, 0.12)', end: 'rgba(180, 160, 140, 0.05)' },
    face: isDarkMode
      ? { top: 'rgba(200, 180, 160, 0.3)', bottom: 'rgba(180, 160, 140, 0.35)' }
      : { top: 'rgba(200, 180, 160, 0.15)', bottom: 'rgba(190, 170, 150, 0.18)' },
    highlight: isDarkMode
      ? 'rgba(220, 200, 180, 0.35)'
      : 'rgba(220, 200, 180, 0.2)',
    edgeShadow: isDarkMode
      ? 'rgba(180, 160, 140, 0.25)'
      : 'rgba(180, 160, 140, 0.12)',
    shadowOpacity: isDarkMode ? 0.45 : 0.25,
    faceOpacity: isDarkMode ? 0.5 : 0.3,
    highlightOpacity: isDarkMode ? 0.65 : 0.4,
    edgeShadowOpacity: isDarkMode ? 0.45 : 0.25,
  };

  // Generate stars for the dark sky
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.3,
      animationDelay: Math.random() * 3,
      animationDuration: Math.random() * 2 + 2,
    }));
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes starTwinkle {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.4;
          transform: scale(0.9);
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
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {/* Stars in the dark sky */}
      {stars.map((star) => (
        <Box
          key={star.id}
          sx={{
            position: 'absolute',
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: isDarkMode ? '#FFFFFF' : '#E0E0E0',
            borderRadius: '50%',
            opacity: star.opacity,
            boxShadow: isDarkMode
              ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6)`
              : `0 0 ${star.size * 2}px rgba(224, 224, 224, 0.4)`,
            animation: `starTwinkle ${star.animationDuration}s ease-in-out infinite`,
            animationDelay: `${star.animationDelay}s`,
            zIndex: 0.3,
          }}
        />
      ))}

      {/* Mercury Surface Features - Craters and Scarps */}
      {/* Large Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '55%',
          left: '10%',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          border: `10px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 120px ${craterColors.shadow.inset},
            0 0 60px ${craterColors.shadow.outer},
            inset 0 0 200px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: `12px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 140px ${craterColors.shadow.inset},
            0 0 70px ${craterColors.shadow.outer},
            inset 0 0 240px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '35%',
          right: '10%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: `8px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 90px ${craterColors.shadow.inset},
            0 0 44px ${craterColors.shadow.outer},
            inset 0 0 150px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '52%',
          right: '40%',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          border: `6px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 70px ${craterColors.shadow.inset},
            0 0 36px ${craterColors.shadow.outer},
            inset 0 0 120px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '50%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          border: `10px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 110px ${craterColors.shadow.inset},
            0 0 56px ${craterColors.shadow.outer},
            inset 0 0 190px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Medium Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '58%',
          left: '45%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: `6px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 50px ${craterColors.shadow.inset},
            0 0 24px ${craterColors.shadow.outer},
            inset 0 0 80px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '70%',
          left: '30%',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          border: `5px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 40px ${craterColors.shadow.inset},
            0 0 20px ${craterColors.shadow.outer},
            inset 0 0 70px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '40%',
          right: '35%',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          border: `6px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 56px ${craterColors.shadow.inset},
            0 0 28px ${craterColors.shadow.outer},
            inset 0 0 90px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Small Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '55%',
          left: '15%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: `4px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 30px ${craterColors.shadow.inset},
            0 0 16px ${craterColors.shadow.outer},
            inset 0 0 50px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '75%',
          right: '20%',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: `4px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 36px ${craterColors.shadow.inset},
            0 0 20px ${craterColors.shadow.outer},
            inset 0 0 60px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '62%',
          left: '60%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: `3px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 24px ${craterColors.shadow.inset},
            0 0 12px ${craterColors.shadow.outer},
            inset 0 0 40px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '35%',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: `4px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 28px ${craterColors.shadow.inset},
            0 0 14px ${craterColors.shadow.outer},
            inset 0 0 46px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Additional Large Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '72%',
          left: '25%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: `8px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 90px ${craterColors.shadow.inset},
            0 0 44px ${craterColors.shadow.outer},
            inset 0 0 150px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '64%',
          right: '30%',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: `8px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 90px ${craterColors.shadow.inset},
            0 0 40px ${craterColors.shadow.outer},
            inset 0 0 140px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          right: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `10px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 100px ${craterColors.shadow.inset},
            0 0 50px ${craterColors.shadow.outer},
            inset 0 0 170px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '12%',
          right: '20%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          border: `8px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 90px ${craterColors.shadow.inset},
            0 0 44px ${craterColors.shadow.outer},
            inset 0 0 150px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Additional Medium Craters */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '35%',
          left: '60%',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          border: `6px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 56px ${craterColors.shadow.inset},
            0 0 28px ${craterColors.shadow.outer},
            inset 0 0 90px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Additional Small Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '70%',
          right: '45%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: `3px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 24px ${craterColors.shadow.inset},
            0 0 12px ${craterColors.shadow.outer},
            inset 0 0 40px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '18%',
          left: '70%',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: `4px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 28px ${craterColors.shadow.inset},
            0 0 14px ${craterColors.shadow.outer},
            inset 0 0 46px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Scarps (Long Curved Cliffs) */}
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
          {/* Gradient for scarp shadow */}
          <linearGradient id="scarpShadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={scarpColors.shadow.start} />
            <stop offset="100%" stopColor={scarpColors.shadow.end} />
          </linearGradient>
          {/* Gradient for scarp highlight */}
          <linearGradient id="scarpHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={scarpColors.highlight} />
            <stop offset="100%" stopColor={isDarkMode ? 'rgba(200, 180, 160, 0.05)' : 'rgba(220, 200, 180, 0.03)'} />
          </linearGradient>
          {/* Gradient for scarp face */}
          <linearGradient id="scarpFace" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={scarpColors.face.top} />
            <stop offset="100%" stopColor={scarpColors.face.bottom} />
          </linearGradient>
        </defs>

        {/* Scarp 1 - Curved from left to center (bottom half) */}
        {/* Shadow side (below the scarp) */}
        <path
          d="M 0 640 Q 200 690, 400 660 T 600 640 L 600 690 Q 400 720, 200 740 T 0 690 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 0 640 Q 200 690, 400 660 T 600 640 L 600 660 Q 400 680, 200 670 T 0 650 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 0 640 Q 200 690, 400 660 T 600 640"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 0 650 Q 200 700, 400 670 T 600 650"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 2 - Curved from center-right to bottom */}
        {/* Shadow side */}
        <path
          d="M 800 640 Q 900 740, 1000 840 T 1200 1000 L 1250 1000 Q 1050 860, 950 760 T 850 640 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 800 640 Q 900 740, 1000 840 T 1200 1000 L 1200 1020 Q 1000 880, 900 780 T 800 660 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 800 640 Q 900 740, 1000 840 T 1200 1000"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 810 650 Q 910 750, 1010 850 T 1210 1010"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 3 - Horizontal curved scarp (bottom half) */}
        {/* Shadow side (below) */}
        <path
          d="M 300 740 Q 500 720, 700 740 T 1100 760 L 1100 810 Q 700 790, 500 770 T 300 790 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 300 740 Q 500 720, 700 740 T 1100 760 L 1100 780 Q 700 760, 500 740 T 300 760 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 300 740 Q 500 720, 700 740 T 1100 760"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 310 750 Q 510 730, 710 750 T 1110 770"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 5 - Vertical curved scarp (bottom half) */}
        {/* Shadow side (left) */}
        <path
          d="M 1620 540 Q 1570 740, 1620 940 T 1620 1080 L 1570 1080 Q 1520 940, 1570 740 T 1570 540 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 1620 540 Q 1570 740, 1620 940 T 1620 1080 L 1600 1080 Q 1550 940, 1600 740 T 1600 540 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 1620 540 Q 1570 740, 1620 940 T 1620 1080"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 1610 550 Q 1560 750, 1610 950 T 1610 1090"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />
      </svg>
    </Box>
  );
};

