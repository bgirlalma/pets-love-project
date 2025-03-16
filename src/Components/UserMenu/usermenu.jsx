
import { useSelector } from 'react-redux';
import userIcon from '../../Image/symbol-defs.svg';
import { useHookAuth } from '../../Redux/hooks/authhook';
import {
  UserMenuContainer,
  UserMenuMobileContainer,
  UserMenuTablet,
  UserName,
} from "./usermenu.styled";
import { selectedUserName } from '../../Redux/userAuth/userSelector';
import ProfileModalMenu from '../Modal/UserModal/userModalMenu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const UserMenu = () => {
  const [iseOpenEdit, setIsOpenEdit] = useState(false);
  const { userIsLogIn } = useHookAuth();
  const currentUser = useSelector(selectedUserName)


  const OpenEditProfile = () => {
    setIsOpenEdit(true)
  }
    return (
      <UserMenuContainer>
        {/* mobile user menu */}
        {userIsLogIn && (
          <UserMenuMobileContainer>
            <button type="button" onClick={OpenEditProfile}>
              <NavLink to="/profile">
                <svg width="20" height="20">
                  <use href={`${userIcon}#icon-user`}></use>
                </svg>
              </NavLink>
            </button>
          </UserMenuMobileContainer>
        )}

        {/* tablet user menu */}
        {userIsLogIn && (
          <>
            <UserMenuTablet>
              <button type="button" onClick={OpenEditProfile}>
                <NavLink to="/profile">
                  <svg width="24" height="24">
                    <use href={`${userIcon}#icon-user`}></use>
                  </svg>
                </NavLink>
              </button>
            </UserMenuTablet>
            <UserName>{currentUser}</UserName>
          </>
        )}

        {iseOpenEdit && <ProfileModalMenu />}
      </UserMenuContainer>
    );
}

export default UserMenu;