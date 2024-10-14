import styled from "styled-components";
import "./titulo.css"

export const Titulo = styled.h1`
  color: ${props => props.Cor || "#000" };
  font-size: ${props => props.Size || "16px"};
  font-weight: 700;
  font-family: "Montserrat";
  text-align: center;
  margin: 10px 5px;
  padding: 5px;
  border: 1px solid #ccc;
`;
