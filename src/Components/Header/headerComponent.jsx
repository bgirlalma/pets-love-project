import Logo from "../Logo/logo";
import menu from '../../Image/symbol-defs.svg'
import { HeaderContainer } from "./headerComponent.styled";
const HeaderComponent = () => {
    return (
      <HeaderContainer>
        <Logo />
     
          <svg width="22" height="22">
            <use href={`${menu}#icon-menu`}></use>
          </svg>
    
      </HeaderContainer>
    );
}

export default HeaderComponent;