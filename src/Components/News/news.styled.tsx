import styled from "styled-components";

export const MainNewsContainer = styled.div`
  width: 375px;
  padding: 60px 20px 80px 20px;
  box-sizing: border-box;
 
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

export const NewsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MainTitleNews = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  color: rgba(38, 38, 38, 1);

  margin-bottom: 20px;

  @media screen and (min-width: 768px){
  font-size: 54px;
  line-height: 54px;
  }
`;

