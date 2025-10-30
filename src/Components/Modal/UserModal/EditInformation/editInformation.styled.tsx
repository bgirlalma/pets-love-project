import { Form } from "formik";
import styled from "styled-components";

// Стилизованный серый фон (backdrop)
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Полупрозрачный серый фон */
  z-index: 1000; /* Фон должен быть под модальным окном */
  cursor: pointer; /* Показываем, что по фону можно кликать */
`;

export const EditInformationContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;

  width: 320px;
  border-radius: 30px;
  padding: 40px 20px;

  background-color: rgba(255, 255, 255, 1);
  z-index: 2000;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 50px;
  }
`;

export const PositionIconContainer = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 20px 0 0;
  background-color: inherit;
`;

export const TitleEditProfile = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ImageProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const ImageProfileUser = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

// block link and update img start
export const LinkUpdateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 126px;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 146px;
  }
`;

export const InputLink = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 30px;
  outline: none;
  border: 1px solid rgba(246, 184, 61, 1);
  padding: 0 40px 0 12px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: rgba(38, 38, 38, 1);

  @media screen and (min-width: 768px) {
    height: 46px;
    font-size: 14px;
    line-height: 18px;
  }
`;



export const FormContainer = styled(Form)`
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 42px;
    padding: 0 12px;
    margin-bottom: 10px;
    border: 1px solid rgba(38, 38, 38, 1);
    transition: border 0.3s ease;
    border-radius: 30px;
    cursor: pointer;
    outline: none;


    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }

  input: last-of-type {
    margin-bottom: 0;
  }

  input: hover, 
  input: focus{
   border: 1px solid rgba(246, 184, 61, 1);
  }

    @media screen and (min-width: 768px) {
   input{
    font-size: 16px;
    line-height: 20px;
   }
    
  }
`;

export const ProfileGoToButton = styled.button`
  width: 100%;
  height: 42px;
  margin-top: 20px;

  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);
  transition:
    background-color 0.5s ease,
    color 0.3s ease;

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: rgba(255, 255, 255, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-top: 40px;
  }
`;
