import { useDispatch } from 'react-redux';
import { LogoutButtonContainer, LogoutButton } from './buttonlogout.styled';
import { logoutUser } from '../../../Redux/userAuth/userOptions';


export const Logout = () => {
    const dispatch = useDispatch()
    
    const handleLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <LogoutButtonContainer>
            <LogoutButton type="button" onClick={handleLogout}>Log out</LogoutButton>
         </LogoutButtonContainer>
     )
}