import { Grid, useTheme } from '@mui/material';
import { PrimaryAppbarDropdownMenu } from './PrimaryAppbarDropdownMenu';

import { PrimaryAppbarActions } from './PrimaryAppbarActions';
import { PizzaLogo } from '../components';
interface Props {}

export const PrimaryAppbar: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: '56px',
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        minWidth: '-webkit-fill-available',
        [theme.breakpoints.down('lg')]: {
          display: 'none',
        },
      }}
    >
      <PrimaryAppbarDropdownMenu />
      <PizzaLogo />
      <PrimaryAppbarActions />
    </Grid>
  );
};
