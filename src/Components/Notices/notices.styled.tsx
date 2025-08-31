import styled from "styled-components";

export const NoticesContainer = styled.div`
  width: 375px;
  padding: 60px 20px 80px 20px;
  box-sizing: border-box;
  background-color: rgba(249, 249, 249, 1);

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 44px 32px 80px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 80px 64px 80px 64px;
  }
`;

export const NoticesTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;

  color: rgba(38, 38, 38, 1);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 54px;
  }
`;

export const SearchContainer = styled.div`
border-radius: 30px;
background-color: rgba(255, 244, 223, 1);
padding: 20px;
margin-bottom: 40px;

`;

export const PositionCategoryAndGenderContainer = styled.div`
display: flex;
width: 100%;
`;