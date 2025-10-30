import styled from "styled-components";

export const ViewedButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);
  transition: background-color 0.7s ease, color 0.5s ease;

  &:hover {
    background-color: rgba(67, 64, 64, 1);
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    height: 48px;
    font-size: 16px;
    line-height: 26px;
  }
`;
