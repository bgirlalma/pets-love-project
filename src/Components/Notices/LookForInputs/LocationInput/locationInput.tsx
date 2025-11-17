import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Redux/store";
import { useEffect, useState } from "react";
import { CloseSvg } from "../../../../Image/userimg/close";
import {
  LocationContainer,
  LocalInput,
  IconLocationContainer,
} from "./locationInput.styled";
import { setNoticesLocationPets } from "../../../../Redux/notices/filterNoticesLocation";
import { IconSearch } from "../../../../Image/search";

const LocationInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const FilterValur = useSelector((state: RootState) => state.noticesPetsFilterLocation) ?? "";
  const [inputLocalValue, setInputLocalValue] = useState(FilterValur);
  useEffect(() => {
    setInputLocalValue(FilterValur);
  }, [FilterValur]);

  const handleClick = (): void => {
    setInputLocalValue("");
    dispatch(setNoticesLocationPets(""));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLocalValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape" || e.key === "Enter") {
      dispatch(setNoticesLocationPets(inputLocalValue.trim()));
    }
  };
  return (
    <LocationContainer>
      <LocalInput
        type="text"
        name="location"
        placeholder="Location"
        value={inputLocalValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <IconLocationContainer>
        {inputLocalValue.length > 0 ? (
          <button type="reset" aria-label="reset" onClick={handleClick}>
            <CloseSvg />
          </button>
        ) : (
          <button type="button" aria-hidden={true} tabIndex={-1}>
            <IconSearch />
          </button>
        )}
      </IconLocationContainer>
    </LocationContainer>
  );
};

export default LocationInput;
