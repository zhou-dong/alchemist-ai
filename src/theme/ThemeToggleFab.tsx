import { Fab } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useColorMode } from './ColorModeContext';

interface ThemeToggleFabProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export const ThemeToggleFab: React.FC<ThemeToggleFabProps> = ({ 
  position = 'bottom-right' 
}) => {
  const { mode, toggleColorMode } = useColorMode();

  const positionStyles = {
    'bottom-right': { bottom: 24, right: 24 },
    'bottom-left': { bottom: 24, left: 24 },
    'top-right': { top: 24, right: 24 },
    'top-left': { top: 24, left: 24 },
  };

  return (
    <Fab
      color="primary"
      aria-label="toggle theme"
      onClick={toggleColorMode}
      sx={{
        position: 'fixed',
        ...positionStyles[position],
        zIndex: 1000,
      }}
    >
      {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </Fab>
  );
};

