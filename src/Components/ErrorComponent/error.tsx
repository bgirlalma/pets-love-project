import { NavLink } from "react-router-dom";

import { FourIconError } from "../../Image/error/four";
import {
  MainContainer,
  IconContainer,
  CatIconContainer,
  Title,
  ButtonReturn,
  FourIconContainerOne,
  FourIconContainerTwo,
} from "./error.styled";
import {
  CatIconError
} from "../../Image/error/kitty";

const ErrorComponent = () => {
    return (
      <>
        <MainContainer>
          <IconContainer>
            <FourIconContainerOne>
              <FourIconError />
            </FourIconContainerOne>
            <CatIconContainer>
              <CatIconError/>
            </CatIconContainer>
            <FourIconContainerTwo>
              <FourIconError />
            </FourIconContainerTwo>
          </IconContainer>
          <Title>Ooops! This page not found</Title>
          <ButtonReturn type="button">
            <NavLink to="/home">To home page</NavLink>
          </ButtonReturn>
        </MainContainer>
      </>
    );
}

export default ErrorComponent