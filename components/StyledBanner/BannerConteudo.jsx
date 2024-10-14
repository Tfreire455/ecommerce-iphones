import { useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import styled from "styled-components";
import ScrollReveal from "scrollreveal";
import "./BannerConteudo.css";
import img1 from "../../assets/pexeliphone.jpg";
import img2 from "../../assets/pexeliphone2.jpg";

const IMAGES = [img1, img2]; // Adicione mais imagens conforme necessário

const TitleBanner = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 900;
  color: #fff;
`;

const BgImage = styled.div`
  background-image: url(${(props) => props.bgImage});
  transition: background-image 1s ease-in-out;
  height: 40vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`;

const DivContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const BannerConteudo = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".contentBanner", {
      duration: 2000,
      scale: 0.85,
      distance: "20px",
      origin: "bottom",
      easing: "ease-out",
    });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
    }, 5000); // Troca de imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const [typeEffect] = useTypewriter({
    words: [
      "Tecnologia na palma da sua mão",
      "Capture cada momento com perfeição",
      "O futuro está ao seu alcance",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50
  });

  return (
    <BgImage bgImage={IMAGES[currentImage]} className="bg-image gradient">
      <DivContainer className="div-container">
        <TitleBanner className="contentBanner">
          {typeEffect}
        </TitleBanner>
      </DivContainer>
    </BgImage>
  );
};

export default BannerConteudo;
