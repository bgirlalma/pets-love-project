
import { useSelector } from 'react-redux';
import userIcon from '../../Image/symbol-defs.svg';
import { useHookAuth } from '../../Redux/hooks/authhook';
import {
  UserMenuContainer,
  UserMenuMobileContainer,
  UserMenuTablet,
  UserName,
} from "./usermenu.styled";
import { selectedUser } from '../../Redux/userAuth/userSelector';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';


const UserMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setIsOpenEdit] = useState(false);
  const [previousPath, setPreviousPath] = useState(null); // Запоминаем откуда пришли
  const { userIsLogIn } = useHookAuth();
  const currentUser = useSelector(selectedUser);

  // предотвращаем повторное создание новой функции при каждом ренедере
  const ToggleEditProfile = useCallback(() => {
    setIsOpenEdit((prev) => {
      if (!prev) {
        // Если сейчас не в режиме редактирования, запоминаем текущий путь
        setPreviousPath(location.pathname);
        navigate("/profile");
      } else {
        // Если уже в режиме редактирования, возвращаемся обратно
        navigate(previousPath || "/");
      }
      return !prev;
    });
  }, [location.pathname, navigate, previousPath]);
  

  return (
    <UserMenuContainer>
      {/* mobile user menu */}
      {userIsLogIn && (
        <UserMenuMobileContainer>
          <button type="button" onClick={ToggleEditProfile}>
            <svg width="20" height="20">
              <use href={`${userIcon}#icon-user`}></use>
            </svg>
          </button>
        </UserMenuMobileContainer>
      )}

      {/* tablet user menu */}
      {userIsLogIn && (
        <>
          <UserMenuTablet>
            <button type="button" onClick={ToggleEditProfile}>
              <NavLink to="/profile">
                <svg width="24" height="24">
                  <use href={`${userIcon}#icon-user`}></use>
                </svg>
              </NavLink>
            </button>
          </UserMenuTablet>
          <UserName>{currentUser.displayName}</UserName>
        </>
      )}
    </UserMenuContainer>
  );
}

export default UserMenu;