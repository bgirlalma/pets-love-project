import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;

`;

export const TitleHomeContainer = styled.div`
  position: absolute;
  top: 0;
  padding: 120px 20px 50px 20px;
  width: 335px;
  margin-top: 10px;
  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 700px;
    padding: 180px 32px 50px 32px;
  }
`;


export const MainTitle = styled.h1`
  font-family: Manrope;
  font-weight: 700;
  font-size: 50px;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
  }
`;

export const TitleSpan = styled.span`
  font-family: Manrope;
  font-weight: 700;
  font-size: 50px;
  line-height: 48px;
  color: rgba(255, 255, 255, 0.4);

  margin-right: 10px;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 77px;
  }
`;

export const MainDesc = styled.p`
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);
  width: 285px;

  @media screen and (min-width: 768px) {
    width: 255px;
    margin-left: auto;
    font-size: 18px;
  }
`;

export const ImgContainer = styled.div`

  display: flex;

  @media screen and (min-width: 768px) {
    // bottom: -220px;
  }
`;