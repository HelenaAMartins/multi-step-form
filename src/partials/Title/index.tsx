import * as Styled from "./styled";

type Props = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: Props) => (
  <Styled.TitleWrapper>
    <Styled.Title>{title}</Styled.Title>
    <Styled.subTitle>{subtitle}</Styled.subTitle>
  </Styled.TitleWrapper>
);

export default Title;
