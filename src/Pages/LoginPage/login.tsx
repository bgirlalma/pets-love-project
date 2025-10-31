import LoginComponent from "../../Components/Login/login";
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
    padding: 0 32px 32px 32px;
  }
`;

const LoginPage = () => {
    return (
        <Container>
            <LoginComponent/>
        </Container>
     )
}

export default LoginPage;