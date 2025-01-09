import { Form } from "formik";
import styled from "styled-components";
import backgroundcat from "../../Image/userimg/background.jpg";


export const RegisterContainer = styled.div`
  width: 335px;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  box-sizing-border-box;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 100%;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
`;

export const CatContainer = styled.div`
  width: 335px;
  background-image: url(${backgroundcat});
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 768px;
    height: 300px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    height: 654px;
  }
`;

export const Cat = styled.img`
  display: block;
  background-color: inherit;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 0;
  }
`;

// start Jack Section
export const JackContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40%;
    transform: translateY(-40%);
    margin-left: 22px;

    display: unset;
  }

  @media screen and (min-width: 1280px) {
    top: 85%;
    transform: translateY(-85%);
    margin-left: 60px;
  }
`;

export const Jack = styled.div`
  display: flex;
  width: 250px;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 10px;
`;

export const JackImageContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 244, 223, 1);
  border-radius: 50%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JackTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
`;

export const NameTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: rgba(246, 184, 61, 1);
`;

export const DataTitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  color: rgba(38, 38, 38, 0.5);
`;

export const DataSpan = styled.span`
  color: rgba(38, 38, 38, 1);
  margin-left: 4px;
`;

export const DescJack = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.8);
  margin-top: 10px;
  margin-left: 8px;
`;

// end Jack Section

//Form start
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  margin-top: 10px;
  padding: 27px 20px;
  box-sizingL border-box;

  
   @media screen and (min-width: 768px) {
    padding: 70px 0;
  }

  
  @media screen and (min-width: 1280px) {
    margin-top: 0;
    justify-content: center;
    padding: 0 85px;
  }
`;

export const TitleRegister = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    line-height: 54px;

    width: 424px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 16px;
  }
`;

export const DescRegister = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;

    width: 424px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 32px;
  }
`;

export const StyledInputName = styled.input`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  background-color: inherit;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  padding: 12px 0 12px 12px;

  @media screen and (min-width: 768px) {
    width: 424px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 16px;
  }
`;

export const StyledInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  background-color: inherit;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  padding: 12px 0 12px 12px;

  @media screen and (min-width: 768px) {
    width: 424px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 16px;
  }
`;

export const PositionContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 424px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledInputPassword = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  background-color: inherit;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 10px;
  padding: 12px;

  &::-ms-reveal,
  &::-ms-clear,
  &::-webkit-textfield-decoration-container {
    display: none;
  }
`;

export const IconEyeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 45%;
  transform: translateY(-50%);

  border: none;
  padding: 0;
  margin-right: 12px;
  cursor: pointer;

  color: orange;
  background-color: inherit;

  font-size: 18px;
  cursor: pointer;
`;

export const ConfirmPasswordContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 424px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ConfirmPassword = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  background-color: inherit;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  color: rgba(38, 38, 38, 0.5);
  padding: 12px;

  &::-ms-reveal,
  &::-ms-clear,
  &::-webkit-textfield-decoration-container {
    display: none;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);

  border: none;
  padding: 0;
  margin-right: 12px;
  cursor: pointer;

  color: orange;
  background-color: inherit;

  font-size: 18px;
  cursor: pointer;
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 42px;
  background-color: rgba(246, 184, 61, 1);
  border-radius: 30px;
  margin-top: 24px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(255, 244, 223, 1);
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    width: 424px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
  }
`;

export const RedirectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const RedirectTitle = styled.h2`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const RedirectDesc = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: rgba(246, 184, 61, 1);
  margin-left: 2px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;