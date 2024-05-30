import { Container, useTheme } from '@mui/material';
import { Location } from '../../App';
import { StandardCard } from '../StandardCard/StandardCard';
import { LocationsListControlBar } from './LocationsListControlBar';
import { PriorityCard } from '../PriorityCard';

interface Props {
  locations: Location[];
  setHighlighted: (locationId: string | null) => void;
}

export const LocationsList: React.FC<Props> = ({
  locations,
  setHighlighted,
}) => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        backgroundColor: theme.palette.grey[200],
        overflow: 'auto',
        height: '100%',
      }}
    >
      <LocationsListControlBar />
      {locations.map((location, i) => {
        if (location.isSpecial) {
          return (
            <PriorityCard
              location={location}
              key={`card-${i}`}
              setHighlighted={setHighlighted}
            />
          );
        }
        return (
          <StandardCard
            location={location}
            key={`card-${i}`}
            setHighlighted={setHighlighted}
          />
        );
      })}
    </Container>
  );
};
