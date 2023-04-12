import { useStore } from "../../store/useStore";
import StepButton from "../StepButton";
import { menus } from "./data";
import * as Styled from "./styled";

const Menu = () => {
  const { step } = useStore();

  return (
    <Styled.Background>
      {menus.map(({ title, stepName }, index) => (
        <StepButton
          stepNumber={index + 1}
          title={`STEP ${index + 1}`}
          subtitle={title}
          active={stepName === step}
          onClick={() => console.log("dfs")}
        />
      ))}
    </Styled.Background>
  );
};

export default Menu;
