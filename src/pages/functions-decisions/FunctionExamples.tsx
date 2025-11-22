import {
  Box,
  Typography,
  Fade,
  useTheme,
} from '@mui/material';
import { TypingText } from './TypingText';

export const FunctionExamples = ({ isVisible, isDarkMode }: { isVisible: boolean, isDarkMode: boolean }) => {
  const theme = useTheme();
  // Warm, organic AI colors - "Her" style
  const warmPurple = isDarkMode ? '#9B7EDE' : '#AB8EEE';
  const softBlue = isDarkMode ? '#6BA3D8' : '#7BB3E8';

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
            background: `linear-gradient(135deg, ${warmPurple}, ${softBlue})`,
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
              color: theme.palette.text.primary,
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
              background: isDarkMode
                ? `linear-gradient(135deg, rgba(155, 126, 222, 0.08), rgba(107, 163, 216, 0.05))`
                : `linear-gradient(135deg, rgba(171, 142, 238, 0.1), rgba(123, 179, 232, 0.08))`,
              border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.2)' : 'rgba(171, 142, 238, 0.3)'}`,
              backdropFilter: 'blur(8px)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              textAlign: 'left',
              transition: 'all 0.3s ease',
              position: 'relative',
            }}
          >
            <Box component="span" sx={{ color: warmPurple, fontWeight: 500 }}>{'f('}</Box>
            <Box component="span" sx={{ color: theme.palette.text.primary }}>{'score'}</Box>
            <Box component="span" sx={{ color: warmPurple, fontWeight: 500 }}>{') = '}</Box>
            <Box component="span" sx={{ color: theme.palette.text.secondary }}>{'pass or fail'}</Box>
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
              color: theme.palette.text.primary,
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
              background: isDarkMode
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(0, 0, 0, 0.02)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              fontSize: { xs: '0.9rem', md: '1rem' },
              textAlign: 'left',
            }}
          >
            <Box component="span" sx={{ color: warmPurple, fontWeight: 500 }}>{'f('}</Box>
            <Box component="span" sx={{ color: theme.palette.text.primary }}>{'rain'}</Box>
            <Box component="span" sx={{ color: warmPurple, fontWeight: 500 }}>{') = '}</Box>
            <Box component="span" sx={{ color: theme.palette.text.secondary }}>{'umbrella or not'}</Box>
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
              color: theme.palette.text.primary,
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
              background: isDarkMode
                ? 'rgba(255, 255, 255, 0.03)'
                : 'rgba(0, 0, 0, 0.02)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              fontSize: { xs: '0.9rem', md: '1rem' },
              textAlign: 'left',
            }}
          >
            <Box component="span" sx={{ color: warmPurple, fontWeight: 500 }}>{'f('}</Box>
            <Box component="span" sx={{ color: theme.palette.text.primary }}>{'distance'}</Box>
            <Box component="span" sx={{ color: warmPurple, fontWeight: 500 }}>{') = '}</Box>
            <Box component="span" sx={{ color: theme.palette.text.secondary }}>{'action'}</Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default FunctionExamples;
