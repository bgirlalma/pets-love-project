import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const HeaderContainer = styled.div`
  position: relative;
  width: 320px;
  padding: 30px 20px;
  margin-left: auto;
  margin-right: auto;
 
  z-index: 2;

  @media screen and (min-width: 768px) {
    position: relative;
    width: 700px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 30px 0 30px 64px;
  }
`;

export const PositionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;


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
