import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import BannerConteudo from "../StyledBanner/BannerConteudo";
import Loading from "../Loading/Loading";

import "./produtoDetalhe.css";

const ProdutosContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
`;

const ProdutoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 10px auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const ImgProduto = styled.img`
  width: 40%;
  max-width: 400px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProdutoTitulo = styled.h1`
  font-size: 2.4rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProdutoPreco = styled.p`
  font-size: 1.8rem;
  color: #e63946;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProdutoDescricao = styled.p`
  font-size: 12px;
  color: #555;
  text-align: start;
  line-height: 1.6;
  margin-right: 20px;
  margin-left: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const DivProdutoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EspecificacaoTitulo = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: start;
  margin: 10px;
  text-transform: uppercase;
  font-size: 1rem;
`;

const EspecificacaoSubtitulo = styled.h6`
  font-weight: 700;
  font-size: 0.8rem;
  margin-top: 10px;
`;

const EspecificacaoLista = styled.ul`
  list-style: none;
`;

const EspecificacaoConteudo = styled.li`
  color: ${(props) => props.CorDoTexto};
  background-color: ${(props) => props.Cor};
  padding: 5px;
  font-family: "Montserrat", sans-serif;
  border-radius: 4px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5173/apiProdutos.json")
      .then((response) => response.json())
      .then((data) => {
        const produtoEncontrado = data.find(
          (p) => p.Iphone.id === parseInt(id)
        );
        setProduto(produtoEncontrado);
      });
  }, [id]);

  const handleWhatsAppRedirect = (nome, preco) => {
    const numero = "5511992577103"; // Número de WhatsApp com código do país e DDD
    const mensagem = `Gostaria de saber mais sobre ${nome}, que está com o valor de ${preco}`;
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  if (!produto) {
    return <Loading />;
  } else {
    const { Iphone } = produto;
    return (
      <ProdutosContainer>
        <Header />
        <ProdutoWrapper>
          <DivProdutoRow>
            <ImgProduto src={Iphone?.foto} alt={Iphone?.nome} />
            <div>
              <ProdutoTitulo>{Iphone?.nome}</ProdutoTitulo>
              <ProdutoPreco>Preço: {Iphone?.preco}</ProdutoPreco>
              <ProdutoDescricao>
                Descrição: {Iphone?.descricao}
              </ProdutoDescricao>
          <Button
            className="btn-messsage"
            variant="primary"
            onClick={() =>
              handleWhatsAppRedirect(produto.Iphone.nome, produto.Iphone.preco)
            }
          >
            Enviar Mensagem
          </Button>
            </div>
          </DivProdutoRow>

          <Accordion className="Accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Especificações</Accordion.Header>
              <Accordion.Body>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>modelo</EspecificacaoTitulo>
                    {Iphone?.especificacoes?.model}
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>tela</EspecificacaoTitulo>
                    <EspecificacaoSubtitulo>Tipo:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.display?.type}
                    <EspecificacaoSubtitulo>Tamanho:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.display?.size}
                    <EspecificacaoSubtitulo>Resolução:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.display?.resolution}
                    <EspecificacaoSubtitulo>
                      Descrição da Tela:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.display?.display_description}
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>processador</EspecificacaoTitulo>
                    <EspecificacaoSubtitulo>Tipo:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.processor.type}
                    <EspecificacaoSubtitulo>
                      Descrição do Processador:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.processor.processor_description}
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>câmera</EspecificacaoTitulo>
                    <EspecificacaoSubtitulo>Sistema:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.camera?.system}
                    <EspecificacaoSubtitulo>
                      Sensor Principal:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.camera?.main_sensor}
                    <EspecificacaoSubtitulo>
                      Sensor Ultra Amplo:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.camera?.ultra_wide_sensor}
                    <EspecificacaoSubtitulo>
                      Sensor Telefoto:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.camera?.telephoto_sensor}
                    <EspecificacaoSubtitulo>Zoom:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.camera?.zoom}
                    <EspecificacaoSubtitulo>
                      Descrição da Câmera:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.camera?.camera_description.map(
                      (item) => {
                        // eslint-disable-next-line react/jsx-key
                        return <div style={{ margin: "10px" }}>{item}</div>;
                      }
                    )}
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>Bateria</EspecificacaoTitulo>
                    <EspecificacaoSubtitulo>Tipo:</EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.battery?.type}
                    <EspecificacaoSubtitulo>
                      Carregamento Rápido:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.battery?.charging.fast_charging}
                    <EspecificacaoSubtitulo>
                      Carregamento Wireless:
                    </EspecificacaoSubtitulo>
                    {
                      Iphone?.especificacoes?.battery?.charging
                        .wireless_charging
                    }
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>
                      Sistema Operacional
                    </EspecificacaoTitulo>
                    {Iphone?.especificacoes?.operating_system}
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
                <EspecificacaoLista>
                  <EspecificacaoConteudo>
                    <EspecificacaoTitulo>Armazenamento</EspecificacaoTitulo>
                    <EspecificacaoSubtitulo>
                      Opções de armazenamento:
                    </EspecificacaoSubtitulo>
                    {Iphone?.especificacoes?.storage_options.map((item) => {
                      // eslint-disable-next-line react/jsx-key
                      return <div style={{ margin: "10px" }}>{item}</div>;
                    })}
                  </EspecificacaoConteudo>
                </EspecificacaoLista>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ProdutoWrapper>
        <BannerConteudo />
        <Footer />
      </ProdutosContainer>
    );
  }
};

export default ProdutoDetalhe;
