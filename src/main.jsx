import React from "react";
import ReactDOM from "react-dom/client";

//Paginas
import Home from "../pages/Home.jsx";
import Produtos from "../pages/Produtos.jsx";
import ProdutosLista from "../pages/Produtos.jsx";
import ProdutoDetalhe from "../components/ProdutoDetalhe/ProdutoDetalhe.jsx";

import "./Index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/produtos-lista" element={<ProdutosLista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
