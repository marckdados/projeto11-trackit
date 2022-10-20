import styled from "styled-components";
import { darkBlue } from "../../constants/constants";

export default function Top() {
  return (
    <ContainerTop>
      <div>
        <h2>Trackit</h2>
        <img
          src="https://akamai.sscdn.co/letras/338x298/fotos/1/2/e/4/12e4ed9aadc37cc19d7d4115889c6a75.jpg"
          alt="Foto Usuário"
        />
      </div>
    </ContainerTop>
  );
}

const ContainerTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${darkBlue};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  div {
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-family: "PlayBall";
    font-size: 2.5em;
    color: #ffffff;
  }

  img {
    width: 15%;
    height: 55px;
    border-radius: 50%;
  }
`;
