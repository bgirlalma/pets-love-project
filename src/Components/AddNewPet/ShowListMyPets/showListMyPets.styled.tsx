import styled from "styled-components";

export const PetContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: unset;

  }
`;

export const PetCardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media screen and (min-width: 768px) {
    width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    width: 440px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const PetCard = styled.li`
  position: relative;
  width: 100%;
  max-width: 295px;
  border-radius: 20px;
  border: 1px solid rgba(38, 38, 38, 0.1);
  background-color: rgba(255, 255, 255, 1);
  padding: 16px;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 305px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    max-width: 100%;
    padding: 20px;
  }
`;

// Title and Button

export const MainTitleandButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: rgba(43, 43, 42, 1);
`;

export const ButtonDeletePetContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  
`;

export const ButtonDeletePet = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 244, 223, 1);

  display: flex;
  justify-content: center;
  align-items: center;
`; 


// Position Information

export const PositionContainer = styled.div`
display: flex;
`;

// Avatar Container
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  background-color: rgba(255, 244, 223, 1);
  border-radius: 50%;
  margin-right: 14px;

  @media screen and (min-width: 1280px) {
    width: 90px;
    height: 90px;
    margin-right: 25px;

    svg{
    width: 50px;
    height: 50px;
    }
  }
`;


// Block Information start
export const PetInformationBlock = styled.div`
  width: 170px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  div {
    margin-right: 10px;
  }

  div:last-child {
    margin-top: 10px;
  }

  @media screen and (min-width: 1280px) {
    flex-wrap: nowrap;
    width: 100%;
    justify-content: center;

    div {
      margin-right: 27px;
    }

    div:last-child {
      margin-top: 0;
    }
  }
`;

// Name
export const NamePet = styled.h2`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 4px;
`;

export const DescNamePet = styled.p`
 
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  
  color: rgba(38, 38, 38, 1);
`;

// Birthday
export const BirthdayPet = styled.h2`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 4px;
`;

export const DescBirthdayPet = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: rgba(38, 38, 38, 1);
`;

// SEx
export const SexPet = styled.h2`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 4px;
`;

export const DescSexPet = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: rgba(38, 38, 38, 1);
`;

// Special
export const SpecialPet = styled.h2`
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: rgba(38, 38, 38, 0.5);
  margin-bottom: 4px;
`;

export const DescSpecialPet = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: rgba(38, 38, 38, 1);
`;


// Block Information end