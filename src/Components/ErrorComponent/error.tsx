import { NavLink } from "react-router-dom";
import { CatIconError } from "../../Image/error/cat";
import { FourIconError } from "../../Image/error/four";
import {
  MainContainer,
  IconContainer,
  CatIconContainer,
  Title,
  ButtonReturn,
} from "./error.styled";

const ErrorComponent = () => {
    return (
      <>
        <MainContainer>
          <IconContainer>
            <div>
              <FourIconError />
            </div>
            <CatIconContainer>
              <CatIconError />
            </CatIconContainer>
            <div>
              <FourIconError />
            </div>
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