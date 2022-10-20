import styled from "styled-components";
import {
  fontText,
  gray,
  lightBlue,
  textButton,
} from "../../constants/constants";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function CreateHabits() {
  return (
    <ContainerCreateHabits>
      <FormHabits>
        <input placeholder="nome do hábito" />
        <ContainerWeekDays>
          {weekDays.map((day, index) => {
            return <ButtonDays key={index}>{day}</ButtonDays>;
          })}
        </ContainerWeekDays>
        <ContainerButtons>
          <span>Cancelar</span>
          <button>Salvar</button>
        </ContainerButtons>
      </FormHabits>
    </ContainerCreateHabits>
  );
}

const ContainerCreateHabits = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
`;

const FormHabits = styled.form`
  width: 90%;
  input {
    height: 35px;
    width: 95%;
    border: 1px solid ${gray};
    border-radius: 6px;
    font-size: 1.2em;
    font-family: ${fontText};
    padding: 0 10px;
    margin: 10px 0;
    &::placeholder {
      color: ${gray};
    }
  }
`;

const ContainerWeekDays = styled.div`
  width: 75%;
  display: flex;
`;

const ButtonDays = styled.div`
  min-width: 12%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${gray};
  font-weight: 700;
  border: 1px solid ${gray};
  border-radius: 6px;
  margin: 0 5px;
`;

const ContainerButtons = styled.div`
  margin: 40px 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  span {
    font-size: 1.1em;
    color: ${lightBlue};
    margin-right: 10px;
  }

  button {
    width: 35%;
    height: 40px;
    background-color: ${lightBlue};
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${textButton};
    font-weight: 500;
    font-size: 1.1em;
  }
`;
