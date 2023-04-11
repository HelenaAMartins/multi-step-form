import { InputProps } from "./interface";
import * as Styled from "./styled";

const Input = ({ ...props }: InputProps) => {
  return (
    <Styled.InputWrapper>
      <Styled.LabelWrapper>
        <Styled.Label htmlFor="input-field">{props.label}</Styled.Label>
        {props?.error?.message && (
          <Styled.ErrorMessage>{props.error.message}</Styled.ErrorMessage>
        )}
      </Styled.LabelWrapper>
      <Styled.InputField
        {...props}
        ref={props.inputRef}
        hasError={!!props?.error?.message}
      />
    </Styled.InputWrapper>
  );
};

export default Input;
