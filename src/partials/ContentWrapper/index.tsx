import * as Styled from "./styled";

const ContentWrapper = ({
  children,
  gap = "3rem",
  justify = "flex-start",
}: ContentWrapperProps) => (
  <Styled.Wrapper gap={gap} justify={justify}>
    {children}
  </Styled.Wrapper>
);

export default ContentWrapper;
