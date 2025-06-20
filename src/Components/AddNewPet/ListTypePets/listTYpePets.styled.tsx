import styled from "styled-components";


export const ListStyled = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 14px 20px 10px 14px;
  border: 1px solid rgba(38, 38, 38, 0.15);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  overflow-y: auto;
  box-sizing: border-box;

  /* Стили для скроллбара в WebKit браузерах (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 13px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(38, 38, 38, 0.08);
    border-radius: 13px;
    height: 80px;
  }
`;

export const ItemsStyled = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  color: rgba(38, 38, 38, 1);

  &:last-child{
  margin-bottom: 0;
  }
`;