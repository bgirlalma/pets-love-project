import { useEffect, useState } from "react";
import HomeMobile from '../../Image/homepageimg/home-img-mob.jpg'
import HomeTablet from '../../Image/homepageimg/home-img-tab.jpg'
import HomeDesktop from '../../Image/homepageimg/home-img-desk.jpg'
import {
  HomeContainer,
  TitleHomeContainer,
  MainTitle,
  TitleSpan,
  MainDesc,
  ImgContainer,
} from "./home.styled";

const HomeComponent = () => {
    const [sizeWindow, setSizeWindow] = useState("");

    useEffect(() => {
        const updateImg = () => {
            if (window.innerWidth < 767) {
              setSizeWindow(HomeMobile);
            } else if (window.innerWidth < 1199) {
                setSizeWindow(HomeTablet)
            } else {
                setSizeWindow(HomeDesktop)
          }
        }
        updateImg()
        window.addEventListener('resize', updateImg)

        return () => window.removeEventListener("resize", updateImg)
    },[])
    return (
      <HomeContainer>
        <TitleHomeContainer>
          <MainTitle>
            Take good <TitleSpan>care</TitleSpan>of your small pets
          </MainTitle>
          <MainDesc>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </MainDesc>
        </TitleHomeContainer>

        <ImgContainer>
          <img src={sizeWindow} alt="girl with dog" />
        </ImgContainer>
      </HomeContainer>
    );
}

export default HomeComponent;