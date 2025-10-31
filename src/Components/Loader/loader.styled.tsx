import styled from "styled-components";

export const LoaderContainer = styled.div`
position: absolute;
top: 50%;
left: 50%:
transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
`;

export const ProgressBar = styled.div`
  overflow: hidden;
`;

export const Percentage = styled.div`
  position: absolute;
  font-family: Manrope;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 80px;
  }

`;