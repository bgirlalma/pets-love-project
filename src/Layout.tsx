import { Outlet } from "react-router-dom";
import HeaderComponent from "./Components/Header/headerComponent";
import GlobalStyled from "./GlobalStyled";
import styled from "styled-components";



const MainContainer = styled.div`
  min-width: 320px;
`;
const Layout = () => {
    return (
      <MainContainer>
        <HeaderComponent />
        <GlobalStyled />
  
        
          <Outlet />
 
      </MainContainer>
    );
}

export default Layout;