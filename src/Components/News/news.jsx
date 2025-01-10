import { IconSearch } from "../../Image/search";
import {MainTitleNews,  InputSearchContainer,SearchInput, IconContainer,} from './news.styled'
const News = () => {
    return (
      <div>
        <div>
          <MainTitleNews>News</MainTitleNews>

          <InputSearchContainer>
            <SearchInput type="text" name="search"  placeholder="Search"/>
            <IconContainer>
              <IconSearch />
            </IconContainer>
          </InputSearchContainer>
        </div>
      </div>
    );
}

export default News