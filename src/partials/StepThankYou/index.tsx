import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";
import ContentWrapper from "../ContentWrapper";

const StepThankYou = () => {
  const { watch } = useFormContext();
  const { name } = watch();
  console.log(name);
  return (
    <ContentWrapper justify="center">
      <Styled.ThanksWrapper>
        <img src="src/assets/icon-thank-you.svg" />
        <Styled.Title>{`Thank you, ${name}!`}</Styled.Title>
        <Styled.Subtitle>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Styled.Subtitle>
      </Styled.ThanksWrapper>
    </ContentWrapper>
  );
};
export default StepThankYou;
