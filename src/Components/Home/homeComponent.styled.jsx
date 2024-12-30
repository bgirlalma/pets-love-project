import styled from "styled-components";
import HomePageImg from "../../Image/homepage.jpg";
import HomePageImgTablet from "../../Image/homepage-table.jpg";
import HomePageImgDesktop from "../../Image/homapage-desktop.jpg";


export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${HomePageImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 768px) {
    background-image: url(${HomePageImgTablet});
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${HomePageImgDesktop});
  }
`;

export const MainLogoContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const MainTitleLogo = styled.h2`
  display: flex;
  align-items: end;

  font-family: Manrope;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const MainLogo = styled.svg`
margin-left: 5px;
margin-right: 5px;
`; 

