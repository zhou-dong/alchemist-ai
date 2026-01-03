import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

// Venus surface colors (reddish-brown)
const venusBaseColor = { r: 139, g: 69, b: 19 };
const venusSecondaryColor = { r: 160, g: 82, b: 45 };
const venusAccentColor = { r: 101, g: 50, b: 14 };

export const VenusBackground = ({ clipPath }: { clipPath: string }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

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
        background: `radial-gradient(ellipse at 50% 70%, 
          rgba(${venusAccentColor.r}, ${venusAccentColor.g}, ${venusAccentColor.b}, ${isDarkMode ? 0.09 : 0.07}) 0%, 
          rgba(${venusSecondaryColor.r}, ${venusSecondaryColor.g}, ${venusSecondaryColor.b}, ${isDarkMode ? 0.07 : 0.06}) 50%, 
          rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.06 : 0.05}) 100%
        )`,
      }}
    >
      <svg
        viewBox="0 0 3840 1080"
        preserveAspectRatio="none"
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
          <linearGradient id="lavaFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(255, 120, 60, ${isDarkMode ? 0.15 : 0.12})`} />
            <stop offset="50%" stopColor={`rgba(255, 100, 50, ${isDarkMode ? 0.18 : 0.15})`} />
            <stop offset="100%" stopColor={`rgba(255, 80, 40, ${isDarkMode ? 0.12 : 0.1})`} />
          </linearGradient>
          <linearGradient id="surfaceTexture" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.3 : 0.2})`} />
            <stop offset="100%" stopColor={`rgba(${venusAccentColor.r}, ${venusAccentColor.g}, ${venusAccentColor.b}, ${isDarkMode ? 0.4 : 0.3})`} />
          </linearGradient>
        </defs>

        <path d="M -200 820 Q 600 780, 1400 800 T 2600 780 Q 3000 760, 4040 800" stroke="url(#lavaFlow)" strokeWidth="12" fill="none" strokeLinecap="round" opacity={isDarkMode ? 0.3 : 0.25} />
        <path d="M 200 960 Q 1200 920, 2200 940 T 3200 920 Q 3600 900, 4000 940" stroke="url(#lavaFlow)" strokeWidth="10" fill="none" strokeLinecap="round" opacity={isDarkMode ? 0.25 : 0.2} />
      </svg>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20 },
          left: { xs: 20 },
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: isDarkMode ? `rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, 0.6)` : `rgba(${venusSecondaryColor.r}, ${venusSecondaryColor.g}, ${venusSecondaryColor.b}, 0.7)`,
          fontFamily: 'serif',
          lineHeight: 1,
          zIndex: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        ♀
      </Box>
    </Box>
  );
};

