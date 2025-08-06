import styled from "styled-components";

export const InputSearchContainer = styled.div`
  position: relative;
  width: 335px;
  margin-bottom: 24px;
`;

export const SearchInput = styled.input.attrs({type: "text"})`
  width: 335px;
  height: 42px;
  padding: 0 12px 0 12px;
  border-radius: 30px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  background-color: inherit;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(38, 38, 38, 0.5);

  &:focus {
    border: 1px solid rgba(246, 184, 61, 1);
    outline: none;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 55%;
  right: 0;
  transform: translateY(-45%);
  margin-right: 12px;
`;
