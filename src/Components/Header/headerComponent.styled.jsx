import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const HeaderContainer = styled.div`
  width: 320px;
  padding: 30px 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    position: relative;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const PositionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

// Header mobile and tablet start
export const BurderMobileTabletContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 218px;
  height: 100vh;
  background-color: rgba(246, 184, 61, 1);
  z-index: 999;
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 375px;
    justify-content: unset;
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

export const ListMobileTabletContainer = styled.ul`
@media screen and (min-width: 768px){
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
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

export const Nav = styled(NavLink)`
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

@media screen and (min-width: 768px){
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


// Header desktop start
export const DesktopContainer = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const DesktopList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesktopNews = styled.li`
  width: 80px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);

  &:hover {
    border: 1px solid rgba(246, 184, 61, 1);
  }
`;

export const DesktopFindPets = styled.li`
  width: 100px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);

  &:hover {
    border: 1px solid rgba(246, 184, 61, 1);
  }
`;

export const DesktopOurFriends = styled.li`
  width: 120px;
  height: 50px;
  border-radius: 30px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(38, 38, 38, 0.15);

  &:hover {
    border: 1px solid rgba(246, 184, 61, 1);
  }
`;

export const DesktopNav = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);
`;

export const ButtonsDesktopContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    margin-right: 66px;
    display: flex;

  }

  @media screen and (min-width: 1280px){
  position: unset;
  top: unset;
  right: unset;
  transform: unset;
  margin-right: unset;
  }
`;

export const ButtonLogInDesktop = styled.button`
  width: 120px;
  height: 50px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  background-color: rgba(246, 184, 61, 1);
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(251, 231, 193, 1);
    color: rgba(246, 184, 61, 1);
  }
`;

export const ButtonRegisterDesktop = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  background-color: rgba(255, 244, 223, 1);
  color: rgba(246, 184, 61, 1);

  &:hover {
    background-color: rgba(251, 231, 193, 1);
  }
`;
