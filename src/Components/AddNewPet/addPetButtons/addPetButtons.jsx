import {  useState } from "react"
import { NavLink } from "react-router-dom"
import {ButtonsContainer, ButtonBack, ButtonSubmit} from './addPetButtons.styled'

const AddPetButton = () => {
    const [, setCloseAddPetMenu] = useState(false)
   const comeback = location.pathname === '/pets/profile'

    const handleButtonClick = () => {
       
        setCloseAddPetMenu(true)
        comeback()
   }
    
    return (
      <ButtonsContainer>
        <ButtonBack type="button">
          <NavLink to="/profile">Back</NavLink>
        </ButtonBack>
        <ButtonSubmit type="submit" onClick={handleButtonClick}>Submit</ButtonSubmit>
      </ButtonsContainer>
    );
}

export default AddPetButton