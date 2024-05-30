import { Container } from '@mui/material';
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps';
import { PoiMarkers } from './PoiMarkers';
import { Address, Location } from '../../App';

interface Props {
  locations: Location[];
  highlighted: string | null;
}

export type Poi = {
  key: string;
  locationId: string;
  title: string;
  address: Address;
  price: string;
  rating: number;
  thumbnail: string;
  location: google.maps.LatLngLiteral;
};

export const GoogleMap: React.FC<Props> = ({ locations, highlighted }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const pinLocations: Poi[] = locations.map((location) => {
    return {
      key: location.title,
      locationId: location.locationId,
      title: location.title,
      address: location.address,
      rating: location.rating,
      price: location.price,
      thumbnail: location.thumbnail,
      location: {
        lat: location.coordinates.latitude,
        lng: location.coordinates.longitude,
      },
    };
  });

  return (
    <APIProvider
      apiKey={apiKey}
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <Container
        sx={{
          height: '100%',
          marginBottom: '.5rem',
          width: 'auto',
          display: 'contents',
        }}
        disableGutters
      >
        <Map
          defaultZoom={13}
          defaultCenter={{ lat: 30.514286414925024, lng: -97.82441450180116 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              'camera changed:',
              ev.detail.center,
              'zoom:',
              ev.detail.zoom
            )
          }
          mapId="da37f3254c6a6d1c"
        >
          <PoiMarkers pois={pinLocations} highlightedId={highlighted} />
        </Map>
      </Container>
    </APIProvider>
  );
};
