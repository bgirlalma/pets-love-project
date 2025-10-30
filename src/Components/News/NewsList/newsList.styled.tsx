import styled from "styled-components";

export const NewsContainer = styled.div``;

export const NewsListContainer = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px; /* горизонтальный */
    row-gap: 32px; /* вертикальный */
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 35px; /* горизонтальный */
    row-gap: 40px; /* вертикальный */
    margin-bottom: 60px;
  }
`;

export const NewsItems = styled.li`
position: relative;
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: unset;
  }
`;

export const NewsImage = styled.img`
  width: 335px;
  margin-bottom: 20px;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 226px;
    margin-bottom: 28px;
  }
`;

export const NewsTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 14px;
  }
`;

export const NewsDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 28px;
  }
`;

export const FlexContainer = styled.div`
position: absolute;
bottom: 0;

width: 100%;
display: flex;
justify-content: space-between;
`;

export const NewsDate = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const NewsLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(246, 184, 61, 1);
  transition: color 0.5s ease;

  &:hover {
    color: rgba(179, 120, 4, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
