import { IconMenu } from "../../Image/userimg/menu";
import Logo from "../Logo/logo";
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
} from "./headerComponent.styled";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useHookAuth } from "../../Redux/hooks/authhook";
import UserMenu from "../UserMenu/usermenu";
import HeaderModal from "../Modal/HeaderModal/headerModal";
import { MenuWhite } from "../../Image/userimg/menu-white";

const HeaderComponent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [sizeIcon, setSizeIcon] = useState({ width: 22, height: 22 });
  const navigate = useNavigate();
  const location = useLocation();
  const { userIsLogIn } = useHookAuth();
  const isHome = location.pathname === "/home";

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

  const toggleButton = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const handleNavigate = (path) => {
    if (location.pathname === path) {
      Notify.info("Ви вже на цій сторінці!");
    }
    navigate(path);
  };

  return (
    <HeaderContainer>
      <PositionContainer>
        <Logo />

        {userIsLogIn && <UserMenu />}
        {/* Header of mobile and tablet */}
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

        {!userIsLogIn &&
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
        }
      </PositionContainer>
    </HeaderContainer>
  );
};

export default HeaderComponent;
