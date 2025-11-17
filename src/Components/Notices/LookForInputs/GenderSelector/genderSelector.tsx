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
  setSelectedGender: (gender: string) => void;
  }) => {
    // state for button chevron
    const [showMenuGender, setShowMenuGender] = useState<boolean>(false);

    // state for button chevron
    const toggleGender = () : void => {
      setShowMenuGender((prev) => !prev);
    };
// list of gender
    const genders = ["Show All", "Unknown", "Female", "Male", "Multiple"];

  // filter list gender
    const selectGender = (gender: string) : void => {
      setSelectedGender(gender);
      setShowMenuGender(false);
    };
    return (
      <>
        <GenderContainer>
          {/* Selector */}
          <GenderSelector>
            {/* Placeholder */}
            <TitleSelector>{selectedGender || "By gender"}</TitleSelector>
            {/* ChevronDown button + Animation */}
            <IconSelectorContainer
              type="button"
              onClick={toggleGender}
              $showMenuGender={showMenuGender}
            >
              <ChevronDownIcon />
            </IconSelectorContainer>

            {/* List of gender Pets start */}
            {showMenuGender && (
              <ShowMenuGenderContainer>
                <ShowListGender>
                  {genders &&
                    genders.map((gender) => (
                      <li key={gender} onClick={() => selectGender(gender)}>
                        {gender}
                      </li>
                    ))}
                </ShowListGender>
              </ShowMenuGenderContainer>
            )}
            {/* List of gender Pets end */}
          </GenderSelector>
        </GenderContainer>
      </>
    );
  };

export default GenderCustomSelector;
