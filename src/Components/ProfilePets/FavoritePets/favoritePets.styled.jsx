import styled from "styled-components";

// block favorite pets start

export const FavoriteButtonPets = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 30px;
  background-color: rgba(246, 184, 61, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);

  transition: background-color 0.7s ease, color 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(246, 184, 61, 1);
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    height: 48px;
    font-size: 16px;
    line-height: 26px;
  }
`;
