import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";

import "./card.css";

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

function CardProduto() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/apiProdutos.json")
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  const MaisProcurados = produtos.slice(0, 5);

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal(".hover-effect", {
      duration: 2000,
    });
  }, []);

  const handleWhatsAppRedirect = (nome, preco) => {
    const numero = "5511992577103"; // Número de WhatsApp com código do país e DDD
    const mensagem = `Gostaria de saber mais sobre ${nome}, que está com o valor de ${preco}`;
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  return (
    <ContainerCard>
      {MaisProcurados.map((produto, index) => (
        <Card
          key={index}
          style={{ width: "14rem" }}
          className="hover-effect hover-gradient"
        >
          <Link to={`/produto/${produto.Iphone.id}`}>
            <Card.Img
              variant="top"
              src={produto.Iphone.foto}
              className="img-card"
            />
            <Card.Body>
              <Card.Title>{produto.Iphone.nome}</Card.Title>
              <Card.Text>{produto.Iphone.preco}</Card.Text>
              <br />
              <Button
                className="btn-messsage"
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
        </Card>
      ))}
    </ContainerCard>
  );
}

export default CardProduto;