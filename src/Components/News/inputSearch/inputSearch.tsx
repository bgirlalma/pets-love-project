import { IconSearch } from "../../../Image/search";
import {
  InputSearchContainer,
  SearchInput,
  IconContainer,
} from "./inputSearch.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { setFilter } from "../../../Redux/news/filterNewsSlice";
import { CloseSvg } from "../../../Image/userimg/close";
import { useState } from "react";


const SearchInputcomponent = () => {
  // Отримуємо dispatch, щоб відправляти екшени в Redux.
  const dispatch = useDispatch<AppDispatch>();
  // беремо поточне значення фільтра
  const filterValur = useSelector((state: RootState) => state.NewsFilterPets);
  // локальний стан вводу
  const [inputValue, setInputValue] = useState(filterValur);

  const handleCleanClick = () => {
    setInputValue("");
    dispatch(setFilter(""));
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape" || e.key === "Enter") {
      dispatch(setFilter(inputValue.trim()));
    }
  };

  return (
    <>
      <InputSearchContainer>
        <SearchInput
          type="text"
          name="search"
          placeholder="Search"
          // значення, яке синхронізоване з Redux.
          value={inputValue}
          // при введенні в інпут, відправляємо екшен в Redux і оновлюємо значення
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <IconContainer>
          {inputValue.length > 0 ? (
            <button type="reset" onClick={handleCleanClick} aria-label="Reset">
              <CloseSvg />
            </button>
          ) : (
            // игноруємо кнопку за доп. aria-hidden та tabIndex
            <button type="button" aria-hidden={true} tabIndex={-1}>
              <IconSearch />
            </button>
          )}
        </IconContainer>
      </InputSearchContainer>
    </>
  );
};

export default SearchInputcomponent;
