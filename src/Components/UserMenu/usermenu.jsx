import userIcon from '../../Image/symbol-defs.svg';
import {UserMenuContainer, UserMenuMobileContainer, UserMenuTabletContainer } from './usermenu.styled'

const UserMenu = () => {
    return (
      <UserMenuContainer>
        {/* mobile user menu */}
        <UserMenuMobileContainer>
          <svg width="20" height="20">
            <use href={`${userIcon}#icon-user`}></use>
          </svg>
        </UserMenuMobileContainer>

            {/* tablet user menu */}
        <UserMenuTabletContainer>
          <svg width="20" height="20">
            <use href={`${userIcon}#icon-user`}></use>
                </svg>
                <h2></h2>
        </UserMenuTabletContainer>
      </UserMenuContainer>
    );
}

export default UserMenu;