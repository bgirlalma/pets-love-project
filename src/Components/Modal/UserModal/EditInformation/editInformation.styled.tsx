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

  width: 320px;
  border-radius: 30px;
  padding: 40px 20px;

  background-color: rgba(255, 255, 255, 1);
  z-index: 2000;
`;

export const TitleEditProfile = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);
  margin-bottom: 20px;
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
`;

export const FormContainer = styled(Form)`
  margin-bottom: 20px;
  input {
    width: 100%;
    height: 42px;
    padding: 0 12px;
    margin-bottom: 10px;
    border: 1px solid rgba(246, 184, 61, 1);
    border-radius: 30px;
    outlina: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(38, 38, 38, 1);
  }

  input: last-of-type {
    margin-bottom: 0;
  }
`;

export const ProfileGoToButton = styled.button`
  width: 100%;
  height: 42px;

  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  color: rgba(255, 255, 255, 1);
`;
