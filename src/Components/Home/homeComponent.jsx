
import {
  ImgContainer,
  MainLogoContainer,
  MainTitleLogo,
  MainLogo,
} from "./homeComponent.styled";
import logoImg from "../../Image/symbol-defs.svg";
import Loader from "../Loader/loader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
  const [isLoader, setIsLoader] = useState(true);
  const [sizeIcon , setSizeIcon] = useState({width: 44, height: 44})

  const navigate = useNavigate()

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 767) {
         setSizeIcon({width: 82, height: 82})
       }
    }
    
    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      // Ховаємо лоадер після 100%
      setIsLoader(false)
    }, 1000);
    const navigateTimer = setTimeout(() => {
      navigate("/login");
    }, 3000)
    return () => {
      clearTimeout(timer);
      clearTimeout(navigateTimer)
    }
  }, [navigate]);


  return (

      <ImgContainer>

        {isLoader ? (
          <Loader />
        ) : (
          <MainLogoContainer>
            <MainTitleLogo>
              petl
              <MainLogo width={sizeIcon.width} height={sizeIcon.height}>
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
