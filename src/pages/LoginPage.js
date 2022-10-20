import styled from "styled-components";
import logo from "../assets/images/logo.png";
import FormLogin from "../components/FormLogin/FormLogin";
import { fontText } from "../constants/constants";

export default function LoginPage() {
  return (
    <ContainerLogin>
      <img src={logo} alt="Logo Trackit" />
      <FormLogin />
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fontText};
`;
