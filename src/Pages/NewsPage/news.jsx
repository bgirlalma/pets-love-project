import styled from "styled-components";
import News from "../../Components/News/news";

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
const NewsPage = () => {
    return (
        <Container>
            <News/>
    </Container>
)
}

export default NewsPage