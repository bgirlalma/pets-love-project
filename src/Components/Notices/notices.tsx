import SearchInputcomponent from "../News/inputSearch/inputSearch"
import FindNewPetsInput from "./LookForInputs/FindNewPetsInput/findNewPetsInput";
import CustomCategorySelector from "./LookForInputs/CategorySelector/categorySelector";
import NoticesList from "./NoticesList/noticesList"
import {
  NoticesContainer,
  NoticesTitle,
  SearchContainer,
  PositionCategoryAndGenderContainer,
} from "./notices.styled";
import { useState } from "react";
import GenderCustomSelector from "./LookForInputs/GenderSelector/genderSelector";

const NoticesComponent = () => {
  // стан для фильтрации за категориею
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGender, setSelectedGender] = useState('')
    
    return (
      <NoticesContainer>
        <NoticesTitle>Find your favorite pet</NoticesTitle>
        <SearchContainer>
          <FindNewPetsInput />
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
        </SearchContainer>
        <NoticesList
          selectedCategory={selectedCategory}
          selectedGender={selectedGender}
        />
      </NoticesContainer>
    );
}

export default NoticesComponent