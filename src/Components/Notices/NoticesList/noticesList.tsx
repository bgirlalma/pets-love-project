import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store";
import { useEffect } from "react";
import { fetchDifferentPets } from "../../../Redux/notices/noticesOptions";
import { FaDollarSign } from "react-icons/fa6";
import {
  NoticesCardContainer,
  NoticesCard,
  TitleConteiner,
  PositionRatingContainer,
  Title,
  InformationContainer,
    Desc,
  PriceContainer,
  Price,
} from "./noticesList.styled";
import { StarIcon } from "../../../Image/notices/star";

const NoticesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.noticesPets.pets);
  const filteredDiferedPets = useSelector(
    (state: RootState) => state.noticesFilter
  ) as string;

  useEffect(() => {
    dispatch(fetchDifferentPets()).then((res) => {
      console.log("Thunk result:", res);
    });
  }, [dispatch]);

  const filteredPets = data.filter((items) =>
    items.title?.toLowerCase().includes(filteredDiferedPets.toLowerCase())
  );

  return (
    <div>
      <NoticesCardContainer>
        {filteredPets.length > 0 ? (
          filteredPets.map((item) => (
            <NoticesCard key={item.uid}>
              <img src={item.img} alt="photo of pet" />
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
                      <FaDollarSign/>
                <Price>{item.price}</Price>
              </PriceContainer>
            </NoticesCard>
          ))
        ) : (
          <h2>Нічого не знайдено</h2>
        )}
      </NoticesCardContainer>
    </div>
  );
};

export default NoticesList;
