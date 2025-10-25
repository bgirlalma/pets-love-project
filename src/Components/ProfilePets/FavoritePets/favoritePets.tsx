
import { FavoriteButtonPets } from "./favoritePets.styled";

const FavoritePets = ({
  handleClickFavoriteButton,
}: {
  handleClickFavoriteButton: () => void;
}) => {
  return (
    <>
      <FavoriteButtonPets type="button" onClick={handleClickFavoriteButton}>
        Favorite Pets
      </FavoriteButtonPets>
    </>
  );
};

export default FavoritePets