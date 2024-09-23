import { Titulo } from "../Titulo/Titulo";
import logoInstagram from "../../assets/instagram.png";
import styled from "styled-components";
import "./Footer.css";

const ImgInstagramFooter = styled.img`
  width: 50px;
`;

const AContainerLink = styled.a`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 1px;
`;

const PFooter = styled.p`
  font-size: 16px;
`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-section">
          <Titulo Margin={"0px 10px"} className="titulo">
            Claricel
          </Titulo>
          <PFooter className="paragrafo">
            Revenda autorizada de iPhones e produtos Apple.
          </PFooter>
        </div> */}
        <div className="flex">
          <div className="footer-section">
            <Titulo className="titulo">Siga-nos</Titulo>
            <div className="social-icons">
              <AContainerLink
                href="https://www.instagram.com/_claricel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImgInstagramFooter src={logoInstagram} alt="Instagram" />
                Instagram
              </AContainerLink>
            </div>
          </div>
          <div className="footer-section">
            <Titulo className="titulo">Contato</Titulo>
            <PFooter>Email: contato@claricel.com</PFooter>
            <PFooter>Telefone: (11) 99257-7103</PFooter>
          </div>
        </div>
      </div>
      <br />
      <div className="footer-bottom">
        <p>&copy; 2024 Claricel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
