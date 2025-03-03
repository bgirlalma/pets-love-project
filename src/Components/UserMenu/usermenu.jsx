
import userIcon from '../../Image/symbol-defs.svg';
import { useHookAuth } from '../../Redux/hooks/authhook';
import {
  UserMenuContainer,
  UserMenuMobileContainer,
  UserMenuTablet,
  UserName,
} from "./usermenu.styled";

const UserMenu = () => {
  const { userIsLogIn } = useHookAuth();

    return (
      <UserMenuContainer>
        {/* mobile user menu */}
        <UserMenuMobileContainer>
          <svg width="20" height="20">
            <use href={`${userIcon}#icon-user`}></use>
          </svg>
        </UserMenuMobileContainer>

        {/* tablet user menu */}
        {userIsLogIn && (
          <>
            <UserMenuTablet>
              <svg width="24" height="24">
                <use href={`${userIcon}#icon-user`}></use>
              </svg>
            </UserMenuTablet>
            <UserName>Anna</UserName>
          </>
        )}
      </UserMenuContainer>
    );
}

export default UserMenu;