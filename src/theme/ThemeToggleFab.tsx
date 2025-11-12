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
    'bottom-right': { bottom: 20, right: 20 },
    'bottom-left': { bottom: 20, left: 20 },
    'top-right': { top: 20, right: 20 },
    'top-left': { top: 20, left: 20 },
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

