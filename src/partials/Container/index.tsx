import { ReactNode } from "react";
import * as Styled from "./styled";

const Container = ({ children }: { children: ReactNode }) => (
  <Styled.Container>{children}</Styled.Container>
);

export default Container;
