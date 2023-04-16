import * as Styled from "./styled";

const ButtonsBottomWrapper = ({
  children,
  justify = "space-between",
}: ButtonsBottomPRops) => (
  <Styled.ButtonsWrapper justify={justify}>{children}</Styled.ButtonsWrapper>
);

export default ButtonsBottomWrapper;
