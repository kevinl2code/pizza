import { useState } from 'react';
import { Poi } from './GoogleMap';
import { PoiMarker } from './PoiMarker';

interface Props {
  pois: Poi[];
  highlightedId: string | null;
}

export const PoiMarkers: React.FC<Props> = ({ pois, highlightedId }) => {
  const [openWindowId, setOpenWindowId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {pois.map((poi: Poi, index) => {
        return (
          <PoiMarker
            poi={poi}
            highlightedId={highlightedId}
            openWindowId={openWindowId}
            setOpenWindowId={setOpenWindowId}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            key={index}
          />
        );
      })}
    </>
  );
};
