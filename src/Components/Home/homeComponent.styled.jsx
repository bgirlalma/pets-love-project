import styled from "styled-components";


export const ImgContainer = styled.div`
position: absolute;
top: 0;
display: flex;
justify-content: center;
align-items: center;
`;

export const MainImg = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.3);
`;

export const MainLogoContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const MainTitleLogo = styled.h2`
  display: flex;
  align-items: end;

  font-family: Manrope;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  color: rgba(255, 255, 255, 1);
`;

export const MainLogo = styled.svg`
margin-left: 5px;
margin-right: 5px;
`; 

