import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for routing
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assets/1.png";

const Logo = styled.img`
  width: 200px;
  padding: 0 20px;
`;

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark w-100">
      <Container className="container-flex navbar">
        <Navbar.Brand as={Link} to="/home">
          <Logo src={logo} alt="Company Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-link"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar">
            <Nav.Link as={Link} to="/home" className="custom-link">
              INÍCIO
            </Nav.Link>
            <NavDropdown
              title="PRODUTOS"
              id="collapsible-nav-dropdown"
              className="custom-dropdown-toggle custom-link"
            >
              <NavDropdown.Item as={Link} to="/produtos">iPhones</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
