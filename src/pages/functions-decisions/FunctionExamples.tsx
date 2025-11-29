import {
  Box,
  Typography,
  Fade,
} from '@mui/material';
import { TypingText } from '../../components/common/TypingText';
import { mercuryThemeProps } from '../../theme/mercury';
const { baseColor: mercuryBaseColor } = mercuryThemeProps;

export const FunctionExamples = ({ isVisible, isDarkMode }: { isVisible: boolean, isDarkMode: boolean }) => {
  // Mercury's characteristic gray-brown colors derived from MercuryTheme
  const mercuryPrimary = isDarkMode
    ? `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.6)`
    : `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.5)`;
  const mercurySecondary = isDarkMode
    ? `rgba(${mercuryBaseColor.r - 20}, ${mercuryBaseColor.g - 20}, ${mercuryBaseColor.b - 20}, 0.5)`
    : `rgba(${mercuryBaseColor.r - 20}, ${mercuryBaseColor.g - 20}, ${mercuryBaseColor.b - 20}, 0.4)`;

  // Mercury colors for backgrounds
  const mercuryBgPrimary = isDarkMode
    ? `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.08)`
    : `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.1)`;
  const mercuryBgSecondary = isDarkMode
    ? `rgba(${mercuryBaseColor.r - 20}, ${mercuryBaseColor.g - 20}, ${mercuryBaseColor.b - 20}, 0.05)`
    : `rgba(${mercuryBaseColor.r - 20}, ${mercuryBaseColor.g - 20}, ${mercuryBaseColor.b - 20}, 0.08)`;
  const mercuryBorder = isDarkMode
    ? `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.2)`
    : `rgba(${mercuryBaseColor.r + 20}, ${mercuryBaseColor.g + 20}, ${mercuryBaseColor.b + 20}, 0.3)`;

  // Mercury text colors
  const mercuryTextPrimary = `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 1)`;
  const mercuryTextSecondary = `rgba(${mercuryBaseColor.r - 15}, ${mercuryBaseColor.g - 15}, ${mercuryBaseColor.b - 15}, 0.8)`;

  return (
    <Fade in={isVisible} timeout={800}>
      <Box sx={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        zIndex: 1,
      }}>
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 400,
            letterSpacing: '0.05em',
            background: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            mb: 1,
          }}
        >
          Examples of Functions
        </Typography>

        {/* Example 1 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 300,
              lineHeight: 1.6,
              color: mercuryTextPrimary,
            }}
          >
            <TypingText
              text="If score > 60, pass, else fail."
              speed={1.0}
            />
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${mercuryBgPrimary}, ${mercuryBgSecondary})`,
              border: `1px solid ${mercuryBorder}`,
              backdropFilter: 'blur(8px)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              textAlign: 'left',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
          >
            <Box component="span" sx={{ color: mercuryPrimary, fontWeight: 500 }}>{'f('}</Box>
            <Box component="span" sx={{ color: mercuryTextPrimary }}>{'score'}</Box>
            <Box component="span" sx={{ color: mercuryPrimary, fontWeight: 500 }}>{') = '}</Box>
            <Box component="span" sx={{ color: mercuryTextSecondary }}>{'pass or fail'}</Box>
          </Box>
        </Box>

        {/* Example 2 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 300,
              lineHeight: 1.6,
              color: mercuryTextPrimary,
            }}
          >
            <TypingText
              text="If it's raining (input), I take an umbrella (output)."
              speed={1.0}
            />
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${mercuryBgPrimary}, ${mercuryBgSecondary})`,
              border: `1px solid ${mercuryBorder}`,
              fontSize: { xs: '0.9rem', md: '1rem' },
              textAlign: 'left',
            }}
          >
            <Box component="span" sx={{ color: mercuryPrimary, fontWeight: 500 }}>{'f('}</Box>
            <Box component="span" sx={{ color: mercuryTextPrimary }}>{'rain'}</Box>
            <Box component="span" sx={{ color: mercuryPrimary, fontWeight: 500 }}>{') = '}</Box>
            <Box component="span" sx={{ color: mercuryTextSecondary }}>{'umbrella or not'}</Box>
          </Box>
        </Box>

        {/* Example 3 */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 300,
              lineHeight: 1.6,
              color: mercuryTextPrimary,
            }}
          >
            <TypingText
              text="In sports: if distance < 3 meters, shoot; else pass."
              speed={1.0}
            />
          </Typography>
          <Box
            sx={{
              p: 3,
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${mercuryBgPrimary}, ${mercuryBgSecondary})`,
              border: `1px solid ${mercuryBorder}`,
              fontSize: { xs: '0.9rem', md: '1rem' },
              textAlign: 'left',
            }}
          >
            <Box component="span" sx={{ color: mercuryPrimary, fontWeight: 500 }}>{'f('}</Box>
            <Box component="span" sx={{ color: mercuryTextPrimary }}>{'distance'}</Box>
            <Box component="span" sx={{ color: mercuryPrimary, fontWeight: 500 }}>{') = '}</Box>
            <Box component="span" sx={{ color: mercuryTextSecondary }}>{'action'}</Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default FunctionExamples;
