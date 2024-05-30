import { Grid, useTheme } from '@mui/material';
import { Menu, LocalPizzaOutlined } from '@mui/icons-material';
import { PizzaAutocomplete } from '../components/PizzaAutocomplete';
interface Props {}

export const MobileAppbar: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="start"
      alignItems="flex-start"
      sx={{
        height: '56px',
        borderBottom: `3px solid ${theme.palette.primary.main}`,
        padding: '0px 8px 0px 8px',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
      }}
    >
      <Menu fontSize="large" sx={{ alignSelf: 'center' }} />
      <LocalPizzaOutlined
        color="primary"
        fontSize="large"
        sx={{ alignSelf: 'center' }}
      />
      <Grid item sx={{ flex: 1 }}>
        <PizzaAutocomplete width="100%" />
      </Grid>
    </Grid>
  );
};
