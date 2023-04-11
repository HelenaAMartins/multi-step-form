import StepButton from "../StepButton";
import * as Styled from "./styled";

const Menu = () => {
  const menus = [
    {
      title: "YOUR INFO",
      step: "info",
    },
    {
      title: "SELECT PLAN",
      step: "plan",
    },
    {
      title: "ADD-ONS",
      step: "addons",
    },
    {
      title: "SUMMARY",
      step: "summary",
    },
  ];
  return (
    <Styled.Background>
      {menus.map(({ title, step }, index) => (
        <StepButton
          stepNumber={index + 1}
          title={`STEP ${index + 1}`}
          subtitle={title}
          active={step === "info"}
        />
      ))}
    </Styled.Background>
  );
};

export default Menu;
