import styled from "styled-components";

export const NoticesContainer = styled.div`
  width: 375px;
  padding: 60px 20px 80px 20px;
  box-sizing: border-box;
  background-color: rgba(249, 249, 249, 1);

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 44px 32px 80px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 80px 64px 80px 64px;
  }
`;