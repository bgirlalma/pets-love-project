import { Form } from "formik";
import styled from "styled-components";

export const MenuContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    margin: 0 32px;
    justify-content: center;
  }
`;

// user block start

export const MainUserContainer = styled.div`
  padding: 20px 20px 40px 20px;
  border-radius: 30px;
  margin: 0 20px 40px 20px;
  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    padding: 40px;
    margin: 0 32px 32px 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 520px;
    margin: 40px 0 92px 0;
  }
`;

export const UserBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(246, 184, 61, 1);
  border-radius: 30px;

  width: 80px;
  height: 40px;
`;

export const UserBlockName = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  margin-right: 5px;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 28px;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);
  transition: background-color ease 0.5s;

  &:hover {
    background-color: rgba(238, 213, 163, 1);
  }

  @media screen and (min-width: 768px) {
    height: 38px;
  }
`;

// user block end

// avatar block start
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
  width: 110px;
  height: 110px;
  margin-right: auto;
  margin-left: auto;
    margin-bottom: 20px;
  }
`;

export const DefaultImgAvatar = styled.img`
  border-radius: 50%;
  background-color: rgba(238, 238, 238, 1);
`;

//avatar block end

// information block start

export const InformationContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;

export const WrappContainer = styled.div`
width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 1000px){
  width: unset;
  }
`;

export const TitleInformation = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const FormInformation = styled(Form)`

  input {
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  transition: border 0.3s ease;
  border-radius: 30px;
  margin-bottom: 12px;


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
  outline: none;
  }

  @media screen and ( min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;

    input {
      height: 52px;
      margin-bottom: 0;
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media screen and (min-width: 1000px){
  width: 880px;
  }

  @media screen and (min-width: 1280px){
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  }
`;

// block information end

// block pets start

export const PetsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const PetsWrappContainer = styled.div`
width: 880px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PetsTitle = styled.h2`
display: flex;
justify-content: start;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const ButtonAddPets = styled.button`
  width: 100px;
  height: 38px;

  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);
  transition: background-color ease 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 1);
    transition: color ease 0.3s;
  }

  svg {
    margin-left: 5px;
  }

  &:hover {
    background-color: rgba(255, 244, 223, 1);

    a {
      color: rgba(246, 184, 61, 1);
    }
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    font-size: 16px;
    line-height: 20px;
  }
`;
// block pets end

// block pets list start

export const ViewedFavoriteContainer = styled.div`
  position: relative;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    margin: 72px 0 32px 32px;
  }
`;

export const ButtonFlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FavoritePetsContainer = styled.div`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    position: unset;
    top: unset;
    left: unset;
    transform: unset;
    width: 660px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: unset;
    margin-left: unset;
    margin-right: unset;
  }
`;

export const TitleFavoritePets = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);
  padding: 0 20px 100px 20px;

  span {
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  
      padding: 0 0 100px 0;
    
  }
`;



export const LogOutUserButton = styled.button`
  width: 115px;
  height: 40px;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: rgba(246, 184, 61, 1);
  transition: background-color 0.5s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(246, 184, 61, 1);
    color: rgba(255, 244, 233, 1);
  }

  @media screen and (min-width: 768px) {
    width: 136px;
    height: 40px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (min-width: 1280px) {
  }
`;


