import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { fetchInformation } from "../../../Redux/news/newsOptional";
import {
  NewsContainer,
  NewsListContainer,
  NewsItems,
  NewsImage,
  NewsTitle,
  NewsDesc,
  FlexContainer,
  NewsDate,
  NewsLink,
} from "./newsList.styled";
import PaginationComponent from "../../PaginationComponent/pagination";

const NewsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const news = useSelector((state: RootState) => state.NewsPets.news);
  const filterValue = useSelector((state: RootState) => state.NewsFilterPets);

  useEffect(() => {
    dispatch(fetchInformation()).then((res) => {
      console.log("Thunk result:", res);
    });
  }, [dispatch]);

  useEffect(() => {
    console.log("News updated:", news);
  }, [news]);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <PaginationComponent
      data={filteredNews} // передаємо відфільтровані новини
      itemsPerPage={6} // кількість новин на сторінці
      renderItems={(itemsOnPage) => (
        <NewsListContainer>
          {itemsOnPage.map((item) => (
            <NewsItems key={item.uid}>
              <NewsImage src={item.img} alt="News Photo" />
              <NewsTitle>{item.title}</NewsTitle>
              <NewsDesc>{item.description}</NewsDesc>
              <FlexContainer>
                <NewsDate>{item.date}</NewsDate>
                <NewsLink
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </NewsLink>
              </FlexContainer>
            </NewsItems>
          ))}
        </NewsListContainer>
      )}
    />
  );
};

export default NewsList;
