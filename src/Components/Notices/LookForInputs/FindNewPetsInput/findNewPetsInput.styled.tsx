import styled from "styled-components";

export const LookForPetsContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 48px;
  }
`;

export const LookForPetsInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 42px;
  padding: 0 12px 0 12px;
  border-radius: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(38, 38, 38, 1);

  &::placeholder {
    color: rgba(38, 38, 38, 1);
    font-size: 14px;
  }

  &:focus {
    border: 1px solid rgba(246, 184, 61, 1);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 230px;
    height: 48px;

    font-size: 16px;
    line-height: 20px;
    padding: 0 14px 0 14px;
  }
`;

export const IconPetsContainer = styled.div`
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-45%);
  margin-right: 12px;
`;

