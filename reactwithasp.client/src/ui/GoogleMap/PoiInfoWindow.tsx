import { Box, ClickAwayListener, Grid, Typography } from '@mui/material';
import { InfoWindow } from '@vis.gl/react-google-maps';
import { FavoriteButton } from '../components/FavoriteButton';
import { Poi } from './GoogleMap';

interface Props {
  marker: google.maps.marker.AdvancedMarkerElement | null;
  poi: Poi;
  handleCloseInfoWindow: () => void;
}

export const PoiInfoWindow: React.FC<Props> = ({
  marker,
  poi,
  handleCloseInfoWindow,
}) => {
  return (
    <ClickAwayListener onClickAway={handleCloseInfoWindow}>
      <Box>
        <InfoWindow
          anchor={marker}
          headerDisabled
          style={{
            padding: '0px',
            height: '260px',
            width: '300px',
            overflow: 'hidden',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <img
                //src={`data:image/jpg;base64,${poi.thumbnail}`}
                src={`./${poi.thumbnail}`}
                style={{
                  objectFit: 'cover',
                  maxHeight: '100%',
                }}
              />
            </Grid>
            <Grid item container sx={{ height: '76px' }} direction="row">
              <Grid
                item
                container
                direction="column"
                xs={10}
                justifyContent="space-between"
              >
                <Typography fontWeight={500}>{poi.title}</Typography>
                <Typography fontSize="14px">
                  {`${poi.price}`} &#9679; {`${poi.rating} stars`}
                </Typography>
                <Typography fontSize="14px">{poi.address.street}</Typography>
              </Grid>
              <Grid
                item
                xs={2}
                container
                justifyContent="flex-end"
                alignItems="flex-start"
                sx={{ mt: '4px' }}
              >
                <FavoriteButton isFavorite={false} onClick={() => null} />
              </Grid>
            </Grid>
          </Grid>
        </InfoWindow>
      </Box>
    </ClickAwayListener>
  );
};
