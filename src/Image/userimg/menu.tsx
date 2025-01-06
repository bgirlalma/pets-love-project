import React from "react";
import styled from "styled-components";

const BurgerButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    svg{
    width: 32px;
    height: 32px;}
  }
`;

interface Props {
  OpenMenu: () => void
}
export const IconMenu: React.FC<Props> = ({ OpenMenu }) => {
  return (
    <BurgerButton onClick={OpenMenu}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16H28"
          stroke="#262626"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8H28"
          stroke="#262626"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 24H28"
          stroke="#262626"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BurgerButton>
  );
};
