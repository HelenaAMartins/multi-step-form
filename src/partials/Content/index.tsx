import * as Styled from "./styled";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Content;
