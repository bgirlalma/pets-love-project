import React from "react";

import styled from "styled-components";

const BurgerButton = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
  margin-right: 30px;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

interface Props {
  OpenMenu: () => void
}
export const MenuWhite: React.FC<Props> = ({OpenMenu}) => {
    return (
      <BurgerButton onClick={OpenMenu}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16H28"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 8H28"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 24H28"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </BurgerButton>
    );
}
