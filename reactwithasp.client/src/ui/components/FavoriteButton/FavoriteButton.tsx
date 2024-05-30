import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { useState } from 'react';

interface Props {
  isFavorite: boolean;
  onClick: () => void;
}

export const FavoriteButton: React.FC<Props> = ({ isFavorite, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const showFilled = hovered || isFavorite;

  return showFilled ? (
    <Favorite
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      color="error"
      fontSize="large"
    />
  ) : (
    <FavoriteBorderOutlined
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      fontSize="large"
    />
  );
};
