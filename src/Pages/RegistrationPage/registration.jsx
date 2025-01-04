import RegistrationComponent from "../../Components/Registration/registration";
import styled from "styled-components";

const Container = styled.div`
  width: 320px;
  padding: 0 20px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

const RegistrationPage = () => {
    return (
        <Container>
            <RegistrationComponent/>
        </Container>
     )
}

export default RegistrationPage;