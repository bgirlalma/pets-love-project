import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedPet, fetchPets } from "../../../Redux/pets/myPets/myPetsOptional";
import { AppDispatch, RootState } from "../../../Redux/store";
import { PetDefaultAvatar } from "../../../Image/add-pet/pet-default-avatar";
import {
  PetContainer,
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
import { TrashSvg } from "../../../Image/trash";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";


const ShowListMyPetsComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pets = useSelector((state: RootState) => state.PetSlice.pets);
  const isLoading = useSelector((state: RootState) => state.PetSlice.loading);
  const currentUser = useSelector((state: RootState) => state.userAuth);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Пользователь авторизован:", user.uid);
    } else {
      console.log("Пользователь не авторизован");
    }
  });

  useEffect(() => {
        dispatch(fetchPets());
   
  }, [dispatch]);

  useEffect(() => { }, [pets]);
  
  const handleDelete = (petsId: string): void => {
    if (!currentUser?.user?.uid) return;
    dispatch(deletedPet({ petId: petsId, uid: currentUser.user.uid })).unwrap().then(() => {
      // після успішного видалення 
      dispatch(fetchPets())
    }).catch((error: any) => {
       console.error("Failed to delete pet:", error);
    })
  }
  return (
    <PetContainer>
      <PetCardContainer>
        {pets &&
          pets.map((pet) => (
            <PetCard key={pet.petId}>
              {/* Container for Title and Button delete */}
              <MainTitleandButtonContainer>
                {/* Main Title */}
                <div>
                  <MainTitle>{pet.title}</MainTitle>
                </div>

                {/* Button Delete */}
                <ButtonDeletePetContainer>
                  <ButtonDeletePet
                    type="button"
                    onClick={() => handleDelete(pet.petId)}
                  >
                    <TrashSvg />
                  </ButtonDeletePet>
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
    </PetContainer>
  );
};

export default ShowListMyPetsComponent;
