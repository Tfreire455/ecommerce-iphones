import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

//Imagens do carrossel
import img1 from "../../assets/carrossel1.png";
import img2 from "../../assets/carrossel2.png";
import img3 from "../../assets/carrossel3.png";

//CSS
import "./carrossel.css";

const CarrosselContainer = styled.section`
  width: 100%;
  height: 50%;
  margin: 0 auto;
`;
const ImgCarrossel = styled.img`
  width: 70%;
  height: 10%;
  margin: 0 auto;
`;


function Carrossel() {
  return (
    <CarrosselContainer className="hidden" >
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <ImgCarrossel
            className="w-100 img-alterada"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ImgCarrossel
            className="w-100 img-alterada"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ImgCarrossel
            className="w-100 img-alterada"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </CarrosselContainer>
  );
}

export default Carrossel;
