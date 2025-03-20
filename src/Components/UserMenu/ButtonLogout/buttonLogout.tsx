import { useDispatch } from 'react-redux';
import { LogoutButtonContainer, LogoutButton } from './buttonlogout.styled';

import React, { useState } from 'react';
import { loginUser } from '../../../Redux/userAuth/userOptions';
import { AppDispatch } from '../../../Redux/store';

 const Logout = () => {
     const dispatch = useDispatch<AppDispatch>();
     const [closeMenu, setCloseMenu ] = useState(false)

   const handleLogout = () => {
      dispatch(loginUser());
       
   };
   return (
     <LogoutButtonContainer>
       <LogoutButton type="button" onClick={handleLogout}>
         Log out
       </LogoutButton>
     </LogoutButtonContainer>
   );
 };

export default Logout