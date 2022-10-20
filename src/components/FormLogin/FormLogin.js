import { Link } from "react-router-dom";
import styled from "styled-components";
import { lightBlue, gray, textButton } from "../../constants/constants";

export default function FormLogin() {
  return (
    <ContainerFormLogin>
      <input placeholder="email" />
      <input placeholder="senha" type="password" />
      <button>Entrar</button>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </ContainerFormLogin>
  );
}

const ContainerFormLogin = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-family: "Lexend";

  input {
    height: 50px;
    border: 1px solid ${gray};
    border-radius: 6px;
    font-size: 1.2em;
    font-family: "Lexend";
    padding: 0 10px;
    margin: 10px 0;

    &::placeholder {
      color: ${gray};
    }
  }

  button {
    height: 50px;
    font-size: 1.3em;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    background-color: ${lightBlue};
    color: ${textButton};
  }

  a {
    margin-top: 30px;
    color: ${lightBlue};
    text-align: center;
  }
`;
