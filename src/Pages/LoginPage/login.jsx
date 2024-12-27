import LoginComponent from "../../Components/Login/login";
import styled from "styled-components";

const Container = styled.div`
  width: 375px;
  padding: 0 20px 20px;
  margin-right: auto;
  margin-left: auto;
`;

const LoginPage = () => {
    return (
        <Container>
            <LoginComponent/>
        </Container>
     )
}

export default LoginPage;