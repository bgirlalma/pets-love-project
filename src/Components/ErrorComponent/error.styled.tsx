import styled from "styled-components";

export const MainContainer = styled.div`
  width: 375px;
  height: 720px;
  padding: 40px 20px 80px 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  background-color: rgba(246, 184, 61, 1);
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 70px 30px 80px 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 90px 64px 80px 64px;
  }
`;


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CatIconContainer = styled.div`
  border-radius: 50%;
  background-color: rgb(237 193 109);
  margin-left: 8px;
  margin-right: 8px;

  svg{
  margin-bottom: 5px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;


  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;
`;

export const ButtonReturn = styled.button`
  background-color: rgba(255, 244, 223, 1);
  width: 150px;
  height: 42px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: rgba(246, 184, 61, 1);
  }
`;