import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonLearnMore = styled.button`
  width: 230px;
  height: 46px;
  border-radius: 30px;

  background-color: rgba(246, 184, 61, 1);
  transition: background-color 0.5s ease;

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 1);
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 244, 223, 1);

    a {
      color: rgba(246, 184, 61, 1);
    }
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
interface LearnMoreButtonProps {
  pet: any; // можно временно поставить any
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({pet}) => {
  return (
    <>
      <ButtonLearnMore type="button">
        <NavLink to="modal-notice" state={{pet}}>Learn more</NavLink>
      </ButtonLearnMore>
    </>
  );
};

export default LearnMoreButton;
