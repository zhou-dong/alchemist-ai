import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

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
    opacity: isDarkMode ? 0.65 : 0.4,
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

  const textureColors = isDarkMode
    ? {
        color1: 'rgba(200, 180, 160, 0.2)',
        color2: 'rgba(220, 200, 180, 0.15)',
        color3: 'rgba(200, 180, 160, 0.15)',
        color4: 'rgba(220, 200, 180, 0.12)',
        color5: 'rgba(190, 170, 150, 0.12)',
      }
    : {
        color1: 'rgba(200, 180, 160, 0.08)',
        color2: 'rgba(220, 200, 180, 0.06)',
        color3: 'rgba(200, 180, 160, 0.06)',
        color4: 'rgba(220, 200, 180, 0.05)',
        color5: 'rgba(190, 170, 150, 0.05)',
      };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // Mercury-themed background - theme aware
        background: isDarkMode
          ? `linear-gradient(135deg, #C8B89C 0%, #D4C4A8 25%, #C8B89C 50%, #B8A88C 75%, #C8B89C 100%)`
          : `linear-gradient(135deg, #D4C4A8 0%, #E0D0B4 25%, #D4C4A8 50%, #C8B89C 75%, #D4C4A8 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode
            ? `
              radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.18) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(200, 180, 160, 0.22) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, transparent 60%),
              radial-gradient(circle at 10% 80%, rgba(200, 180, 160, 0.18) 0%, transparent 50%),
              radial-gradient(circle at 90% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)
            `
            : `
              radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(212, 196, 168, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.06) 0%, transparent 60%),
              radial-gradient(circle at 10% 80%, rgba(212, 196, 168, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 20%, rgba(245, 158, 11, 0.07) 0%, transparent 50%)
            `,
          zIndex: 0,
          animation: 'gradientShift 12s ease-in-out infinite'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode
            ? `
              radial-gradient(ellipse at 30% 40%, rgba(200, 180, 160, 0.35) 0%, transparent 40%),
              radial-gradient(ellipse at 70% 60%, rgba(220, 200, 180, 0.28) 0%, transparent 40%)
            `
            : `
              radial-gradient(ellipse at 30% 40%, rgba(212, 196, 168, 0.15) 0%, transparent 40%),
              radial-gradient(ellipse at 70% 60%, rgba(220, 200, 180, 0.12) 0%, transparent 40%)
            `,
          zIndex: 0,
          opacity: isDarkMode ? 0.65 : 0.4,
          animation: 'gradientShift 15s ease-in-out infinite reverse'
        }
      }}
    >
      {/* Mercury Surface Features - Craters and Scarps */}
      {/* Large Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: `5px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 60px ${craterColors.shadow.inset},
            0 0 30px ${craterColors.shadow.outer},
            inset 0 0 100px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: `4px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 45px ${craterColors.shadow.inset},
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
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: `6px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 70px ${craterColors.shadow.inset},
            0 0 35px ${craterColors.shadow.outer},
            inset 0 0 120px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: `5px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 50px ${craterColors.shadow.inset},
            0 0 25px ${craterColors.shadow.outer},
            inset 0 0 85px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '25%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: `3px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 30px ${craterColors.shadow.inset},
            0 0 15px ${craterColors.shadow.outer},
            inset 0 0 50px ${craterColors.shadow.deep}
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
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          border: `4px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 45px ${craterColors.shadow.inset},
            0 0 22px ${craterColors.shadow.outer},
            inset 0 0 75px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '40%',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          border: `3px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 35px ${craterColors.shadow.inset},
            0 0 18px ${craterColors.shadow.outer},
            inset 0 0 60px ${craterColors.shadow.deep}
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
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          border: `5px solid ${craterColors.border.large}`,
          boxShadow: `
            inset 0 0 55px ${craterColors.shadow.inset},
            0 0 28px ${craterColors.shadow.outer},
            inset 0 0 95px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Medium Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '45%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: `3px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 25px ${craterColors.shadow.inset},
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
          top: '70%',
          left: '30%',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: `2.5px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 20px ${craterColors.shadow.inset},
            0 0 10px ${craterColors.shadow.outer},
            inset 0 0 35px ${craterColors.shadow.deep}
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
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          border: `3px solid ${craterColors.border.medium}`,
          boxShadow: `
            inset 0 0 28px ${craterColors.shadow.inset},
            0 0 14px ${craterColors.shadow.outer},
            inset 0 0 45px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />

      {/* Small Craters */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '15%',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: `2px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 15px ${craterColors.shadow.inset},
            0 0 8px ${craterColors.shadow.outer},
            inset 0 0 25px ${craterColors.shadow.deep}
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
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          border: `2px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 18px ${craterColors.shadow.inset},
            0 0 10px ${craterColors.shadow.outer},
            inset 0 0 30px ${craterColors.shadow.deep}
          `,
          zIndex: 0.5,
          opacity: craterColors.opacity,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '60%',
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          border: `1.5px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 12px ${craterColors.shadow.inset},
            0 0 6px ${craterColors.shadow.outer},
            inset 0 0 20px ${craterColors.shadow.deep}
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
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: `2px solid ${craterColors.border.small}`,
          boxShadow: `
            inset 0 0 14px ${craterColors.shadow.inset},
            0 0 7px ${craterColors.shadow.outer},
            inset 0 0 23px ${craterColors.shadow.deep}
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

        {/* Scarp 1 - Curved from top-left to center */}
        {/* Shadow side (below the scarp) */}
        <path
          d="M 0 100 Q 200 150, 400 120 T 600 100 L 600 150 Q 400 180, 200 200 T 0 150 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 0 100 Q 200 150, 400 120 T 600 100 L 600 120 Q 400 140, 200 130 T 0 110 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 0 100 Q 200 150, 400 120 T 600 100"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 0 110 Q 200 160, 400 130 T 600 110"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 2 - Curved from center-right to bottom */}
        {/* Shadow side */}
        <path
          d="M 800 200 Q 900 400, 1000 600 T 1200 800 L 1250 800 Q 1050 620, 950 420 T 850 200 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 800 200 Q 900 400, 1000 600 T 1200 800 L 1200 820 Q 1000 640, 900 440 T 800 220 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 800 200 Q 900 400, 1000 600 T 1200 800"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 810 210 Q 910 410, 1010 610 T 1210 810"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 3 - Horizontal curved scarp */}
        {/* Shadow side (below) */}
        <path
          d="M 300 500 Q 500 480, 700 500 T 1100 520 L 1100 570 Q 700 550, 500 530 T 300 550 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 300 500 Q 500 480, 700 500 T 1100 520 L 1100 540 Q 700 520, 500 500 T 300 520 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 300 500 Q 500 480, 700 500 T 1100 520"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 310 510 Q 510 490, 710 510 T 1110 530"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 4 - Diagonal scarp */}
        {/* Shadow side */}
        <path
          d="M 100 600 Q 300 650, 500 700 T 900 750 L 950 780 Q 550 730, 350 680 T 150 630 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 100 600 Q 300 650, 500 700 T 900 750 L 900 770 Q 500 720, 300 670 T 100 620 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 100 600 Q 300 650, 500 700 T 900 750"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 110 610 Q 310 660, 510 710 T 910 760"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />

        {/* Scarp 5 - Vertical curved scarp */}
        {/* Shadow side (left) */}
        <path
          d="M 1620 0 Q 1570 200, 1620 400 T 1620 800 L 1570 800 Q 1520 400, 1570 200 T 1570 0 Z"
          fill="url(#scarpShadow)"
          opacity={scarpColors.shadowOpacity}
        />
        {/* Cliff face */}
        <path
          d="M 1620 0 Q 1570 200, 1620 400 T 1620 800 L 1600 800 Q 1550 400, 1600 200 T 1600 0 Z"
          fill="url(#scarpFace)"
          opacity={scarpColors.faceOpacity}
        />
        {/* Top edge highlight */}
        <path
          d="M 1620 0 Q 1570 200, 1620 400 T 1620 800"
          stroke={scarpColors.highlight}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.highlightOpacity}
        />
        {/* Bottom edge shadow */}
        <path
          d="M 1610 10 Q 1560 210, 1610 410 T 1610 810"
          stroke={scarpColors.edgeShadow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity={scarpColors.edgeShadowOpacity}
        />
      </svg>

      {/* Additional Texture Layer - Small surface variations */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 25% 35%, ${textureColors.color1} 0%, transparent 35%),
            radial-gradient(circle at 75% 65%, ${textureColors.color2} 0%, transparent 35%),
            radial-gradient(circle at 45% 80%, ${textureColors.color3} 0%, transparent 30%),
            radial-gradient(circle at 15% 60%, ${textureColors.color4} 0%, transparent 25%),
            radial-gradient(circle at 85% 25%, ${textureColors.color3} 0%, transparent 30%),
            radial-gradient(circle at 60% 15%, ${textureColors.color4} 0%, transparent 25%),
            radial-gradient(circle at 35% 50%, ${textureColors.color5} 0%, transparent 20%),
            radial-gradient(circle at 65% 70%, ${textureColors.color1} 0%, transparent 22%)
          `,
          zIndex: 0.4,
          opacity: isDarkMode ? 0.7 : 0.5,
        }}
      />
    </Box>
  );
};

