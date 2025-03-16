import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  width: 320px;
  padding: 30px 20px;
  margin-left: auto;
  margin-right: auto;

  z-index: 2;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 700px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
    padding: 45px 64px 0 64px;
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

    display: flex;
    align-items: center;
  }
`;

// Header desktop start
export const DesktopContainer = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  border: ${({ $isHome }) =>
    $isHome
      ? "1px solid rgba(255, 255, 255, 0.4) "
      : "1px solid rgba(38, 38, 38, 0.15) "};

  &:hover {
    border: ${({ $isHome }) =>
      $isHome
        ? "1px solid rgba(255, 255, 255, 1)"
        : "1px solid rgba(246, 184, 61, 1)"};
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
  border: ${({ $isHome }) =>
    $isHome
      ? "1px solid rgba(255, 255, 255, 0.4) "
      : "1px solid rgba(38, 38, 38, 0.15) "};

  &:hover {
    border: ${({ $isHome }) =>
      $isHome
        ? "1px solid rgba(255, 255, 255, 1)"
        : "1px solid rgba(246, 184, 61, 1)"};
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

  border: ${({ $isHome }) =>
    $isHome
      ? "1px solid rgba(255, 255, 255, 0.4) "
      : "1px solid rgba(38, 38, 38, 0.15) "};

  &:hover {
    border: ${({ $isHome }) =>
      $isHome
        ? "1px solid rgba(255, 255, 255, 1)"
        : "1px solid rgba(246, 184, 61, 1)"};
  }
`;

export const DesktopNav = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $isHome }) =>
    $isHome ? "rgba(255, 255, 255, 1)" : "rgba(38, 38, 38, 1)"};
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

  @media screen and (min-width: 1280px) {
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
