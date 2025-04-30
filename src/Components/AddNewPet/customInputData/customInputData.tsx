
import React from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

export const DataField = styled.input.attrs({ type: "text" })`
  width: 144px;
  height: 42px;
  outline: none;
  cursor: pointer;
  padding: 0 12px;
  color: rgba(38, 38, 38, 0.5);
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  margin-right: 10px;
`;

interface Props {
    value?: string;
    onClick: () => void
}

const DataCustomInput = React.forwardRef<HTMLInputElement, Partial<Props>>(
  ({ value , onClick  }, ref) => {
    return <DataField type="text" onClick={onClick} ref={ref} value={value} readOnly />;
  }
);

export default DataCustomInput;