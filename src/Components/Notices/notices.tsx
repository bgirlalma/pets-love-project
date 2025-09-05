
import FindNewPetsInput from "./LookForInputs/FindNewPetsInput/findNewPetsInput";
import CustomCategorySelector from "./LookForInputs/CategorySelector/categorySelector";
import NoticesList from "./NoticesList/noticesList"
import {
  NoticesContainer,
  NoticesTitle,
  SearchContainer,
  DekstopPositionContainer,
  TabletPositionContainer,
  CustomLineContainer,
  PositionCategoryAndGenderContainer,
} from "./notices.styled";
import { useState } from "react";
import GenderCustomSelector from "./LookForInputs/GenderSelector/genderSelector";
import TypeOfPetsSElector from "./LookForInputs/TypePetSelector/typePetsSelector";
import LocationInput from "./LookForInputs/LocationInput/locationInput";
import RadioFilterButtons from "./LookForInputs/RadioButtons/radioButtons";

const NoticesComponent = () => {
  // стан для фильтрации за категориею
  const [selectedCategory, setSelectedCategory] = useState("");
  // стан для фильтрации за гендером
  const [selectedGender, setSelectedGender] = useState("");
  // стан для фильтрации за типом
  const [selectedTypeOfPets, setSelectedTypeOfPets] = useState("");


  return (
    <NoticesContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      {/* Container for search start */}
      <SearchContainer>
        <DekstopPositionContainer>
          <FindNewPetsInput />
          {/* Container of Look for pets and Gender start */}
          <PositionCategoryAndGenderContainer>
            <CustomCategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <GenderCustomSelector
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          </PositionCategoryAndGenderContainer>
          {/* Container of Look for pets and Gender end */}

          <TabletPositionContainer>
            {/* Type of Pets */}
            <TypeOfPetsSElector
              selectedTypeOfPets={selectedTypeOfPets}
              setSelectedTypeOfPets={setSelectedTypeOfPets}
            />

            {/* Location Pets */}
            <LocationInput />
          </TabletPositionContainer>
        </DekstopPositionContainer>
        {/* Custom line */}
        <CustomLineContainer></CustomLineContainer>

        {/* Sort Buttons Pets */}
        <RadioFilterButtons />
      </SearchContainer>
      {/* Container for search end */}

      {/* List of pets */}
      <NoticesList
        selectedCategory={selectedCategory}
        selectedGender={selectedGender}
        selectedTypeOfPets={selectedTypeOfPets}
      />
    </NoticesContainer>
  );
}

export default NoticesComponent