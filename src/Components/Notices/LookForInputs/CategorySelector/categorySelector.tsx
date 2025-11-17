import { useState } from "react";
import { ChevronDownIcon } from "../../../../Image/notices/chevrondown";
import {
  CategoryContainer,
  CategorySelector,
  TitleSelector,
  IconSelectorContainer,
  ShowMenuCategoryContainer,
  ShowListCategory,
} from "./categorySelector.styled";
const CustomCategorySelector = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const categories = ["Show All", "Sell", "Free", "Lost", "Found"];

  const togglemenu = () => {
    setShowMenu((prev) => !prev);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setShowMenu(false);
  };
  return (
    <>
      <CategoryContainer>
        <CategorySelector>
          <TitleSelector>{selectedCategory  || "Category"}</TitleSelector>
          <IconSelectorContainer
            type="button"
            onClick={togglemenu}
            $showMenu={showMenu}
          >
            <ChevronDownIcon />
          </IconSelectorContainer>

          {showMenu && (
            <ShowMenuCategoryContainer>
              <ShowListCategory>
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => selectCategory(category)}
                    >{ category}</li>
                ))}
              </ShowListCategory>
            </ShowMenuCategoryContainer>
          )}
        </CategorySelector>
      </CategoryContainer>
    </>
  );
};

export default CustomCategorySelector;
