import { Field, Form } from "formik";
import styled from "styled-components";

export const AddPetContainer = styled.div`
padding: 0 20px 20px 20px;

`;

export const DogImageContainer = styled.div`
  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);
 
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const DogImage = styled.img`
  display: block;
  
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  color: rgba(38, 38, 38, 1);
  margin-bottom: 24px;
`;

// Female block start

export const FemaleBlockContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  
`;

export const ButtonFemale = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

// female block end


// Avatar, Link block start
export const AvatarLinkContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
    height: 46px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ImageAvatarContainer = styled.div`
width: 68px;
height: 68px;
border-radius: 50%;
  background-color: rgba(255, 244, 223, 1);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
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
    color: rgba(38, 38, 38, 0.5);
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
    color: rgba(38, 38, 38, 0.5);
  }

  input:hover,
  input: focus {
    border: 1px solid rgba(246, 184, 61, 1);
  }
`;

export const PositionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;


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
`;

export const TypeField = styled(Field)`
  appearance: none; /* Убираем дефолтную стрелку */
  width: 100%;
  height: 42px;
  outline: none;
  cursor: pointer;
  padding: 0 12px;
  color: rgba(38, 38, 38, 0.5);
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
`;

export const DataContainer = styled.label`
position: relative;

svg{
position: absolute;
top: 50%;
right: 24px;
transform: translateY(-50%);
pointer-events: auto;
}
`;
