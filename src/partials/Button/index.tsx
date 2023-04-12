import * as Styled from "./styled";

const Button = ({ text, secondary, type, ...props }: ButtonProps) => {
  return (
    <Styled.Button secondary={secondary} type={type} {...props}>
      {text}
    </Styled.Button>
  );
};

export default Button;
