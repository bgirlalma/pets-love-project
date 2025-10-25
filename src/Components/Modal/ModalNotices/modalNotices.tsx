import { Location, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseSvg } from "../../../Image/userimg/close";
import {
  MOdalOverlay,
  ModalContainer,
  PositionIcon,
  DataContainer,
  ImageContainer,
  RatingContainer,
  RatingTitle,
  CategoryPet,
  PetTitle,
  PetInformationContainer,
  PetDesc,
  PriceContainer,
  PetPrice,
  PetButtonsContainer,
  AddToButton,
  RemoveButton,
  ContactButton,
} from "./modalNotices.styled";
import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { WhiteStarIcon } from "../../../Image/notices/pet-profile/starwhite";
import { YellowStartIcon } from "../../../Image/notices/pet-profile/Staryellow";
import { HeartYellowIcon } from "../../../Image/notices/pet-profile/heartYellow";
import { HeartWhiteIcon } from "../../../Image/notices/pet-profile/heartWhite";
import { AppDispatch, RootState } from "../../../Redux/store";
import {
  AddToFavorite,
  DeleteFavoritePet,
  FetchFavoritePets,
  TypeOfPets,
  UpdatePetRating,
} from "../../../Redux/pets/myPets/favoritePets/myFavoritePetsOptional";
import { Notify } from "notiflix";
import { auth } from "../../../firebase/firebase";
import { TrashSvg } from "../../../Image/trash";

interface PetType extends Partial<TypeOfPets> {}

interface LocalStateProp {
  pet: PetType;
}

const ModalNotices = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { favorites } = useSelector((state: RootState) => state.favorites);

  // зміна іконки при ховері
  const [hoverFavorite, setHoverFavorite] = useState(false);

  const location = useLocation() as Location & { state?: LocalStateProp };
  const [closeMenu, setCloseMenu] = useState(false);
  const navigate = useNavigate();
  const pet = location.state?.pet;
  const isFavorite = location.pathname.startsWith("/profile");
  const showAddToFavorite = location.pathname.startsWith("/notices");

  const [rating, setRating] = useState(0);

  const user = auth.currentUser;

  // Подгружаем избранное при монтировании
  useEffect(() => {
    if (user) {
      dispatch(FetchFavoritePets(user.uid));
    }
  }, [dispatch, user]);

  const handleAddToFavorite = async () => {
    if (!pet || !pet.uid) return;

    const isFavorite = favorites.some((f) => f.uid === pet.uid);

    if (isFavorite) {
      return Notify.info("Ця тваринка вже в списку ваших улюблених ❤️");
    }

    try {
      await dispatch(AddToFavorite({ pet })).unwrap();
      setCloseMenu(true);
      navigate(-1);
    } catch (error) {
      console.error(error);
      Notify.failure(
        "Не вдалося додати тваринку в улюблене. Спробуйте ще раз."
      );
    }
  };

  const handleRemoveFromFavorite = async () => {
    if (!pet || !pet.uid || !user) return;
    await dispatch(DeleteFavoritePet({ pet })).unwrap();
    setCloseMenu(true);
    navigate(-1);
  };

  const stars = [1, 2, 3, 4, 5];

  const handleSetRating = async (star: number) => {
    setRating(star);

    if (!pet || !pet.uid) return;

    try {
      await dispatch(
        UpdatePetRating({ petId: pet.uid, rating: star })
      ).unwrap();
      Notify.success("Рейтинг успішно збережено!");
    } catch (error) {
      console.error("Failed to save rating:", error);
      Notify.failure("Не вдалося зберегти рейтинг. Спробуйте ще раз.");
    }
  };

  const handleClose = () => {
    setCloseMenu(true);
    // повертаємося на попередню сторінку
    navigate(-1);
  };
  if (closeMenu) return null; // если закрыто — ничего не показываем
  if (!pet) return null;

  return (
    <MOdalOverlay onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <PositionIcon onClick={handleClose}>
          <CloseSvg />
        </PositionIcon>
        <DataContainer>
          <ImageContainer>
            <CategoryPet>{pet.category}</CategoryPet>
            <img src={pet.image} alt="pet photo" />
          </ImageContainer>

          {/* Title */}
          <PetTitle>{pet.title}</PetTitle>
          {/* Rating */}
          <RatingContainer>
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleSetRating(star)}
              >
                {rating >= star ? <YellowStartIcon /> : <WhiteStarIcon />}
              </button>
            ))}
            <RatingTitle>{rating}</RatingTitle>
          </RatingContainer>

          {/* Inforamtion block */}
          <PetInformationContainer>
            <div>
              <span>Name</span>
              <h3>{pet.name}</h3>
            </div>
            <div>
              <span>Birthday</span>
              <h3>{pet.birthday}</h3>
            </div>
            <div>
              <span>Sex</span>
              <h3>{pet.sex}</h3>
            </div>
            <div>
              <span>Species</span>
              <h3>{pet.species}</h3>
            </div>
          </PetInformationContainer>

          <PetDesc>{pet.desc}</PetDesc>
          <PriceContainer>
            <FaDollarSign />
            <PetPrice>{pet.price}</PetPrice>
          </PriceContainer>

          <PetButtonsContainer>
            {showAddToFavorite && (
              <AddToButton
                type="button"
                onClick={handleAddToFavorite}
                onMouseEnter={() => setHoverFavorite(true)}
                onMouseLeave={() => setHoverFavorite(false)}
              >
                Add to
                <span>
                  {hoverFavorite ? (
                    <HeartYellowIcon /> // оранжевое сердце
                  ) : (
                    <HeartWhiteIcon /> // белое сердце
                  )}
                </span>
              </AddToButton>
            )}
            {isFavorite && (
              <RemoveButton type="button" onClick={handleRemoveFromFavorite}>
                <TrashSvg />
              </RemoveButton>
            )}
            <ContactButton type="button">Contact</ContactButton>
          </PetButtonsContainer>
        </DataContainer>
      </ModalContainer>
    </MOdalOverlay>
  );
};

export default ModalNotices;
