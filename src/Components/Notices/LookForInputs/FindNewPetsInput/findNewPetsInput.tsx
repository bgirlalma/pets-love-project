import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { useState } from "react";
import { setFilterNotices } from "../../../../Redux/notices/filterNoticesSlice";
import { CloseSvg } from "../../../../Image/userimg/close";
import { IconSearch } from "../../../../Image/search";
import {LookForPetsContainer, LookForPetsInput, IconPetsContainer} from './findNewPetsInput.styled'

const FindNewPetsInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  // беремо поточне значення фільтра
  const filterValur = useSelector((state: RootState) => state.noticesFilter);
  // локальний стан вводу
  const [inputValue, setInputValue] = useState(filterValur);

  const handleClick = () => {
    setInputValue("");
    dispatch(setFilterNotices(""));
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Escape" || e.key === "Enter") {
      dispatch(setFilterNotices(inputValue.trim()));
    }
  };

  return (
    <>
      <LookForPetsContainer>
        <LookForPetsInput
          type="text"
          name="search"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <IconPetsContainer>
          {inputValue.length > 0 ? (
            <button type="reset" aria-label="reset" onClick={handleClick}>
              <CloseSvg />
            </button>
          ) : (
            // игноруємо кнопку за доп. aria-hidden та tabIndex
            <button type="button" aria-hidden={true} tabIndex={-1}>
              <IconSearch />
            </button>
          )}
        </IconPetsContainer>
      </LookForPetsContainer>
    </>
  );
};

export default FindNewPetsInput
