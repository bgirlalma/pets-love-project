import userIcon from '../../Image/symbol-defs.svg';
import {
  UserMenuContainer,
  UserMenuMobileContainer,
  UserMenuTabletContainer,
  UserName,
} from "./usermenu.styled";

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
        </UserMenuTabletContainer>
        <UserName>Anna</UserName>
      </UserMenuContainer>
    );
}

export default UserMenu;