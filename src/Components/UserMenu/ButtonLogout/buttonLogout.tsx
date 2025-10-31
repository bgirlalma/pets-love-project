import { useDispatch } from 'react-redux';
import { LogoutButtonContainer, LogoutButton } from './/buttonlogout.styled';

import React, { useState } from 'react';
import { logoutUser } from '../../../Redux/userAuth/userOptions';
import { AppDispatch } from '../../../Redux/store';

 const Logout: React.FC = () => {
     const dispatch = useDispatch<AppDispatch>();

   const handleLogout = () => {
      dispatch(logoutUser());
       
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