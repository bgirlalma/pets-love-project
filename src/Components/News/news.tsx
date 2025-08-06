import SearchInputcomponent from "./inputSearch/inputSearch";
import { MainTitleNews } from "./news.styled";
import NewsList from "./NewsList/newsList";
const News = () => {
  return (
    <div>
      <div>
        <MainTitleNews>News</MainTitleNews>
        <SearchInputcomponent />
        <NewsList/>
      </div>
    </div>
  );
};

export default News;
