import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';

// Starfield component - creates a realistic starry background using CSS
export const Starfield = ({ clipPath }: { clipPath?: string }) => {
  const starCount = 200; // Number of stars

  // Star colors based on mode
  const starColor = '#FFFFFF';
  const starGlowColor = 'rgba(255, 255, 255, 0.8)'; // Bright glow for dark, subtle for light

  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100, // Stars fill the entire container (which is 50% height when topHalfOnly is true)
      size: Math.random() * 2 + 0.5, // Random size between 0.5px and 2.5px
      opacity: Math.random() * 0.8 + 0.2, // Random opacity between 0.2 and 1.0
      animationDelay: Math.random() * 3, // Random twinkle delay
      animationDuration: Math.random() * 2 + 2, // Random twinkle duration 2-4s
    }));
  }, []);

  useEffect(() => {
    // Add keyframes to document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes starTwinkle {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.3;
          transform: scale(0.8);
        }
      }
    `;
    document.head.appendChild(style);

    // Note: We don't remove the style on unmount since other Starfield instances might be using it
    // The style will persist for the lifetime of the app, which is fine for keyframes
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...(clipPath && {
          clipPath: clipPath,
          WebkitClipPath: clipPath,
        }),
      }}
    >
      {stars.map((star) => (
        <Box
          key={star.id}
          sx={{
            position: 'absolute',
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: starColor,
            borderRadius: '50%',
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px ${starGlowColor}`,
            animation: `starTwinkle ${star.animationDuration}s ease-in-out infinite`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
    </Box>
  );
};

