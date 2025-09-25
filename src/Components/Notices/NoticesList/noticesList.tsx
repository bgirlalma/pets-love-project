
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

interface PetType {
  uid?: string;
  title?: string;
  name?: string;
  birthday?: string;
  sex?: string;
  species?: string;
  category?: string;
  city?: string;
  rating?: number;
  price?: number;
  desc?: string;
  image?: string;
}

const NoticesList = ({ filteredPets }: { filteredPets: PetType[] }) => {
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
