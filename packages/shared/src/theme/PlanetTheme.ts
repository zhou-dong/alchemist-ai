import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { ComponentType } from 'react';
import type { TypographyProps, BoxProps, ButtonProps } from '@mui/material';

// Base color structure
export interface RgbColor {
  r: number;
  g: number;
  b: number;
}

// RGBA color structure (RGB + alpha channel)
export interface RgbaColor extends RgbColor {
  a: number;
}

// Planet theme interface
export interface PlanetTheme {
  // Base color
  baseColor: RgbColor;

  // Styled components
  DialogBox: React.ComponentType<BoxProps & { isDarkMode: boolean }>;
  GradientButton: React.ComponentType<ButtonProps>;
  GradientTypography: React.ComponentType<TypographyProps>;

  // Background component
  Background: ComponentType<{ clipPath: string }>;
}

export interface PlanetThemeProps {
  baseColor: RgbColor;
  primary: RgbaColor;
  secondary: RgbaColor;
  accent: RgbaColor;
  highlight: RgbaColor;
  shadow: RgbaColor;

  background: ComponentType<{ clipPath: string }>;
}

export function buildRgba({ r, g, b, a }: RgbaColor): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const buildDialogBox = (baseColor: RgbColor): React.ComponentType<BoxProps & { isDarkMode: boolean }> => {

  const borderDark: RgbaColor = { ...baseColor, a: 0.3 };
  const borderLight: RgbaColor = { ...baseColor, a: 0.4 };
  const boxShadowDark: RgbaColor = { ...baseColor, a: 0.2 };
  const boxShadowLight: RgbaColor = { ...baseColor, a: 0.25 };

  return styled(Box)<{ isDarkMode: boolean }>(({ isDarkMode }) => ({
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '24px',
    lineHeight: 1.8,
    p: { xs: 3, md: 4 },
    textAlign: 'left',
    backdropFilter: 'blur(2px)',
    border: `1px solid ${isDarkMode ? buildRgba(borderDark) : buildRgba(borderLight)}`,
    boxShadow: `0 8px 32px ${isDarkMode ? buildRgba(boxShadowDark) : buildRgba(boxShadowLight)}`,
  }));
}


const buildGradientButton = ({ primary, secondary, accent, highlight }: PlanetThemeProps): React.ComponentType<ButtonProps> => {

  const primaryRgba = buildRgba(primary);
  const secondaryRgba = buildRgba(secondary);
  const accentRgba = buildRgba(accent);
  const highlightRgba = buildRgba(highlight);

  return styled(Button)({
    fontSize: '1.2rem',
    backgroundImage: `linear-gradient(135deg, ${primaryRgba}, ${secondaryRgba}, ${accentRgba}, ${highlightRgba})`,
    '&::before': {
      background: `linear-gradient(135deg, ${primaryRgba}, ${secondaryRgba}, ${accentRgba}, ${highlightRgba})`,
    },
    '&:hover': {
      backgroundImage: `linear-gradient(135deg, ${primaryRgba}, ${secondaryRgba}, ${accentRgba}, ${highlightRgba})`,
    },
    '& .MuiButton-endIcon': {
      color: primaryRgba,
    },
    '& .MuiButton-startIcon': {
      color: primaryRgba,
    },
    '&:disabled': {
      backgroundImage: `linear-gradient(135deg, ${primaryRgba}, ${secondaryRgba}, ${accentRgba}, ${highlightRgba})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      opacity: 0.5,
      '& .MuiButton-startIcon': {
        color: primaryRgba,
        opacity: 0.5,
      },
    },
    '&:disabled:hover': {
      backgroundImage: `linear-gradient(135deg, ${primaryRgba}, ${secondaryRgba}, ${accentRgba}, ${highlightRgba})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  });
}

const buildGradientTypography = ({ baseColor, primary, secondary, accent, highlight }: PlanetThemeProps): React.ComponentType<TypographyProps> => {

  const primaryRgba = buildRgba(primary);
  const secondaryRgba = buildRgba(secondary);
  const accentRgba = buildRgba(accent);
  const highlightRgba = buildRgba(highlight);
  const shadowRgba = buildRgba({ r: baseColor.r, g: baseColor.g, b: baseColor.b, a: 0.4 }); // 0.4 is the default shadow opacity

  return styled(Typography)({
    textAlign: 'center',
    background: `linear-gradient(135deg, ${primaryRgba}, ${secondaryRgba}, ${accentRgba}, ${highlightRgba})`,
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: `drop-shadow(0 0 20px ${shadowRgba})`,
  });
}

export class PlanetThemeBuilder {

  private props: PlanetThemeProps;

  constructor(props: PlanetThemeProps) {
    this.props = props;
  }

  get DialogBox() {
    return buildDialogBox(this.props.baseColor);
  }

  get GradientButton() {
    return buildGradientButton(this.props);
  }

  get GradientTypography() {
    return buildGradientTypography(this.props);
  }

  get Background() {
    return this.props.background;
  }

}

// Planet type for theme switching
export type PlanetType = 'mercury' | 'venus';

