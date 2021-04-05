import Header from "./components/Header";
import Hero from "./components/Hero";
import styled from "styled-components";
import BgImg from "./assets/bg1.jpg";

function App() {
  return (
    <Container>
      <Header />
      <Hero />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-image: url(${BgImg});
`;
