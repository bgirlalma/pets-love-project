import { Form } from "formik";
import styled from "styled-components";

export const LoginContainer = styled.div`
width: 335px;
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;

export const Dog = styled.img`
  display: block;

  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);
 
`;

export const WrappContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  margin-top: 10px;
  padding: 60px 20px;
  box-sizingL border-box;
`;

export const TitleLogin = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 12px;
`;

export const DescLogin = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 24px;
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
`;

export const PositionContainer = styled.div`
position: relative;
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
`;

export const RedirectDesc = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: rgba(246, 184, 61, 1);
  margin-left: 2px;
`;