import {
  AdvancedMarker,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { LocalPizzaTwoTone } from '@mui/icons-material';
import { Poi } from './GoogleMap';
import { PoiInfoWindow } from './PoiInfoWindow';
interface Props {
  poi: Poi;
  highlightedId: string | null;
  openWindowId: string | null;
  setOpenWindowId: (id: string | null) => void;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
}

export const PoiMarker: React.FC<Props> = ({
  poi,
  highlightedId,
  openWindowId,
  setOpenWindowId,
  hoveredId,
  setHoveredId,
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const isHighlighted =
    poi.locationId === highlightedId || poi.locationId === hoveredId;

  const handleCloseInfoWindow = () => {
    setOpenWindowId(null);
    setHoveredId(null);
  };

  return (
    <AdvancedMarker
      key={poi.key}
      position={poi.location}
      ref={markerRef}
      onClick={() => setOpenWindowId(poi.locationId)}
    >
      {openWindowId !== poi.locationId && (
        <LocalPizzaTwoTone
          color={isHighlighted ? 'primary' : 'error'}
          fontSize="large"
          onMouseEnter={() => setHoveredId(poi.locationId)}
          onMouseLeave={() => setHoveredId(null)}
        />
      )}
      {openWindowId === poi.locationId && (
        <PoiInfoWindow
          marker={marker}
          poi={poi}
          handleCloseInfoWindow={handleCloseInfoWindow}
        />
      )}
    </AdvancedMarker>
  );
};
