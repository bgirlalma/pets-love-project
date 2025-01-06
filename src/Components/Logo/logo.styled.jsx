import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

`;

export const TitlePetlLogo = styled.h2`
  font-family: Manrope;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;

export const LogoSvg = styled.svg`
margin-left: 2px;
margin-right: 2px;
`;

export const TitleLoveLogo = styled.span`
  font-family: Manrope;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
`;