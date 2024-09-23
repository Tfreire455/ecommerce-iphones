import styled from "styled-components";
import Header from "../components/Header/Header";

const IphoneContainer = styled.section`
  width: 100%;
  height: 100%;
`;

const Iphone = () => {
  return (
    <IphoneContainer>
      <Header />
    </IphoneContainer>
  );
};

export default Iphone;
