import styled from "styled-components";
import CreateHabits from "../components/Habits/CreateHabits";
import Top from "../components/Top/Top";
import {
  darkBlue,
  fontText,
  gray,
  lightBlue,
  textButton,
} from "../constants/constants";

export default function HabitsPage() {
  return (
    <ContainerHabitsPage>
      <Top />
      <TittleHabits>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </TittleHabits>
      <CreateHabits />
      {/* <TextNoHabits>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </TextNoHabits> */}
    </ContainerHabitsPage>
  );
}

const ContainerHabitsPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${fontText};
  background-color: #e5e5e5;
`;

const TittleHabits = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-family: ${fontText};
  margin-top: 30%;
  h2 {
    font-size: 1.5em;
    color: ${darkBlue};
  }

  button {
    width: 10%;
    height: 30px;
    background-color: ${lightBlue};
    color: ${textButton};
    font-weight: 700;
    text-align: center;
    border-radius: 6px;
    border: none;
  }
`;

const TextNoHabits = styled.div`
  margin-top: 30px;
  width: 90%;
  font-size: 1.1em;
  color: #666666;
`;
