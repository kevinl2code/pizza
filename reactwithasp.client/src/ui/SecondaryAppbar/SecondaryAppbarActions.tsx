import { Grid } from '@mui/material';
import { PizzaAutocomplete } from '../components/PizzaAutocomplete';
import { StillButton } from '../components';
import { ExpandMore, LooksOne } from '@mui/icons-material';

export const SecondaryAppbarActions: React.FC = () => {
  return (
    <Grid item xs={10} container sx={{ height: '100%' }}>
      <PizzaAutocomplete width={388} />
      <Grid item>
        <Grid container alignItems="center" sx={{ height: '100%' }}>
          <StillButton
            label="Price"
            endIcon={
              <ExpandMore
                color="primary"
                sx={{ ml: '-6px', '&.MuiSvgIcon-root': { fontSize: '25px' } }}
              />
            }
            variant="outlined"
            sx={{
              py: '6px',
              width: '132px',
              borderRadius: '0px',
              ml: '5px',
            }}
          />
          <StillButton
            label="Rating"
            endIcon={
              <ExpandMore
                color="primary"
                sx={{ ml: '-6px', '&.MuiSvgIcon-root': { fontSize: '25px' } }}
              />
            }
            variant="outlined"
            sx={{ py: '6px', width: '132px', borderRadius: '0px', ml: '5px' }}
          />
          <StillButton
            label="More Filters"
            endIcon={
              <LooksOne
                color="primary"
                sx={{ ml: '-6px', '&.MuiSvgIcon-root': { fontSize: '25px' } }}
              />
            }
            variant="outlined"
            sx={{
              p: '6px 10px',
              width: '125px',
              borderRadius: '0px',
              ml: '5px',
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
