import styled from "styled-components";
import Header from "../components/Header/Header";
import Carrossel from "../components/SecaoCarrossel/carrossel";
import { Titulo } from "../components/Titulo/Titulo";
import "../components/Titulo/titulo.css";
import CardProduto from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import BannerConteudo from "../components/StyledBanner/BannerConteudo";

const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
`;
const HeaderContent = styled.section`
  width: 100%;
`;
const Content = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeaderContent>
        <Header />
      </HeaderContent>
      <Carrossel />
      <Content>
        <Titulo className="title-resize">PRODUTOS MAIS PROCURADOS</Titulo>
        <CardProduto />
      </Content>
      <BannerConteudo />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
