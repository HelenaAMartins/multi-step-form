import * as Styled from "./styled";

const Button = ({ text, secondary, type, ...props }: ButtonProps) => {
  return (
    <Styled.ButtonWrapper>
      <Styled.Button secondary={secondary} type={type} {...props}>
        {text}
      </Styled.Button>
    </Styled.ButtonWrapper>
  );
};

export default Button;
