import styled from "styled-components";

interface Prop{
    $isActive? : boolean
}

interface DisabledProp{
    disabled?: boolean
}

export const PaginationButtonContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonReturnOnePage = styled.button<DisabledProp>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;

  svg {
    fill: ${({ disabled }) => (disabled ? "rgba(38, 38, 38, 0.5)" : "#262626")};
  }

  &:hover {
    border-color: #f6b83d;
  }
`;

export const ButtonPreviuosPage = styled.button<DisabledProp>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;

  svg {
    fill: ${({ disabled }) => (disabled ? "rgba(38, 38, 38, 0.5)" : "#262626")};
  }

  &:hover {
    border-color: #f6b83d;
  }
`;


export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pages = styled.button<Prop>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 10px;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  background-color: ${({ $isActive }) => ($isActive ? "#F6B83D" : "inherit")};
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#262626")};

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ButtonNextPage = styled.button<DisabledProp>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;
  margin-right: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;
  svg {
    fill: ${({ disabled }) => (disabled ? "rgba(38, 38, 38, 0.5)" : "#262626")};
  }

  &:hover {
    border-color: #f6b83d;
  }
`;

export const ButtonLastPage = styled.button<DisabledProp>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #2626260d;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.5s ease;
  svg {
    fill: ${({ disabled }) => (disabled ? "rgba(38, 38, 38, 0.5)" : "#262626")};
  }

  &:hover {
    border-color: #f6b83d;
  }
`;
