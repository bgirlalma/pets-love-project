import styled from "styled-components";

export const RadioButtonContainer = styled.div`
display: flex;
flex-wrap: wrap;
  margin-top: 20px;
  box-sizing: border-box;
`;

// Button popular
export const ButtonPopular = styled.button<{ $active: boolean }>`
  position: relative;
  width: ${({ $active }) => ($active ? "100px" : "75px")};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({ $active }) => ($active ? "#F6B83D" : "#fff")};
  color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#F6B83D" : "#f0f0f0")};
    color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  }

  @media screen and (min-width: 768px) {
    width: ${({ $active }) => ($active ? "110px" : "85px")};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;
// Icon Popular
export const IconContainerPopular = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({ $active }) => ($active ? "block" : "none")};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`;

// Button Unpopular
export const ButtonUnpopular = styled.button<{ $active: boolean }>`
  position: relative;
  width: ${({ $active }) => ($active ? "110px" : "90px")};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({ $active }) => ($active ? "#F6B83D" : "#fff")};
  color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#F6B83D" : "#f0f0f0")};
    color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  }

  @media screen and (min-width: 768px) {
    width: ${({ $active }) => ($active ? "125px" : "100px")};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;

// Icon Unpopular
export const IconContainerUnpopular = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({ $active }) => ($active ? "block" : "none")};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`;

// Button Cheap
export const ButtonCheap = styled.button<{ $active: boolean }>`
  position: relative;
  width: ${({ $active }) => ($active ? "90px" : "66px")};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({ $active }) => ($active ? "#F6B83D" : "#fff")};
  color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#F6B83D" : "#f0f0f0")};
    color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  }

  @media screen and (min-width: 768px) {
    width: ${({ $active }) => ($active ? "100px" : "76px")};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;

// Icon Cheap
export const IconContainerCheap = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({ $active }) => ($active ? "block" : "none")};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`;

// Button Expensive
export const ButtonExpensive = styled.button<{ $active: boolean }>`
  position: relative;
  width: ${({ $active }) => ($active ? "110px" : "88px")};
  height: 42px;
  border-radius: 30px;
  padding: 12px;
  margin-right: 10px;
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  background-color: ${({ $active }) => ($active ? "#F6B83D" : "#fff")};
  color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ $active }) => ($active ? "#F6B83D" : "#f0f0f0")};
    color: ${({ $active }) => ($active ? "#FFF" : "#262626")};
  }

  @media screen and (min-width: 768px) {
    width: ${({ $active }) => ($active ? "125px" : "100px")};
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0;
  }
`;

// Icon Expensive
export const IconContainerExpensive = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 12px;
  right: 12px;
  display: ${({ $active }) => ($active ? "block" : "none")};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;
  }
`;
