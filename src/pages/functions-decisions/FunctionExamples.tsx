import {
  Box,
  Typography,
  Fade,
  Slide,
} from '@mui/material';
import { TypingText } from './TypingText';

export const FunctionExamples = ({ isVisible, isDarkMode }: { isVisible: boolean, isDarkMode: boolean }) => {
  const aiColors = {
    warmAmber: isDarkMode ? '#FFB84D' : '#FFC966',
    softTeal: isDarkMode ? '#4ECDC4' : '#5EDDD6',
    warmPurple: isDarkMode ? '#9B7EDE' : '#AB8EEE',
    softGreen: isDarkMode ? '#6BCF7F' : '#7BDF8F',
    warmOrange: isDarkMode ? '#FF8C42' : '#FF9C52',
    softBlue: isDarkMode ? '#6BA3D8' : '#7BB3E8',
    softCyan: isDarkMode ? '#5BC8D8' : '#6BD8E8',
    text: isDarkMode ? '#F5F5F5' : '#2C2C2C',
  };

  return (
    <Fade in={isVisible} timeout={800}>
      <Box sx={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        position: 'relative',
        zIndex: 1
      }}>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >

          {/* Example 1 */}
          <Slide direction="right" in={isVisible} timeout={800}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    fontWeight: 300,
                    mb: 2,
                  }}
                >
                  <TypingText
                    text="If score > 60, pass, else fail."
                    speed={1.0}
                  />
                </Typography>
                <Box
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 300,
                    textAlign: 'center',
                    p: 2.5,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${aiColors.warmPurple}45, ${aiColors.softBlue}38)`,
                    border: `2px solid ${aiColors.warmPurple}80`,
                    boxShadow: `0 4px 20px ${aiColors.warmPurple}45`,
                    letterSpacing: '0.03em',
                  }}
                >
                  <Box component="span" sx={{ color: isDarkMode ? '#6B4FBF' : '#5B3FAF', fontWeight: 700 }}>{'f('}</Box>
                  <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 700 }}>{'score'}</Box>
                  <Box component="span" sx={{ color: isDarkMode ? '#6B4FBF' : '#5B3FAF', fontWeight: 700 }}>{') = '}</Box>
                  <Box component="span" sx={{ color: isDarkMode ? '#D88D1D' : '#C87D0D', fontWeight: 700 }}>{'pass or fail'}</Box>
                </Box>
              </Box>
            </Box>
          </Slide>

          {/* Example 2 */}
          <Slide direction="right" in={isVisible} timeout={800} style={{ transitionDelay: '300ms' }}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    fontWeight: 300,
                    mb: 2,
                  }}
                >
                  <TypingText
                    text="If it's raining (input), I take an umbrella (output)."
                    speed={1.0}
                  />
                </Typography>
                <Box
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 300,
                    textAlign: 'center',
                    p: 2.5,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${aiColors.warmOrange}20, ${aiColors.warmAmber}15)`,
                    border: `1px solid ${aiColors.warmOrange}40`,
                    boxShadow: `0 4px 20px ${aiColors.warmOrange}20`,
                    letterSpacing: '0.03em',
                  }}
                >
                  <Box component="span" sx={{ color: aiColors.warmOrange, fontWeight: 400 }}>{'f('}</Box>
                  <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'rain'}</Box>
                  <Box component="span" sx={{ color: aiColors.warmOrange, fontWeight: 400 }}>{') = '}</Box>
                  <Box component="span" sx={{ color: aiColors.softCyan, fontWeight: 400 }}>{'umbrella or not'}</Box>
                </Box>
              </Box>
            </Box>
          </Slide>

          {/* Example 3 */}
          <Slide direction="right" in={isVisible} timeout={800} style={{ transitionDelay: '600ms' }}>
            <Box
              sx={{
                p: { xs: 2, md: 3 },
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    lineHeight: 1.8,
                    fontWeight: 300,
                    mb: 2,
                  }}
                >
                  <TypingText
                    text="In sports: if distance < 3 meters, shoot; else pass."
                    speed={1.0}
                  />
                </Typography>
                <Box
                  sx={{
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 300,
                    textAlign: 'center',
                    p: 2.5,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${aiColors.softTeal}20, ${aiColors.softGreen}15)`,
                    border: `1px solid ${aiColors.softTeal}40`,
                    boxShadow: `0 4px 20px ${aiColors.softTeal}20`,
                    letterSpacing: '0.03em',
                  }}
                >
                  <Box component="span" sx={{ color: aiColors.softTeal, fontWeight: 400 }}>{'f('}</Box>
                  <Box component="span" sx={{ color: aiColors.softGreen, fontWeight: 400 }}>{'distance'}</Box>
                  <Box component="span" sx={{ color: aiColors.softTeal, fontWeight: 400 }}>{') = '}</Box>
                  <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'action'}</Box>
                </Box>
              </Box>
            </Box>
          </Slide>

        </Box>
      </Box>
    </Fade>
  );
};

export default FunctionExamples;
