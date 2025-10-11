import { Location, NavLink, useLocation, useNavigate } from "react-router-dom";
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
  ContactButton,
} from "./modalNotices.styled";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import { WhiteStarIcon } from "../../../Image/notices/pet-profile/starwhite";
import { YellowStartIcon } from "../../../Image/notices/pet-profile/Staryellow";

interface PetType {
  uid?: string;
  title?: string;
  name?: string;
  birthday?: string;
  sex?: string;
  species?: string;
  category?: string;
  city?: string;
  rating?: number;
  price?: number;
  desc?: string;
  image?: string;
}

interface LocalStateProp {
  pet: PetType;
}

const ModalNotices = () => {
  const location = useLocation() as Location & { state?: LocalStateProp };
  const [closeMenu, setCloseMenu] = useState(false);
  const navigate = useNavigate();
  const pet = location.state?.pet;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = [1, 2, 3, 4, 5];

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
          {/* Rating */}
          <RatingContainer>
            {stars.map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                {(rating) >= star ? (
                  <YellowStartIcon />
                ) : (
                  <WhiteStarIcon />
                )}
              </button>
            ))}
            <RatingTitle>{rating }</RatingTitle>
          </RatingContainer>
          {/* Title */}
          <PetTitle>{pet.title}</PetTitle>

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
            <AddToButton type="button">
              Add to <span></span>
            </AddToButton>
            <ContactButton type="button">Contact</ContactButton>
          </PetButtonsContainer>
        </DataContainer>
      </ModalContainer>
    </MOdalOverlay>
  );
};

export default ModalNotices;
