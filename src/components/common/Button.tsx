import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled button with theme integration
const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  textTransform: 'none',
  fontWeight: 600,
}));

interface CustomButtonProps extends ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ children, ...props }: CustomButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button; 