import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import { Grid, Typography } from '@mui/material';

export const PizzaLogo: React.FC = () => {
  return (
    <Grid item container sx={{ height: '40px', width: '150px' }}>
      <LocalPizzaOutlinedIcon color="primary" fontSize="large" />
      <Typography variant="h5">Pizza.pie</Typography>
    </Grid>
  );
};
