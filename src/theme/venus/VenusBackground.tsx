import { Box } from '@mui/material';
import { useTheme } from '@mui/material';

// Venus surface colors (reddish-brown)
const venusBaseColor = { r: 139, g: 69, b: 19 }; // SaddleBrown
const venusSecondaryColor = { r: 160, g: 82, b: 45 }; // Sienna
const venusAccentColor = { r: 101, g: 50, b: 14 }; // Darker reddish-brown

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
      {/* Venus surface features - lava flows and volcanic terrain */}
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
          {/* Lava flow gradient */}
          <linearGradient id="lavaFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgba(255, 120, 60, ${isDarkMode ? 0.15 : 0.12})`} />
            <stop offset="50%" stopColor={`rgba(255, 100, 50, ${isDarkMode ? 0.18 : 0.15})`} />
            <stop offset="100%" stopColor={`rgba(255, 80, 40, ${isDarkMode ? 0.12 : 0.1})`} />
          </linearGradient>
          {/* Surface texture gradient */}
          <linearGradient id="surfaceTexture" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.3 : 0.2})`} />
            <stop offset="100%" stopColor={`rgba(${venusAccentColor.r}, ${venusAccentColor.g}, ${venusAccentColor.b}, ${isDarkMode ? 0.4 : 0.3})`} />
          </linearGradient>
        </defs>

        {/* Lava flow 1 - flowing from left, higher position */}
        <path
          d="M -200 820 Q 600 780, 1400 800 T 2600 780 Q 3000 760, 4040 800"
          stroke="url(#lavaFlow)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          opacity={isDarkMode ? 0.3 : 0.25}
        />

        {/* Lava flow 2 - flowing from center, lower position */}
        <path
          d="M 200 960 Q 1200 920, 2200 940 T 3200 920 Q 3600 900, 4000 940"
          stroke="url(#lavaFlow)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          opacity={isDarkMode ? 0.25 : 0.2}
        />

        {/* Surface fissures/cracks - distributed across width */}
        <path
          d="M 400 920 L 450 880 L 500 920"
          stroke={`rgba(${venusAccentColor.r}, ${venusAccentColor.g}, ${venusAccentColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="2"
          fill="none"
          opacity={isDarkMode ? 0.5 : 0.4}
        />
        <path
          d="M 1800 920 L 1850 880 L 1900 920"
          stroke={`rgba(${venusAccentColor.r}, ${venusAccentColor.g}, ${venusAccentColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="2"
          fill="none"
          opacity={isDarkMode ? 0.5 : 0.4}
        />
        <path
          d="M 3200 920 L 3250 880 L 3300 920"
          stroke={`rgba(${venusAccentColor.r}, ${venusAccentColor.g}, ${venusAccentColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="2"
          fill="none"
          opacity={isDarkMode ? 0.5 : 0.4}
        />

        {/* Volcanic rock formations - distributed across width */}
        <ellipse
          cx="1000"
          cy="900"
          rx="18"
          ry="14"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <ellipse
          cx="2400"
          cy="920"
          rx="16"
          ry="12"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <ellipse
          cx="3200"
          cy="950"
          rx="20"
          ry="16"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.4 : 0.3}
        />

        {/* V-shape rock formations - distributed across width */}
        <path
          d="M 300 850 L 350 800 L 400 850"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <path
          d="M 600 880 L 650 830 L 700 880"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <path
          d="M 1200 870 L 1250 820 L 1300 870"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <path
          d="M 1600 890 L 1650 840 L 1700 890"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <path
          d="M 2000 910 L 2050 860 L 2100 910"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <path
          d="M 2800 930 L 2850 880 L 2900 930"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <path
          d="M 3400 950 L 3450 900 L 3500 950"
          stroke={`rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, ${isDarkMode ? 0.4 : 0.3})`}
          strokeWidth="3"
          fill="none"
          opacity={isDarkMode ? 0.4 : 0.3}
        />
        <polygon
          points="800,860 820,830 840,860"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.35 : 0.25}
        />
        <polygon
          points="1400,885 1420,855 1440,885"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.35 : 0.25}
        />
        <polygon
          points="2200,905 2220,875 2240,905"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.35 : 0.25}
        />
        <polygon
          points="3000,925 3020,895 3040,925"
          fill="url(#surfaceTexture)"
          opacity={isDarkMode ? 0.35 : 0.25}
        />
      </svg>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20 },
          left: { xs: 20 },
          fontSize: { xs: '1.5rem', md: '2rem' },
          color: isDarkMode
            ? `rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, 0.6)`
            : `rgba(${venusSecondaryColor.r}, ${venusSecondaryColor.g}, ${venusSecondaryColor.b}, 0.7)`,
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

