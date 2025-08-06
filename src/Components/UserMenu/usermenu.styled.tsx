import styled from "styled-components";

export const UserMenuContainer = styled.div<{ $isHome?: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 32px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-55%);
    margin-right: 75px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: ${({ $isHome }) => $isHome? '75px' : '0'} ;
  }
`;

export const UserMenuMobileContainer = styled.div`
  background-color: rgba(255, 244, 223, 1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const UserMenuTablet = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 244, 223, 1);
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export const UserButton = styled.button`
  background-color: inherit;
`;

export const UserName = styled.h2<{ $isHome?: boolean }>`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: Manrope;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    color: ${({ $isHome }) =>
      $isHome ? "rgba(255, 255, 255, 1)" : " rgba(38, 38, 38, 1)"};
    margin-left: 15px;
    margin-right: 10px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;
