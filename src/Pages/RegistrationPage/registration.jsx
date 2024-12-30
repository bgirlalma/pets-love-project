import RegistrationComponent from "../../Components/Registration/registration";
import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  padding: 0 20px 20px;
  margin-right: auto;
  margin-left: auto;
`;

const RegistrationPage = () => {
    return (
        <Container>
            <RegistrationComponent/>
        </Container>
     )
}

export default RegistrationPage;