import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const LogoNavContainer = styled(NavLink)<{$isNews?: boolean}>`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-left: ${({ $isNews }) => ($isNews ? "0" : "30px")};
  }

  @media screen and (min-width: 1280px) {
    margin-left: ${({ $isNews }) => ($isNews ? "0" : "40px")};
  }
`;

export const TitlePetlLogo = styled.h2<{ $isHome?: boolean}>`
  font-family: Manrope;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ $isHome }) => ($isHome ? "white" : "rgba(38, 38, 38, 1)")};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

export const LogoSvg = styled.svg`
  margin-left: 2px;
  margin-right: 2px;
`;

export const TitleLoveLogo = styled.span<{$isHome: boolean}>`
  font-family: Manrope;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ $isHome }) => ($isHome ? "white" : "rgba(38, 38, 38, 1)")};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;