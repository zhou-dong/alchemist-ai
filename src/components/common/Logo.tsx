import React from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

interface LogoProps {
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
}

const Logo: React.FC<LogoProps> = ({ width, height, sx }) => (
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
      <line x1="-15" y1="-6" x2="15" y2="-6" stroke="#6366f1" strokeWidth="3" />
      <line x1="0" y1="-16" x2="-12" y2="12" stroke="#6366f1" strokeWidth="2.5" />
      <line x1="0" y1="-16" x2="12" y2="12" stroke="#6366f1" strokeWidth="2.5" />

      {/* Arms - horizontal line with circles (moved a little higher) */}
      <circle cx="-15" cy="-6" r="5.5" fill="#6366f1" />
      <circle cx="15" cy="-6" r="5.5" fill="#6366f1" />
      <line x1="-15" y1="-6" x2="15" y2="-6" stroke="#6366f1" strokeWidth="2.5" />

      {/* Top circle (moved a little lower) */}
      <circle cx="0" cy="-16" r="5.5" fill="#6366f1" />

      {/* A shape connections - diagonal lines from top node (moved closer to center) */}
      <circle cx="-12" cy="12" r="5" fill="#6366f1" />
      <circle cx="12" cy="12" r="5" fill="#6366f1" />

      {/* Border circle around the A shape */}
      <circle cx="0" cy="0" r="24" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
    </g>
  </Box>
);

export default Logo;
