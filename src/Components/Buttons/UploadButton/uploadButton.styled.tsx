import styled from "styled-components";

export const ButtonUpdateImg = styled.button`
  width: 100%;
  height: 42px;
  background-color: rgba(255, 244, 223, 1);
  border-radius: 30px;
  padding: 0 12px;

  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: rgba(38, 38, 38, 1);
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: rgba(246, 206, 131, 1);
    color: rgba(112, 106, 106, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const UploadImageIContainer = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 8px;
`;