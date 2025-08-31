import { useState } from "react";
import { ChevronDownIcon } from "../../../../Image/notices/chevrondown";
import {
  GenderContainer,
  GenderSelector,
  TitleSelector,
  IconSelectorContainer,
  ShowMenuGenderContainer,
  ShowListGender,
} from "./genderSelector.styled";

const GenderCustomSelector = ({
  selectedGender,
  setSelectedGender,
}: {
  selectedGender: string;
  setSelectedGender: (gender: string) => void
}) => {
  const [showMenuGender, setShowMenuGender] = useState(false);
  const toggleGender = () => {
    setShowMenuGender((prev) => !prev);
  };

  const genders = ["Show All", "Unknown", "Female", "Male", "Multiple"];

    const selectGender = (gender: string) => {
      setSelectedGender(gender)
    setShowMenuGender(false);
  };
  return (
    <>
      <GenderContainer>
        <GenderSelector>
          <TitleSelector>{selectedGender || "By gender"}</TitleSelector>
          <IconSelectorContainer
            type="button"
            onClick={toggleGender}
            $showMenuGender={showMenuGender}
          >
            <ChevronDownIcon />
          </IconSelectorContainer>

          {showMenuGender && (
            <ShowMenuGenderContainer>
              <ShowListGender>
                {genders &&
                  genders.map((gender) => <li key={gender} onClick={() => selectGender(gender)}>{gender}</li>)}
              </ShowListGender>
            </ShowMenuGenderContainer>
          )}
        </GenderSelector>
      </GenderContainer>
    </>
  );
};

export default GenderCustomSelector;
