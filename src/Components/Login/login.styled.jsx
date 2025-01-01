import { Form } from "formik";
import backgrounddog from '../../Image/userimg/background.jpg'
import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 335px;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;

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
  width: 100%;
`;

export const DogContainer = styled.div`
  width: 335px;
  background-image: url(${backgrounddog});
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 300px;
    border-radius: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 590px;
    height: auto;
  }
`;

export const Dog = styled.img`
  display: block;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    margin-left: 40px;
  }
`;

// start Rich Section
export const RichContainer = styled.div`
  visibility: hidden;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40%;
    transform: translateY(-40%);
    margin-left: 22px;
   
    visibility: unset;
  }
`;

export const Rich = styled.div`
  display: flex;
  width: 250px;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 10px;
`;

export const RichImageContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 244, 223, 1);
  border-radius: 50%;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RichTitleContainer = styled.div`
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

export const DescRich = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.8);
  margin-top: 10px;
  margin-left: 8px;
`;

// end Rich Section

// start Form
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  margin-top: 10px;
  padding: 60px 20px;
  box-sizingL border-box;

   @media screen and (min-width: 768px) {
    padding: 70px 0;
  }
`;

export const TitleLogin = styled.h2`
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

export const DescLogin = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 22px;

    width: 424px;
    margin-left: auto;
    margin-right: auto;

    margin-bottom: 32px;
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
  top: 60%;
  transform: translateY(-50%);

  border: none;
  padding: 0;
  margin-right: 12px;

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
  margin-top: 40px;

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
    margin-top: 64px;
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
  margin-left: 2px;

  a {
    color: rgba(246, 184, 61, 1);
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

// end Form