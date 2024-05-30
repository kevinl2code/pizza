import { Button, Grid, useTheme } from '@mui/material';
import { SecondaryAppbarActions } from './SecondaryAppbarActions';
import { SavedSearch } from '@mui/icons-material';
interface Props {}

export const SecondaryAppbar: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        height: '56px',
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
        padding: '0px 8px 0px 8px',
        [theme.breakpoints.down('lg')]: {
          display: 'none',
        },
      }}
    >
      <SecondaryAppbarActions />
      <Grid item>
        <Button
          variant="text"
          startIcon={<SavedSearch fontSize="large" />}
          sx={{ textTransform: 'none', fontSize: '16px' }}
        >
          Save Search
        </Button>
      </Grid>
    </Grid>
  );
};
