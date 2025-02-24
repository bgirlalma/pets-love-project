import React, { useEffect } from 'react';
import {
  BurderMobileTabletContainer,
  IconCloseContainer,
  ListMobileTabletContainer,
  ItemsMobileTablet,
  NavList,
  ButtonMobileTabletContainer,
  ButtonLogIn,
  ButtonRegister,
} from "./headerMOdal.styled";

import close from "../../../Image/symbol-defs.svg";
import { Logout } from '../../UserMenu/ButtonLogout/buttonLogout';
import { useHookAuth } from '../../../Redux/hooks/authhook';


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

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
            document.body.style.top = "0";
            document.body.style.left = "0";
        
    } else {
      document.body.style.overflow = "";
         document.body.style.position = "";
         document.body.style.top = "";
         document.body.style.left = "";
    }

    return () => {document.body.style.overflow = "";}
  },[isOpenMenu])
  return (
    <>
      {isOpenMenu && (
        <BurderMobileTabletContainer>
          <IconCloseContainer onClick={toggleButton}>
            <svg width={sizeIcon.width} height={sizeIcon.height}>
              <use href={`${close}#icon-close`}></use>
            </svg>
          </IconCloseContainer>
          <div>
            <ListMobileTabletContainer>
              <ItemsMobileTablet>
                <NavList to="/news">News</NavList>
              </ItemsMobileTablet>
              <ItemsMobileTablet>
                <NavList to="">Find pet</NavList>
              </ItemsMobileTablet>
              <ItemsMobileTablet>
                <NavList to="">Our friends</NavList>
              </ItemsMobileTablet>
            </ListMobileTabletContainer>
          </div>

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
      )}
    </>
  );
};

export default HeaderModal;