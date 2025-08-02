import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled button with theme integration
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  textTransform: 'none',
  fontWeight: 500,
  letterSpacing: '0.01em',
  padding: theme.spacing(1.5, 3),
  fontSize: '0.875rem',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  },
}));

interface CustomButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  [key: string]: any; // Allow other props to pass through
}

export const Button = ({ children, ...props }: CustomButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button; 