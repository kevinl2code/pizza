import { Button, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  label?: string;
}

export const StillButton: React.FC<Props> = ({
  label,
  onClick,
  startIcon,
  endIcon,
  sx,
  variant,
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        ...sx,
        textTransform: 'none',
        '&.MuiButton-root:hover': { bgcolor: 'transparent' },
        '&.MuiButton-text': {
          fontSize: '16px',
          fontWeight: 400,
          color: 'black',
        },
        '&.MuiButton-outlined': {
          color: 'black',
        },
      }}
    >
      {label}
    </Button>
  );
};
