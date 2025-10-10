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
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;


export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const FourIconContainerOne = styled.div`
  svg {
    @media screen and (min-width: 768px) {
      width: 180px;
      height: 280px;
    }
  }
`;

export const CatIconContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;

  svg {
    margin-bottom: 5px;
    @media screen and (min-width: 768px) {
      width: 280px;
      height: 280px;
    }
  }
`;

export const FourIconContainerTwo = styled.div`
  svg {
    @media screen and (min-width: 768px) {
      width: 180px;
      height: 280px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: rgba(255, 255, 255, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ButtonReturn = styled.button`
  background-color: rgba(255, 244, 223, 1);
  width: 150px;
  height: 42px;
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;

  a {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: rgba(246, 184, 61, 1);
  }

  &:hover {
    background-color: rgba(251, 231, 193, 1);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;

    a {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;