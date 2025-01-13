import styled from "styled-components";


export const UserMenuContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  margin-right: 32px;
  transform: translateY(-50%);
`;

export const UserMenuMobileContainer = styled.div`
  background-color: rgba(255, 244, 223, 1);
  border-radius: 50%;
 width: 40px;
 height: 40px;

 display: flex;
 justify-content: center;
 align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const UserMenuTabletContainer = styled.div`
display: none;

@media screen and (min-width: 768px){
display: flex;
}
`;