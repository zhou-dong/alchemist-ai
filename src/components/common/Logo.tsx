import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  sx?: SxProps<Theme>;
}

const Logo: React.FC<LogoProps> = ({ width, height, color, sx }) => (
  <Box
    component="svg"
    width={width}
    height={height}
    viewBox="0 0 50 50"
    sx={sx}
  >
    {/* Abstract Vitruvian Man inspired network with A shape */}
    <g transform="translate(25, 25)">
      {/* Background lines - drawn first (behind circles) */}
      <line x1="0" y1="-16" x2="-10" y2="14" stroke={color} strokeWidth="2.5" />
      <line x1="0" y1="-16" x2="10" y2="14" stroke={color} strokeWidth="2.5" />

      {/* Arms - horizontal line with circles (moved a little lower) */}
      <circle cx="-15" cy="-3" r="5.5" fill={color} />
      <circle cx="15" cy="-3" r="5.5" fill={color} />
      <line x1="-15" y1="-3" x2="15" y2="-3" stroke={color} strokeWidth="2.5" />

      {/* Top circle (moved a little lower) */}
      <circle cx="0" cy="-16" r="5.5" fill={color} />

      {/* A shape connections - diagonal lines from top node (moved closer to center) */}
      <circle cx="-10" cy="14" r="5" fill={color} />
      <circle cx="10" cy="14" r="5" fill={color} />

      {/* Border circle around the A shape */}
      <circle cx="0" cy="0" r="24" fill="none" stroke={color} strokeWidth="2" opacity="0.6" />
    </g>
  </Box>
);

export default Logo;
