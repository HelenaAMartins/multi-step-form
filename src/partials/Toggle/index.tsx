import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";

const Toggle = () => {
  const { watch, setValue } = useFormContext();

  const { type } = watch();

  return (
    <Styled.Wrapper>
      <Styled.Type active={type === "monthly"}>Monthly</Styled.Type>
      <Styled.ToggleWrapper>
        <Styled.Input
          type="checkbox"
          id="switch"
          onChange={(e) =>
            setValue("type", e.target.checked ? "yearly" : "monthly")
          }
        />
        <Styled.Label htmlFor="switch">Toggle</Styled.Label>
      </Styled.ToggleWrapper>
      <Styled.Type active={type === "yearly"}>Yearly</Styled.Type>
    </Styled.Wrapper>
  );
};

export default Toggle;
