import HomePageImg from "../../Image/homepage.jpg";
import {
  ImgContainer,
  MainImg,
  MainLogoContainer,
  MainTitleLogo,
  MainLogo,
} from "./homeComponent.styled";
import logoImg from "../../Image/symbol-defs.svg";
import Loader from "../Loader/loader";
import { useEffect, useState } from "react";

const HomeComponent = () => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Ховаємо лоадер після 100%
      setIsLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ImgContainer>
      <MainImg src={HomePageImg} alt="dog" />

      {isLoader ? (
        <Loader />
      ) : (
        <MainLogoContainer>
          <MainTitleLogo>
            petl
            <MainLogo width="44" height="44">
              <use href={`${logoImg}#icon-heart-circle`}></use>
            </MainLogo>
            <span>ve</span>
          </MainTitleLogo>
        </MainLogoContainer>
      )}
    </ImgContainer>
  );
};

export default HomeComponent;
