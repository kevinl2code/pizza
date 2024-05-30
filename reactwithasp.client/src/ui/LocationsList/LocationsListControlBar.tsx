import { Grid, Typography } from '@mui/material';
import { ArrowDownward, List } from '@mui/icons-material';
import { StillButton } from '../components';

export const LocationsListControlBar: React.FC = () => {
  return (
    <Grid
      sx={{ padding: '4px 0px 4px 0px' }}
      direction="row"
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={7}>
        <Typography textAlign="start" fontSize="14px">
          Map Search: 1-25 of 100 Listings
        </Typography>
      </Grid>
      <Grid item xs={5} container direction="row" justifyContent="end">
        <StillButton
          label="List"
          variant="text"
          onClick={() => {}}
          startIcon={<List color="primary" />}
        />
        <StillButton
          label="Sort"
          variant="text"
          onClick={() => {}}
          endIcon={<ArrowDownward color="primary" />}
        />
      </Grid>
    </Grid>
  );
};
