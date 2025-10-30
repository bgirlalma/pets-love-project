import {
  BurderMobileTabletContainer,
  IconCloseContainer,
  ListMobileTabletContainer,
  ListMobileTablet,
  ItemsMobileTablet,
  NavList,
  ButtonMobileTabletContainer,
  ButtonLogIn,
  ButtonRegister,
} from "./headerModal.styled";

import close from "../../../Image/symbol-defs.svg";
import { useHookAuth } from '../../../Redux/hooks/authhook';
import Logout from '../../UserMenu/ButtonLogout/buttonLogout';


interface Props {
  isOpenMenu: boolean;
  sizeIcon: { width: number; height: number };
  toggleButton: () => void;
  handleNavigate: (path: string) => void
}
const HeaderModal = ({
  isOpenMenu,
  sizeIcon,
  toggleButton,
  handleNavigate,
}) => {
  const { userIsLogIn } = useHookAuth();


  return (
    <>
        <BurderMobileTabletContainer $isOpen={isOpenMenu}>
          <IconCloseContainer onClick={toggleButton}>
            <svg width={sizeIcon.width} height={sizeIcon.height}>
              <use href={`${close}#icon-close`}></use>
            </svg>
          </IconCloseContainer>
          <ListMobileTabletContainer>
            <ListMobileTablet>
              <ItemsMobileTablet>
                <NavList to="/news">News</NavList>
              </ItemsMobileTablet>
              <ItemsMobileTablet>
                <NavList to="/notices">Find pet</NavList>
              </ItemsMobileTablet>
              <ItemsMobileTablet>
                <NavList to="/friends">Our friends</NavList>
              </ItemsMobileTablet>
            </ListMobileTablet>
          </ListMobileTabletContainer>

          {userIsLogIn ? (
            <Logout />
          ) : (
            <ButtonMobileTabletContainer>
              <ButtonLogIn
                type="button"
                onClick={() => handleNavigate("/login")}
              >
                Log In
              </ButtonLogIn>
              <ButtonRegister
                type="button"
                onClick={() => handleNavigate("/registration")}
              >
                Registration
              </ButtonRegister>
            </ButtonMobileTabletContainer>
          )}
        </BurderMobileTabletContainer>
    </>
  );
};

export default HeaderModal;