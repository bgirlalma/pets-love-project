import styled from "styled-components";


export const UserMenuContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 32px;
  transform: translateY(-50%);
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-55%);
    margin-right: 75px;
  }
`;

export const UserMenuMobileContainer = styled.div`
  background-color: rgba(255, 244, 223, 1);
  border-radius: 50%;
 width: 40px;
 height: 40px;

 display: flex;
 justify-content: center;
 align-items: center;

  @media screen and (min-width: 768px) {
   display: none;
  }
`;

export const UserMenuTabletContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 244, 223, 1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;

export const UserName = styled.h2`
  font-family: Manrope;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin-left: 15px;
`;