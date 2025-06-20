import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPets } from "../../../Redux/pets/myPets/myPetsOptional";
import { AppDispatch, RootState } from "../../../Redux/store";
import { PetDefaultAvatar } from "../../../Image/add-pet/pet-default-avatar";
import {
  PetCardContainer,
  PetCard,
  MainTitleandButtonContainer,
  MainTitle,
  ButtonDeletePetContainer,
  ButtonDeletePet,
  PositionContainer,
  AvatarContainer,
  PetInformationBlock,
  NamePet,
  DescNamePet,
  BirthdayPet,
  DescBirthdayPet,
  SexPet,
  DescSexPet,
  SpecialPet,
  DescSpecialPet,
} from "./showListMyPets.styled";

const ShowListMyPetsComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pets = useSelector((state: RootState) => state.PetSlice.pets);
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  useEffect(() => {}, [pets]);
  return (
    <>
      <PetCardContainer>
        {pets &&
          pets.map((pet) => (
              <PetCard key={pet.uid}>
              
                {/* Container for Title and Button delete */}
                <MainTitleandButtonContainer>
                  {/* Main Title */}
                  <div>
                    <MainTitle>{pet.title}</MainTitle>
                  </div>

                  {/* Button Delete */}
                  <ButtonDeletePetContainer>
                    <ButtonDeletePet type="button">Delete</ButtonDeletePet>
                  </ButtonDeletePetContainer>
                </MainTitleandButtonContainer>

                {/* Container for Block Information */}
                <PositionContainer>
                  {/* Avatar */}
                  <AvatarContainer>
                    <PetDefaultAvatar />
                  </AvatarContainer>
                  {/* Block Information */}
                  <PetInformationBlock>
                    {/* Name */}
                    <div>
                      <NamePet>Name</NamePet>
                      <DescNamePet>{pet.name}</DescNamePet>
                    </div>
                    {/* Birthday */}
                    <div>
                      <BirthdayPet>Birthday</BirthdayPet>
                      <DescBirthdayPet>{pet.birthday}</DescBirthdayPet>
                    </div>
                    {/* Sex */}
                    <div>
                      <SexPet>Sex</SexPet>
                      <DescSexPet>{pet.sex}</DescSexPet>
                    </div>
                    {/* Species */}
                    <div>
                      <SpecialPet>Species</SpecialPet>
                      <DescSpecialPet>{pet.petType}</DescSpecialPet>
                    </div>
                  </PetInformationBlock>
                </PositionContainer>
           
            </PetCard>
          ))}
      </PetCardContainer>
    </>
  );
};

export default ShowListMyPetsComponent;
