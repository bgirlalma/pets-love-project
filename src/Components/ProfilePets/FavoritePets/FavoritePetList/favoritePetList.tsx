import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../Redux/store"
import { useEffect } from "react"
import { FetchFavoritePets } from "../../../../Redux/pets/myPets/favoritePets/myFavoritePetsOptional"
import LearnMoreButton from "../../../Notices/Buttons/LearnMore/learnmorebutton"
import { StarIcon } from "../../../../Image/notices/star"
import {
    FavoriteCardContainer,
    FavoriteCard,
    Img,
    TitleContainer,
    Title,
    PositionRatingContainer,
    InformationContainer,
    Desc,
    PriceContainer,
    Price,
  LearnMoreContainer,
} from "./favoritePetList.styled";
import { FaDollarSign } from "react-icons/fa6"
import { Outlet } from "react-router-dom"

const FavoritePetsList = () => {
    const dispatch = useDispatch<AppDispatch>()
    const data = useSelector((state: RootState) => state.favorites.favorites)
    
    useEffect(() => {
        dispatch(FetchFavoritePets())
    },[dispatch])
    return (
      <>
        <FavoriteCardContainer>
          {data.map((item) => (
            <FavoriteCard key={item.uid}>
              <Img>
                <img src={item.image} alt="photo of pet" />
              </Img>
              <TitleContainer>
                <Title>{item.title}</Title>
                {/* block rating */}
                <PositionRatingContainer>
                  <StarIcon /> 
                  <p>{item.rating}</p>
                </PositionRatingContainer>
              </TitleContainer>
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

              <LearnMoreContainer>
                <LearnMoreButton pet={item} />
              </LearnMoreContainer>
            </FavoriteCard>
          ))}
          <Outlet/>
        </FavoriteCardContainer>
      </>
    );
}

export default FavoritePetsList