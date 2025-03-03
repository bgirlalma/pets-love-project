
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Header mobile and tablet start
export const BurderMobileTabletContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 218px;
  height: 100vh;
  background-color: rgba(246, 184, 61, 1);
  
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 375px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const IconCloseContainer = styled.button`
  display: flex;
  margin-left: auto;
  border: none;
  background-color: inherit;
`;

export const ListMobileTabletContainer = styled.div`

`;

export const ListMobileTablet = styled.ul`

`;

export const ItemsMobileTablet = styled.li`
  width: 120px;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 15px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.98);
  }
`;

export const NavList = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ButtonMobileTabletContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonLogIn = styled.button`
  width: 100%;
  height: 42px;
  margin-bottom: 10px;
  background-color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(255, 244, 223, 1);
    color: rgba(246, 184, 61, 1);
  }
`;

export const ButtonRegister = styled.button`
  width: 100%;
  height: 42px;
  border: none;
  background-color: rgba(255, 244, 223, 1);
  border-radius: 30px;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(246, 184, 61, 1);

  &:hover {
    background-color: rgba(251, 231, 193, 1);
  }
`;

// Header mobile and tablet end
