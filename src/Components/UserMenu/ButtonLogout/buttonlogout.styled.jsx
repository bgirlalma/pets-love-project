import styled from "styled-components";


export const LogoutButtonContainer = styled.div`
width: 100%;
`;

export const LogoutButton = styled.button`
  width: 178px;
  height: 42px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  font-size: 14px;
  font-weight: 700;
  line-height: 18px;

  background-color: rgba(255, 244, 223, 1);
  color: rgba(246, 184, 61, 1);

  &:hover {
    background-color: rgba(251, 231, 193, 1);
  }
`;