import SearchInputcomponent from "./inputSearch/inputSearch";
import { MainNewsContainer, NewsContainer, MainTitleNews } from "./news.styled";
import NewsList from "./NewsList/newsList";
const News = () => {
  return (
    <MainNewsContainer>
      <NewsContainer>
        <MainTitleNews>News</MainTitleNews>
        <SearchInputcomponent />
      </NewsContainer>
      
      <NewsList />
    </MainNewsContainer>
  );
};

export default News;
