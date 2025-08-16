import styled from "styled-components";

export const FriendsContainer = styled.div`
  background-color: rgba(249, 249, 249, 1);
`;

export const PositionContainer = styled.div`
  width: 375px;
  padding: 40px 20px 80px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 70px 30px 80px 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 90px 64px 80px 64px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 44px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;