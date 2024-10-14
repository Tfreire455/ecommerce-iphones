import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import axios from "axios";
import "./card.css";

const api = "https://ecommerce-iphones-api.onrender.com";

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  width: 14rem;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function CardProduto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get(`${api}/api/produtos`);
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  const MaisProcurados = produtos.slice(0, 5);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".hover-effect", {
      duration: 2000,
    });
  }, []);

  const handleWhatsAppRedirect = (nome, preco) => {
    const numero = "5511996787679"; // Número de WhatsApp com código do país e DDD
    const mensagem = `Gostaria de saber mais sobre ${nome}, que está com o valor de ${preco}`;
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  return (
    <ContainerCard>
      {MaisProcurados.map((produto) => (
        <StyledCard
          key={produto.Iphone.id} // Usando ID do produto como chave
          className="hover-effect hover-gradient"
        >
          <Link to={`/produto/${produto.Iphone.id}`}>
            <Card.Img
              variant="top"
              src={`${api}${produto.Iphone.foto}`}
              className="img-card"
            />
            <Card.Body>
              <Card.Title>{produto.Iphone.nome}</Card.Title>
              <Card.Text>{produto.Iphone.preco}</Card.Text>
              <br />
              <Button
                className="btn-message" // Corrigido o nome da classe
                variant="primary"
                onClick={() =>
                  handleWhatsAppRedirect(
                    produto.Iphone.nome,
                    produto.Iphone.preco
                  )
                }
              >
                Enviar Mensagem
              </Button>
            </Card.Body>
          </Link>
        </StyledCard>
      ))}
    </ContainerCard>
  );
}

export default CardProduto;
