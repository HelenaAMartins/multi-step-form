import * as Styled from "./styled";

const StepButton = ({ stepNumber, title, subtitle, active }: StepButton) => {
  return (
    <Styled.Wrapper>
      <Styled.Number active={active}>{stepNumber}</Styled.Number>
      <Styled.Content>
        <Styled.StepTitle>{title}</Styled.StepTitle>
        <Styled.StepSubTitle>{subtitle}</Styled.StepSubTitle>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default StepButton;
