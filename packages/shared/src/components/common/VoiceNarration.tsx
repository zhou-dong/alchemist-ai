import { useState } from 'react';
import { Box, IconButton, Tooltip, Menu, MenuItem, Typography, Slider, Chip } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import StopIcon from '@mui/icons-material/Stop';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import { useSpeech } from '../../hooks/useSpeech';

/**
 * Check if a voice is considered "premium" quality
 * Google voices are the best, followed by Microsoft Neural, then others
 */
function isPremiumVoice(name: string): boolean {
  // Google voices are top tier
  if (/^Google /i.test(name)) {
    return true;
  }
  // Microsoft Neural/Online voices are great
  if (/microsoft.*online|neural/i.test(name)) {
    return true;
  }
  // Other enhanced voices
  if (/natural|premium|enhanced|wavenet/i.test(name)) {
    return true;
  }
  // macOS voices are NOT premium (they sound robotic compared to Google)
  return false;
}

/**
 * Format voice name for display
 */
function formatVoiceName(name: string): string {
  return name
    .replace(/Microsoft |Google |Apple |\(Natural\)|\(Enhanced\)/gi, '')
    .replace(/ Online$/i, '')
    .trim();
}

export interface VoiceNarrationProps {
  /** The text content to be narrated */
  content: string;
  /** Position of the floating button */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Custom styles */
  sx?: object;
}

/**
 * VoiceNarration - Floating button component for text-to-speech narration
 * 
 * @example
 * <VoiceNarration 
 *   content="Welcome to Theta Sketch. This is a probabilistic data structure..."
 *   position="top-right"
 * />
 */
export const VoiceNarration = ({ 
  content, 
  position = 'top-right',
  sx = {}
}: VoiceNarrationProps) => {
  const [rate, setRate] = useState(0.9);
  const [settingsAnchor, setSettingsAnchor] = useState<null | HTMLElement>(null);
  
  const { 
    speak, 
    stop, 
    pause, 
    resume, 
    isSpeaking, 
    isPaused, 
    isSupported,
    voices,
    currentVoice,
    setVoice,
  } = useSpeech({ rate });

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  const positionStyles = {
    'top-left': { top: 80, left: 20 },
    'top-right': { top: 80, right: 80 },
    'bottom-left': { bottom: 80, left: 20 },
    'bottom-right': { bottom: 80, right: 20 },
  };

  const handlePlayPause = () => {
    if (isSpeaking && !isPaused) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      speak(content);
    }
  };

  const handleStop = () => {
    stop();
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchor(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchor(null);
  };

  // Filter to English voices for simplicity
  const englishVoices = voices.filter(v => v.lang.startsWith('en'));

  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        p: 1,
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        ...positionStyles[position],
        ...sx,
      }}
    >
      {/* Play/Pause Button */}
      <Tooltip title={isSpeaking ? (isPaused ? 'Resume' : 'Pause') : 'Listen to page'}>
        <IconButton
          onClick={handlePlayPause}
          sx={{
            color: isSpeaking ? 'primary.main' : 'text.primary',
            bgcolor: isSpeaking ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
            '&:hover': {
              bgcolor: 'rgba(99, 102, 241, 0.3)',
            },
          }}
        >
          {isSpeaking && !isPaused ? (
            <PauseIcon />
          ) : isSpeaking && isPaused ? (
            <PlayArrowIcon />
          ) : (
            <VolumeUpIcon />
          )}
        </IconButton>
      </Tooltip>

      {/* Stop Button - only show when speaking */}
      {isSpeaking && (
        <Tooltip title="Stop">
          <IconButton
            onClick={handleStop}
            sx={{
              color: 'error.main',
              '&:hover': {
                bgcolor: 'rgba(239, 68, 68, 0.2)',
              },
            }}
          >
            <StopIcon />
          </IconButton>
        </Tooltip>
      )}

      {/* Settings Button */}
      <Tooltip title="Voice settings">
        <IconButton
          onClick={handleSettingsClick}
          sx={{
            color: 'text.secondary',
            '&:hover': {
              bgcolor: 'rgba(99, 102, 241, 0.2)',
            },
          }}
        >
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* Settings Menu */}
      <Menu
        anchorEl={settingsAnchor}
        open={Boolean(settingsAnchor)}
        onClose={handleSettingsClose}
        PaperProps={{
          sx: {
            p: 2,
            minWidth: 280,
            backdropFilter: 'blur(10px)',
            bgcolor: 'background.paper',
          },
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
          Voice Settings
        </Typography>

        {/* Speed Control */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
            Speed: {rate.toFixed(1)}x
          </Typography>
          <Slider
            value={rate}
            onChange={(_, value) => setRate(value as number)}
            min={0.5}
            max={2}
            step={0.1}
            size="small"
            sx={{ width: '100%' }}
          />
        </Box>

        {/* Voice Selection */}
        {englishVoices.length > 0 && (
          <Box>
            <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
              Voice {currentVoice && isPremiumVoice(currentVoice.name) && (
                <Chip 
                  size="small" 
                  label="Premium" 
                  icon={<StarIcon sx={{ fontSize: 12 }} />}
                  sx={{ 
                    ml: 1, 
                    height: 20, 
                    fontSize: '0.7rem',
                    bgcolor: 'rgba(251, 191, 36, 0.2)',
                    color: 'warning.main',
                    '& .MuiChip-icon': { color: 'warning.main' }
                  }} 
                />
              )}
            </Typography>
            {englishVoices.slice(0, 8).map((voice) => {
              const premium = isPremiumVoice(voice.name);
              return (
                <MenuItem
                  key={voice.name}
                  selected={currentVoice?.name === voice.name}
                  onClick={() => {
                    setVoice(voice);
                    handleSettingsClose();
                  }}
                  sx={{ 
                    fontSize: '0.875rem', 
                    py: 0.75,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {premium && (
                    <StarIcon sx={{ fontSize: 14, color: 'warning.main' }} />
                  )}
                  <span style={{ flex: 1 }}>{formatVoiceName(voice.name)}</span>
                  <Typography 
                    component="span" 
                    sx={{ fontSize: '0.7rem', color: 'text.disabled', ml: 1 }}
                  >
                    {voice.lang}
                  </Typography>
                </MenuItem>
              );
            })}
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default VoiceNarration;

