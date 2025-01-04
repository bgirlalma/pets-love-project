import { IconMenu } from "../../Image/userimg/menu";
import Logo from "../Logo/logo";
import {
  HeaderContainer,
  PositionContainer,
  BurderMobileTabletContainer,
  IconCloseContainer,
  BurgerDesktopContainer,
  ListMobileTabletContainer,
  ItemsMobileTablet,
  Nav,
  ButtonMobileTabletContainer,
  ButtonLogIn,
  ButtonRegister,
  ButtonsDesktopContainer,
} from "./headerComponent.styled";
import { useState } from "react";
import close from '../../Image/symbol-defs.svg'


const HeaderComponent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleButton = () => {
    setIsOpenMenu((prev) => !prev)
  }

  return (
    <HeaderContainer>
      <PositionContainer>
        <Logo />

        {/* Header of mobile and tablet */}
        <IconMenu OpenMenu={toggleButton} />

        {isOpenMenu && (
          <BurderMobileTabletContainer>
            <IconCloseContainer onClick={toggleButton}>
              <svg width="22" height="22">
                <use href={`${close}#icon-close`}></use>
              </svg>
            </IconCloseContainer>
            <div>
              <ListMobileTabletContainer>
                <ItemsMobileTablet>
                  <Nav>News</Nav>
                </ItemsMobileTablet>
                <ItemsMobileTablet>
                  <Nav>Find pet</Nav>
                </ItemsMobileTablet>
                <ItemsMobileTablet>
                  <Nav>Our friends</Nav>
                </ItemsMobileTablet>
              </ListMobileTabletContainer>
            </div>

            <ButtonMobileTabletContainer>
              <ButtonLogIn type="button">Log In</ButtonLogIn>
              <ButtonRegister type="button">Registration</ButtonRegister>
            </ButtonMobileTabletContainer>
          </BurderMobileTabletContainer>
        )}

        {/* Header of Desktop */}
        <BurgerDesktopContainer>
          <ul>
            <li>
              <Nav>News</Nav>
            </li>
            <li>
              <Nav>Find pet</Nav>
            </li>
            <li>
              <Nav>Our friends</Nav>
            </li>
          </ul>
        </BurgerDesktopContainer>

        <ButtonsDesktopContainer>
          <div>
            <button type="button">Log In</button>
            <button type="button">Registration</button>
          </div>
        </ButtonsDesktopContainer>
      </PositionContainer>
    </HeaderContainer>
  );
};

export default HeaderComponent;
