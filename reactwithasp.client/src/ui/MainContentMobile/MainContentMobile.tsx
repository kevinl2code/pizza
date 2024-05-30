import { Box, useTheme } from '@mui/material';
import { GoogleMap } from '../GoogleMap';
import { Location } from '../../App';
import { LocationsList } from '../LocationsList';
import { useState } from 'react';

interface Props {
  locations: Location[];
  selectedMobilePrimaryView: number;
}

export const MainContentMobile: React.FC<Props> = ({
  locations,
  selectedMobilePrimaryView,
}) => {
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'contents',
        [theme.breakpoints.up('lg')]: {
          display: 'none',
        },
      }}
    >
      {selectedMobilePrimaryView === 0 && (
        <GoogleMap locations={locations} highlighted={highlighted} />
      )}
      {selectedMobilePrimaryView === 1 && (
        <LocationsList locations={locations} setHighlighted={setHighlighted} />
      )}
    </Box>
  );
};
