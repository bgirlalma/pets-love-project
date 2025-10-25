import styled from "styled-components";

export const MOdalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(17, 17, 17, 0.6);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  width: 335px;
  height: auto;
  padding: 40px 28px;

  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);

  @media screen and (min-width: 768px) {
    width: 470px;
    padding: 40px 70px;
  }
`;

export const PositionIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const CategoryPet = styled.h3`
  position: absolute;
  top: 0;
  left: 0;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: rgba(246, 184, 61, 1);
  background-color: rgba(255, 244, 223, 1);
  border-radius: 30px;
  padding: 8px 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  button {
    margin-right: 4px;
  }
`;

export const PetTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const RatingTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: rgba(43, 43, 42, 1);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const PetInformationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 16px;
  box-sizing: border-box;

  max-width: 280px;

  span {
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: rgba(38, 38, 38, 0.5);
    margin-bottom: 10px;
  }
  h3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(38, 38, 38, 1);
  }

`;

export const PetDesc = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(43, 43, 42, 1);
  margin-bottom: 30px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  svg {
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const PetPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: rgba(43, 43, 42, 1);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const PetButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddToButton = styled.button`
  width: 135px;
  height: 44px;
  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(255, 255, 255, 1);
  margin-right: 10px;
  transition:
    background-color 0.5s ease,
    color 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
  }

  &:hover {
    background-color: rgba(255, 244, 223, 1);
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;

export const ContactButton = styled.button`
  width: 135px;
  height: 44px;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(246, 184, 61, 1);
  transition:
    background-color 0.5s ease,
    color 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(246, 184, 61, 1);
    color: rgba(255, 244, 223, 1);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;

export const RemoveButton = styled.button`
  width: 135px;
  height: 44px;
  border-radius: 30px;
  background-color: rgba(255, 244, 223, 1);

  margin-right: 10px;
  transition:
    background-color 0.5s ease,
    color 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
  }

  &:hover {
    background-color: rgba(255, 244, 223, 1);
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;
