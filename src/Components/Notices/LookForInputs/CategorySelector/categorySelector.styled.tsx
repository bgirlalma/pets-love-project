import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 100%;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    margin-left: 8px;
  }
`;

export const CategorySelector = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 12px;

  @media screen and (min-width: 768px) {
    height: 48px;
    padding: 14px;
  }
`;


export const TitleSelector = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const IconSelectorContainer = styled.button<{ $showMenu: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: inherit;
  transition: transform 0.5s ease;

  svg {
    transform: rotate(${(props) => (props.$showMenu ? "180deg" : "0deg")});
    transition: transform 0.5s ease;
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 14px;
  }
`;


export const ShowMenuCategoryContainer = styled.div`
  position: relative;
  z-index: 9999;
`;

export const ShowListCategory = styled.ul`
  position: absolute;
  top: calc(100% + 20px); /* сразу под селектором */
  left: 50%;
  transform: translateX(-50%); /* центрируем по горизонтали */
  width: 100%;
  height: auto;
  border-radius: 15px;
  padding: 12px;

  background-color: rgba(255, 255, 255, 1);

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 0.6);
    transition: color 0.5s ease;
    cursor: pointer;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  li:hover,
  li:focus,
  li:active {
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    li {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;