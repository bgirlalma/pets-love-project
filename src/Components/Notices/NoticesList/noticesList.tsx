import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import { fetchDifferentPets } from "../../../Redux/notices/noticesOptions";
import { FaDollarSign } from "react-icons/fa6";
import {
  NoticesCardContainer,
  NoticesCard,
  Img,
  TitleConteiner,
  PositionRatingContainer,
  Title,
  InformationContainer,
  Desc,
  PriceContainer,
  Price,
} from "./noticesList.styled";
import { StarIcon } from "../../../Image/notices/star";

const NoticesList = ({
  selectedCategory,
  selectedGender,
  selectedTypeOfPets,
}: {
  selectedCategory: string;
  selectedGender: string;
  selectedTypeOfPets: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.noticesPets.pets);
  const filteredDiferedPets = useSelector(
    (state: RootState) => state.noticesFilter
  ) as string;

  const filterLocationPets = useSelector(
    (state: RootState) => state.noticesPetsFilterLocation
  ) as string;

  const sortPetsselect = useSelector((state: RootState) => state.sortPets.value )as string

  useEffect(() => {
    dispatch(fetchDifferentPets()).then((res) => {
      console.log("Thunk result:", res);
    });
  }, [dispatch]);

  const filteredPets = data.filter((items) => {
    // Фільтруція по title
    const matchesTitle = items.title
      ?.toLowerCase()
      .includes(filteredDiferedPets.toLowerCase());

    // фильтрація по категорії. Приведення до нижнього регистру. !selectedCategory для відображення наших каточок при початковому стані Category(placeholder)
    const matchesCategory =
      !selectedCategory ||
      selectedCategory.toLocaleLowerCase() === "Show All".toLocaleLowerCase() ||
      items.category?.toLocaleLowerCase() ===
        selectedCategory.toLocaleLowerCase();

    // Фільтрація по гендеру
    const matchesGender =
      !selectedGender ||
      selectedGender.toLocaleLowerCase() === "Show All".toLocaleLowerCase() ||
      items.sex?.toLocaleLowerCase() === selectedGender.toLocaleLowerCase();

    const matchedTypeOfPets =
      !selectedTypeOfPets ||
      selectedTypeOfPets.toLocaleLowerCase() ===
        "Show All".toLocaleLowerCase() ||
      items.species?.toLocaleLowerCase() ===
        selectedTypeOfPets.toLocaleLowerCase();

    const matchesFilterLocation = items.city
      ?.toLowerCase()
      .includes(filterLocationPets.toLowerCase());
    
    let matchedSortPets = true;

    if (sortPetsselect === "expensive") {
      matchedSortPets = items.price !== undefined && items.price >= 250;
    } else if (sortPetsselect === "cheap") {
      matchedSortPets = items.price !== undefined && items.price < 250;
    } else if (sortPetsselect === "popular") {
      matchedSortPets = items.rating !== undefined && items.rating >= 1;
    } else if (sortPetsselect === "unpopular") {
      matchedSortPets = items.rating !== undefined && items.rating < 1;
    }

    return (
      matchesTitle &&
      matchesCategory &&
      matchesGender &&
      matchedTypeOfPets &&
      matchesFilterLocation && matchedSortPets
    );
  });

  return (
    <>
      <NoticesCardContainer>
        {filteredPets.length > 0 ? (
          filteredPets.map((item) => (
            <NoticesCard key={item.uid}>
              <Img>
                <img src={item.image} alt="photo of pet" />
              </Img>
              <TitleConteiner>
                <Title>{item.title}</Title>
                {/* block rating */}
                <PositionRatingContainer>
                  <StarIcon />
                  <p>{item.rating}</p>
                </PositionRatingContainer>
              </TitleConteiner>
              {/* block information */}
              <InformationContainer>
                <div>
                  <span>Name</span>
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <span>Birthday</span>
                  <h3>{item.birthday}</h3>
                </div>
                <div>
                  <span>Sex</span>
                  <h3>{item.sex}</h3>
                </div>
                <div>
                  <span>Species</span>
                  <h3>{item.species}</h3>
                </div>
                <div>
                  <span>Category</span>
                  <h3>{item.category}</h3>
                </div>
              </InformationContainer>
              <Desc>{item.desc}</Desc>
              {/*block price  */}
              <PriceContainer>
                <FaDollarSign />
                <Price>{item.price}</Price>
              </PriceContainer>
            </NoticesCard>
          ))
        ) : (
          <h2>Нічого не знайдено</h2>
        )}
      </NoticesCardContainer>
    </>
  );
};

export default NoticesList;
