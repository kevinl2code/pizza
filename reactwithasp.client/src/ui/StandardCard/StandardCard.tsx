import { Paper, Grid, Typography, useTheme } from '@mui/material';
import { Location } from '../../App';
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel';
import { useState } from 'react';
import { FavoriteButton } from '../components/FavoriteButton';

interface Props {
  location: Location;
  setHighlighted: (locationId: string | null) => void;
}

export const StandardCard: React.FC<Props> = ({ location, setHighlighted }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { locationId, title, description, favorite, address, images, contact } =
    location;
  const { city, state, postalCode } = address;
  const theme = useTheme();
  const cardHeight = 256;
  return (
    <Paper
      elevation={0}
      sx={{
        height: cardHeight,
        borderRadius: '6px',
        width: '100%',
        marginBottom: '1rem',
        border: `2px solid ${theme.palette.grey[400]}`,
        '&:hover': {
          border: `2px solid ${theme.palette.info.main}`,
          transition: '1s',
        },
        overflow: 'hidden',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setHighlighted(locationId);
      }}
      onMouseLeave={() => {
        setHighlighted(null);
        setIsHovered(false);
      }}
    >
      <Grid container direction="row" sx={{ height: cardHeight }}>
        <Grid item xs={5} sx={{ overflow: 'hidden' }}>
          <ImageCarousel
            images={images}
            isHovered={isHovered}
            height={cardHeight}
          />
        </Grid>
        <Grid
          item
          container
          xs={7}
          direction="column"
          justifyContent="space-between"
          sx={{ padding: '12px', height: '100%' }}
        >
          <Grid item container>
            <Grid item xs={10}>
              <Typography textAlign="start" fontSize="16px" fontWeight={600}>
                {title}
              </Typography>
              <Typography
                textAlign="start"
                fontSize="14px"
              >{`${city}, ${state}, ${postalCode}`}</Typography>
            </Grid>
            <Grid
              item
              container
              xs={2}
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <FavoriteButton isFavorite={favorite} onClick={() => null} />
            </Grid>
          </Grid>

          <Grid item>
            <Typography textAlign="start" fontSize="14px">
              {description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography textAlign="start" fontSize={14} fontWeight={600}>
              Contact
            </Typography>
            <Typography textAlign="start" fontSize={14}>
              {contact}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
