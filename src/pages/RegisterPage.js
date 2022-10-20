import styled from "styled-components";
import logo from "../assets/images/logo.png";
import FormRegister from "../components/FormRegister/FormRegister";

export default function RegisterPage() {
  return (
    <ContainerRegister>
      <img src={logo} alt="Logo Trackit" />
      <FormRegister />
    </ContainerRegister>
  );
}

const ContainerRegister = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca";
`;
