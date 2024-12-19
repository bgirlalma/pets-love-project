import { Outlet } from "react-router-dom";
import HeaderComponent from "./Components/Header/headerComponent";
import GlobalStyled from "./GlobalStyled";

const Layout = () => {
    return (
        <div>
            <HeaderComponent />
            <GlobalStyled/>
            <Outlet/>
         </div>
    )
}

export default Layout;