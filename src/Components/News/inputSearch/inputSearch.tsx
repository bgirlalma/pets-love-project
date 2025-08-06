import { IconSearch } from "../../../Image/search";
import {
  InputSearchContainer,
  SearchInput,
  IconContainer,
} from "./inputSearch.styled";


const SearchInputcomponent = () => {
  return (
    <InputSearchContainer>
      <SearchInput type="text" name="search" placeholder="Search" />
      <IconContainer>
        <IconSearch />
      </IconContainer>
    </InputSearchContainer>
  );
};

export default SearchInputcomponent;
