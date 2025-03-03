import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  height: 100vh;
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

  @media screen and (min-width: 1280px) {
    width: 1216px;
    padding: 180px 65px 30px 65px;

    display: flex;
    align-items: end;
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

  @media screen and (min-width: 1280px) {
    width: 760px;

    font-size: 90px;
    line-height: 87px;
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

  @media screen and (min-width: 1280px) {
    font-size: 90px;
    line-height: 87px;
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
    line-height: 22px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 320px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 420px;
  }
  @media screen and (min-width: 1280px) {
  margin-top: 360px;
  }
`;