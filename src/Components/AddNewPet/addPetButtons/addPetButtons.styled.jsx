import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 30px 0 0 0;

  @media screen and (min-width: 768px) {
    margin: 40px 0 0 0;
  }
`;

export const ButtonBack = styled.button`
  width: 100px;
  height: 42px;
  border: none;
  border-radius: 30px;
  background-color: rgba(38, 38, 38, 0.05);

  a {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }

  margin-right: 8px;

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 48px;

    a {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const ButtonSubmit = styled.button`
  width: 100px;
  height: 42px;
  border: none;
  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);

 
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 1);


  @media screen and (min-width: 768px) {
    width: 170px;
    height: 48px;

   
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    
  }
`;