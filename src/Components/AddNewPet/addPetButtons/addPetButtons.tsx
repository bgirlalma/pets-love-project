
import { NavLink } from "react-router-dom"
import {ButtonsContainer, ButtonBack, ButtonSubmit} from './addPetButtons.styled'

const AddPetButton = () => {
    
    return (
      <ButtonsContainer>
        <ButtonBack type="button">
          <NavLink to="/profile">Back</NavLink>
        </ButtonBack>
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </ButtonsContainer>
    );
}

export default AddPetButton