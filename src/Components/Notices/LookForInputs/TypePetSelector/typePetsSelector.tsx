import { useState } from "react";
import { ChevronDownIcon } from "../../../../Image/notices/chevrondown";
import {
  TypeOfPetsContainer,
  TypeOfSelector,
  TypeTitle,
  TypeOfPetsButton,
  ShowListTypeOfPetsContainer,
  ShowListTypeOfPets,
  ScrollBar,
} from "./typePetsSElector.styled";


const TypeOfPetsSElector = ({
  selectedTypeOfPets,
  setSelectedTypeOfPets,
}: {
  selectedTypeOfPets: string;
  setSelectedTypeOfPets: (typeOfPets: string) => void;
}) => {
  // state for button chevron
  const [showMenuType, setShowMenuType] = useState(false);

  // list of type pets
  const listoftypes = [
    "Show All",
    "Dog",
    "Cat",
    "Monkey",
    "Bird",
    "Snake",
    "Turtle",
    "Lizard",
  ];

  // state for button chevron
  const toggleButton = () => {
    setShowMenuType((prev) => !prev);
  };

  // filter pets
  const selectType = (type: string) => {
    setSelectedTypeOfPets(type);
    setShowMenuType(false);
  };
  return (
    <>
      <TypeOfPetsContainer>
        {/* Selector */}
        <TypeOfSelector>
          {/* Placeholder */}
          <TypeTitle>{selectedTypeOfPets || "By Type"}</TypeTitle>
          {/* ChevronDown button + Animation */}
          <TypeOfPetsButton
            type="button"
            onClick={toggleButton}
            $showMenuType={showMenuType}
          >
            <ChevronDownIcon />
          </TypeOfPetsButton>

          {/* List of Type Pets start*/}
          {showMenuType && (
            <ShowListTypeOfPetsContainer>
              <ShowListTypeOfPets>
                <ScrollBar>
                  {listoftypes.map((type) => (
                    <li key={type} onClick={() => selectType(type)}>
                      {type}
                    </li>
                  ))}
                </ScrollBar>
              </ShowListTypeOfPets>
            </ShowListTypeOfPetsContainer>
          )}
          {/* List of Type Pets end*/}
        </TypeOfSelector>
      </TypeOfPetsContainer>
    </>
  );
};

export default TypeOfPetsSElector;
