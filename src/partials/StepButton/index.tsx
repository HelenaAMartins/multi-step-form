import * as Styled from "./styled";

const StepButton = ({
  stepNumber,
  title,
  subtitle,
  active,
  ...props
}: StepButton) => {
  return (
    <Styled.Wrapper {...props}>
      <Styled.Number active={active}>{stepNumber}</Styled.Number>
      <Styled.Content>
        <Styled.StepTitle>{title}</Styled.StepTitle>
        <Styled.StepSubTitle>{subtitle}</Styled.StepSubTitle>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default StepButton;
