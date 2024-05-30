import { Typography, useTheme } from '@mui/material';

interface Props {
  label: string;
  showUnderline?: boolean;
  onClick: () => void;
}

export const TypographyButton: React.FC<Props> = ({
  label,
  showUnderline = true,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Typography
      onClick={onClick}
      sx={{
        borderBottom: `1px solid transparent`,
        '&.MuiTypography-root:hover': {
          borderBottom: showUnderline
            ? `1px solid ${theme.palette.primary.main}`
            : null,
        },
        cursor: 'pointer',
      }}
      fontSize="16px"
      display="inline"
    >
      {label}
    </Typography>
  );
};
