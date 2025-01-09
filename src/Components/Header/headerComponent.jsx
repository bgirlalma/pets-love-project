import { IconMenu } from "../../Image/userimg/menu";
import Logo from "../Logo/logo";
import {
  HeaderContainer,
  PositionContainer,
  BurderMobileTabletContainer,
  IconCloseContainer,
  ListMobileTabletContainer,
  ItemsMobileTablet,
  Nav,
  ButtonMobileTabletContainer,
  ButtonLogIn,
  ButtonRegister,
  DesktopContainer,
  DesktopList,
  DesktopNews,
  DesktopFindPets,
  DesktopOurFriends,
  DesktopNav,
  ButtonsDesktopContainer,
  ButtonLogInDesktop,
  ButtonRegisterDesktop,
} from "./headerComponent.styled";
import { useEffect, useState } from "react";
import close from '../../Image/symbol-defs.svg'
import { useLocation, useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const HeaderComponent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [sizeIcon, setSizeIcon] = useState({width: 22, height: 22})
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (isOpenMenu) {
      setIsOpenMenu(false)
    }
  }, [location.pathname])
  

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 768) {
        setSizeIcon({width: 36, height: 36})
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  },[])

  const toggleButton = () => {
    setIsOpenMenu((prev) => !prev)
  }

  const handleNavigate = (path) => {
    if (location.pathname === path) {
      Notify.info('Ви вже на цій сторінці!')
    }
    navigate(path)
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
              <svg width={sizeIcon.width } height={sizeIcon.height}>
                <use href={`${close}#icon-close`}></use>
              </svg>
            </IconCloseContainer>
            <div>
              <ListMobileTabletContainer>
                <ItemsMobileTablet>
                  <Nav to="/news">News</Nav>
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
              <ButtonLogIn type="button" onClick={() => handleNavigate('/login')}>
               Log In
              </ButtonLogIn>
              <ButtonRegister type="button" onClick={() => handleNavigate('/registration')}>
              Registration
              </ButtonRegister>
            </ButtonMobileTabletContainer>
          </BurderMobileTabletContainer>
        )}

        {/* Header of Desktop */}
        <DesktopContainer>
          <DesktopList>
            <DesktopNews>
              <DesktopNav to="/news">News</DesktopNav>
            </DesktopNews>
            <DesktopFindPets>
              <DesktopNav>Find pet</DesktopNav>
            </DesktopFindPets>
            <DesktopOurFriends>
              <DesktopNav>Our friends</DesktopNav>
            </DesktopOurFriends>
          </DesktopList>
        </DesktopContainer>

        <ButtonsDesktopContainer>
         
            <ButtonLogInDesktop type="button" onClick={() => handleNavigate('/login')}>Log In</ButtonLogInDesktop>
            <ButtonRegisterDesktop type="button" onClick={() => handleNavigate('/registration')}>Registration</ButtonRegisterDesktop>
      
        </ButtonsDesktopContainer>
      </PositionContainer>
    </HeaderContainer>
  );
};

export default HeaderComponent;
