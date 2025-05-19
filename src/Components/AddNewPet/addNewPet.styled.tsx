import { Field, Form } from "formik";
import styled from "styled-components";

const getBackground = (
  genderType: ButtonFemaleProps["genderType"],
  isHover = false
) => {
  switch (genderType) {
    case "female":
      return isHover ? "rgba(244, 63, 94, 1)" : "rgba(244, 63, 94, 0.1)";
    case "male":
      return isHover ? "rgba(84, 173, 255, 1)" : "rgba(84, 173, 255, 0.1)";
    case "unknown":
    default:
      return isHover ? "rgba(246, 184, 61, 1)" : "rgba(255, 244, 223, 1)";
  }
};


interface ButtonFemaleProps {
  isActive: boolean;
  genderType: "female" | "male" | "unknown";
}

export const AddPetContainer = styled.div`
  padding: 0 20px 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px){
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: 32px;
  }
`;

// Main Img Dog
export const DogImageContainer = styled.div`
  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);

  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-bottom: 0;
    margin-right: 32px;
  }
`;

export const DogImage = styled.img`
  display: block;

  @media screen and (min-width: 1280px) {
    min-width: 512px;
  }
`;

// Main Form Container(Avatar, Link, Upload, FormPet, Buttons)
export const FormContainer = styled.div`
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
  padding: 28px 20px 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 40px;
  }
`;

// Female block start

export const FemaleBlockContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

// shouldForwardProp -функ, которая не добавляет пропсы в DOM. Они используються только в стилях
export const ButtonFemale = styled.button.withConfig({shouldForwardProp: (prop) => !["isActive", "genderType"].includes(prop)})<ButtonFemaleProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  background-color: ${({ genderType, isActive}) => isActive? getBackground(genderType, true) : getBackground(genderType)};

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

// female block end


// Avatar, Link block start
export const PositionFormContainer = styled.div`
width: 300px;
margin-left: auto;
margin-right: auto;

@media screen and (min-width: 768px){
width: 432px;
}
`;
export const AvatarLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {

  }
`;

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
    width: 100%;
    height: 46px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ImageAvatarContainer = styled.div`
  width: 68px;
  height: 68px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  background-color: rgba(255, 244, 223, 1);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

// Avatar, Link block end


// Form block start

export const FormInfo = styled(Form)`
  display: flex;
  flex-direction: column;

  input[name="title"] {
    width: 100%;
    height: 42px;
    border: 1px solid rgba(38, 38, 38, 0.15);
    border-radius: 30px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;
    padding: 0 12px;

    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: rgba(38, 38, 38, 1);
  }

  input[name="name"] {
    width: 100%;
    height: 42px;
    border: 1px solid rgba(38, 38, 38, 0.15);
    border-radius: 30px;
    margin-bottom: 10px;
    outline: none;
    cursor: pointer;
    padding: 0 12px;

    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    color: rgba(38, 38, 38, 1);
  }

  input:hover,
  input: focus {
    border: 1px solid rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    input[name="title"] {
      height: 52px;
      padding: 0 16px;
      margin-bottom: 18px;

      font-size: 16px;
      line-height: 20px;
    }

    input[name="name"] {
      height: 52px;
      padding: 0 16px;
      margin-bottom: 18px;

      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const PositionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
`;
// Data Field
export const DataContainer = styled.label`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    pointer-events: auto;
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 20px;
      height: 20px;
      right: 16px;
    }
  }
`;

// Select Field
export const SelectPositionContainer = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    pointer-events: auto;
  }

  @media screen and (min-width: 768px){
  svg{
  width: 20px;
  height: 20px;
  right: 16px;
  }
  }
`;

export const TypeField = styled(Field)`
  appearance: none; /* Убираем дефолтную стрелку */
  width: 100%;
  height: 42px;
  outline: none;
  cursor: pointer;
  padding: 0 12px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);

  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    height: 52px;
    padding: 0 16px;

    font-size: 16px;
    line-height: 20px;
  }
`;

