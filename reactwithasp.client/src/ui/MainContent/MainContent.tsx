import { Box, Grid, useTheme } from '@mui/material';
import { Location } from '../../App';
import { GoogleMap } from '../GoogleMap';
import { LocationsList } from '../LocationsList';
import { useState } from 'react';
interface Props {
  locations: Location[];
}

export const MainContent: React.FC<Props> = ({ locations }) => {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const theme = useTheme();
  return (
    <Box sx={{ display: 'contents' }}>
      <Grid
        item
        container
        direction="column"
        alignItems="stretch"
        sx={{
          flex: 1,
        }}
      >
        <GoogleMap locations={locations} highlighted={highlighted} />
      </Grid>
      <Grid
        overflow="auto"
        sx={{
          height: '100%',
          maxWidth: '860px',
          [theme.breakpoints.up('xl')]: {
            width: '860px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '50%',
          },
          [theme.breakpoints.down('lg')]: {
            display: 'none',
          },
        }}
      >
        <LocationsList locations={locations} setHighlighted={setHighlighted} />
      </Grid>
    </Box>
  );
};
