import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Paginacao/Paginacao"; // Certifique-se de que o caminho esteja correto
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Titulo } from "../components/Titulo/Titulo";
import Carrossel from "../components/SecaoCarrossel/carrossel";

const api = "https://ecommerce-iphones-api.onrender.com";

const ProdutosContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProdutosUl = styled.ul`
  margin: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const ImgProduto = styled.img`
  width: 150px;
  margin: 20px auto;
`;

const Produto = styled.li`
  min-width: 150px;
  width: 250px;
  min-height: 350px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0px 0px 3px 2px rgba(112, 112, 112, 0.2);
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const TituloProduto = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 5px 10px;
`;

const BtnVerMais = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: #212529;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;

  &:hover {
    background-color: #5f7081;
  }
`;

const ProdutosLista = () => {
  const [produtos, setProdutos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 6; // Reduzido para 6 produtos por página

  const fetchInfo = async () => {
    try {
      const response = await axios.get(`${api}/api/produtos`);
      // Certifique-se de que a estrutura está correta
      setProdutos(response.data); // Supondo que a API retorna uma lista de produtos
      setLoading(false);
    } catch (err) {
      setError("Erro ao carregar dados");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) return <div>...Loading</div>;
  if (error) return <p>{error}</p>;

  const paginatedProducts = produtos.slice(offset, offset + limit);
  const total = produtos.length;

  return (
    <ProdutosContainer>
      <Header />
      <Carrossel />
      <Titulo style={{ margin: "40px" }}>Produtos Apple</Titulo>
      <ProdutosUl>
        {paginatedProducts.map((produto) => (
          <Produto key={produto.Iphone.id}>
            <Link to={`/produto/${produto.Iphone.id}`}>
              <TituloProduto>{produto.Iphone.nome}</TituloProduto>
              <ImgProduto
                src={`${api}${produto.Iphone.foto}`}
                alt={produto.Iphone.nome}
              />
            </Link>
            <Link to={`/produto/${produto.Iphone.id}`}>
              <BtnVerMais>Ver mais</BtnVerMais>
            </Link>
          </Produto>
        ))}
      </ProdutosUl>
      <Pagination
        limit={limit}
        total={total}
        offset={offset}
        setOffset={setOffset}
      />
      <Footer />
    </ProdutosContainer>
  );
};

export default ProdutosLista;
