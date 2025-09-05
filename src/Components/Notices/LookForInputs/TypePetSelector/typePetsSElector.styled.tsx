import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

export const TypeOfPetsContainer = styled.div`
  width: 100%;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    width: 190px;
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

export const TypeOfSelector = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 12px;

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TypeTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TypeOfPetsButton = styled.button<{ $showMenuType: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: inherit;

  transition: transform 0.5s ease;
  svg {
    transform: rotate(${(props) => (props.$showMenuType ? "180deg" : "0deg")});
    transition: transform 0.5s ease;
  }
`;

export const ShowListTypeOfPetsContainer = styled.div`
  position: relative;
  padding-right: 12px;
  z-index: 9999;
`;

export const ScrollBar = styled(SimpleBar)`
  max-height: 150px;
  border-radius: 13px;

  /* серый скролл */
  .simplebar-scrollbar:before {
    background-color: #26262614; /* серый цвет */
    border-radius: 13px; /* радиус ползунка */
    opacity: 1 !important;
  }

`;


export const ShowListTypeOfPets = styled.ul`
  position: absolute;
  top: calc(100% + 20px); /* сразу под селектором */
  left: 50%;
  transform: translateX(-50%); /* центрируем по горизонтали */
  width: 100%;
  max-height: 290px;

  border-radius: 15px;
  padding: 12px;
  background-color: #fff;

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 0.6);
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