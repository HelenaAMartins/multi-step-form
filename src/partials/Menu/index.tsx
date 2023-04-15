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
          key={`menu-${index}`}
          stepNumber={index + 1}
          title={`STEP ${index + 1}`}
          subtitle={title}
          active={stepName === step}
        />
      ))}
    </Styled.Background>
  );
};

export default Menu;
