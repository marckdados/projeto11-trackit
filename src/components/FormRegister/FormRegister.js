import { Link } from "react-router-dom";
import styled from "styled-components";
import { lightBlue, gray, textButton } from "../../constants/constants";

export default function FormRegister() {
  return (
    <ContainerFormRegister>
      <input placeholder="email" type="text" />
      <input placeholder="senha" type="password" />
      <input placeholder="nome" type="text" />
      <input placeholder="foto" type="url" />
      <button>Cadastrar</button>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </ContainerFormRegister>
  );
}

const ContainerFormRegister = styled.form`
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
