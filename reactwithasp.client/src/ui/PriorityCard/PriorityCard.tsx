import { Paper, Grid, Typography, useTheme } from '@mui/material';
import { Location } from '../../App';
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel';
import { useState } from 'react';
import { FavoriteButton } from '../components/FavoriteButton';

interface Props {
  location: Location;
  setHighlighted: (locationId: string | null) => void;
}

export const PriorityCard: React.FC<Props> = ({ location, setHighlighted }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    locationId,
    title,
    price,
    rating,
    description,
    favorite,
    address,
    images,
    contact,
  } = location;
  const { city, state, postalCode } = address;
  const theme = useTheme();
  const cardHeight = 556;
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
      <Grid container direction="column" sx={{ height: cardHeight }}>
        <Grid item container sx={{ padding: '12px' }}>
          <Grid item xs={10}>
            <Typography textAlign="start" fontSize="16px" fontWeight={600}>
              {title}
            </Typography>
            <Typography
              textAlign="start"
              fontSize="14px"
            >{`${city}, ${state}, ${postalCode}`}</Typography>
          </Grid>
          <Grid item container xs={2} justifyContent="flex-end">
            <FavoriteButton isFavorite={favorite} onClick={() => null} />
          </Grid>
        </Grid>
        <Grid item sx={{ overflow: 'hidden' }}>
          <ImageCarousel images={images} isHovered={isHovered} height={360} />
        </Grid>
        <Grid item container direction="row" sx={{ padding: '12px', flex: 1 }}>
          <Grid
            item
            xs={4}
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography fontWeight={500} fontSize="16px">
                Cost: {price}
              </Typography>
              <Typography fontSize="14px">{rating} stars</Typography>
            </Grid>{' '}
            <Grid item>
              <Typography textAlign="start" fontSize={14} fontWeight={600}>
                Contact
              </Typography>
              <Typography textAlign="start" fontSize={14}>
                {contact}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              borderLeft: `1px solid ${theme.palette.grey[400]}`,
              paddingLeft: '24px',
            }}
          >
            <Typography textAlign="start" fontSize="14px">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
