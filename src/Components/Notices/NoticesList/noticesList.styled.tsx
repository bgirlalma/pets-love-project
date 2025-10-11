import styled from "styled-components";

export const NoticesCardContainer = styled.ul`
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;
    row-gap: 40px;
  }
`;

export const NoticesCard = styled.li`
  width: 335px;
  height: auto;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  box-sizing: border-box;

  &:last-child {
    matgin-bottom: 0;
  }

  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Img = styled.div`
margin-bottom: 24px;

img{
display: block;
width: 100%;
height: 180px;
border-radius: 16px;
}
`;

export const TitleConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: rgba(43, 43, 42, 1);
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: rgba(43, 43, 42, 1);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }


`;

export const PositionRatingContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(43, 43, 42, 1);
    margin-left: 2px;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;

  max-width: 280px;

  span {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: rgba(38, 38, 38, 0.5);
    margin-bottom: 7px;
  }
  h3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(38, 38, 38, 1);
  }
`;


export const Desc = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(43, 43, 42, 1);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 42px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  svg{
  width: 14px;
  height: 14px;
  }
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);
`;