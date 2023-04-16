import { useStore } from "../../store/useStore";
import * as Styled from "./styled";

const Content = ({ children }: ContentProps) => {
  const { step } = useStore();

  return (
    <Styled.Wrapper full={step === "dataTable"}>{children}</Styled.Wrapper>
  );
};

export default Content;
