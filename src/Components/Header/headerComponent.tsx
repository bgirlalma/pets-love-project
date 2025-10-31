import { IconMenu } from "../../Image/userimg/menu.tsx";
import Logo from "../Logo/logo.tsx";
import {
  HeaderContainer,
  PositionContainer,
  DesktopContainer,
  DesktopList,
  DesktopNews,
  DesktopFindPets,
  DesktopOurFriends,
  DesktopNav,
  ButtonsDesktopContainer,
  ButtonLogInDesktop,
  ButtonRegisterDesktop,
} from "./headerComponent.styled.tsx";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useHookAuth } from "../../Redux/hooks/authhook.ts";
import UserMenu from "../UserMenu/usermenu.tsx";
import HeaderModal from "../Modal/HeaderModal/headerModal.tsx";
import { MenuWhite } from "../../Image/userimg/menu-white.tsx";

interface IconSize {
  width: number;
  height: number;
}

const HeaderComponent: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [sizeIcon, setSizeIcon] = useState<IconSize>({ width: 22, height: 22 });
  const navigate = useNavigate();
  const location = useLocation();
  const { userIsLogIn } = useHookAuth();
  const isHome = location.pathname === "/home";


  // блокуємо скролл при відкритті модалки
  useEffect(() => {
    if (isOpenMenu) {
      // прибираємо зміщення сторінки при відкриті модального вікна
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`;
      
    } else {
      document.body.style.overflow = '';
      document.body.style.width = ''
    }
  }, [location.pathname, isOpenMenu]);

  // закриваємо модальне вікно при переході на іншу сторінку
  useEffect(() => {
    setIsOpenMenu(false)
  },[location.pathname])

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth > 768) {
        setSizeIcon({ width: 36, height: 36 });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const toggleButton = useCallback((): void => {
    setIsOpenMenu((prev) => !prev);
  }, []);

  const handleNavigate = (path: string) => {
    if (location.pathname === path) {
     return Notify.info("Ви вже на цій сторінці!");
    }
    navigate(path);
  };

  return (
    <HeaderContainer>
      <PositionContainer>
        <Logo />

        {/* Header of mobile and tablet */}

        {userIsLogIn && <UserMenu />}

        {isHome ? (
          <MenuWhite OpenMenu={toggleButton} />
        ) : (
          <IconMenu OpenMenu={toggleButton} />
        )}

        <HeaderModal
          isOpenMenu={isOpenMenu}
          sizeIcon={sizeIcon}
          toggleButton={toggleButton}
          handleNavigate={handleNavigate}
        />

        {/* Header of Desktop */}
        <DesktopContainer>
          <DesktopList>
            <DesktopNews $isHome={isHome}>
              <DesktopNav $isHome={isHome} to="/news">
                News
              </DesktopNav>
            </DesktopNews>
            <DesktopFindPets $isHome={isHome}>
              <DesktopNav $isHome={isHome} to="/notices">
                Find pet
              </DesktopNav>
            </DesktopFindPets>
            <DesktopOurFriends $isHome={isHome}>
              <DesktopNav $isHome={isHome} to="/friends">
                Our friends
              </DesktopNav>
            </DesktopOurFriends>
          </DesktopList>
        </DesktopContainer>

        {!userIsLogIn && (
          <ButtonsDesktopContainer>
            <ButtonLogInDesktop
              type="button"
              onClick={() => handleNavigate("/login")}
            >
              Log In
            </ButtonLogInDesktop>
            <ButtonRegisterDesktop
              type="button"
              onClick={() => handleNavigate("/registration")}
            >
              Registration
            </ButtonRegisterDesktop>
          </ButtonsDesktopContainer>
        )}
      </PositionContainer>
    </HeaderContainer>
  );
};

export default HeaderComponent;
