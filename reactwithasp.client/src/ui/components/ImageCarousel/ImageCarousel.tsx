import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

interface Props {
  images: string[];
  height?: number;
  isHovered?: boolean;
}

export const ImageCarousel: React.FC<Props> = ({
  images,
  height,
  isHovered,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isHovered) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [isHovered]);

  return (
    <Carousel
      indicators={false}
      autoPlay={false}
      animation="slide"
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: active ? 'rgba(0,0,0,0.5)' : 'transparent',
          borderRadius: 0,
          transition: '.5s',
          margin: 0,
        },
      }}
      height={height}
    >
      {images.map((image, i) => (
        <Box
          key={i}
          sx={{
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={`./${image}`}
            //src={`data:image/jpg;base64,${image}`
            style={{
              objectFit: 'cover',
              maxHeight: '100%',
            }}
            key={i}
          />
        </Box>
      ))}
    </Carousel>
  );
};
