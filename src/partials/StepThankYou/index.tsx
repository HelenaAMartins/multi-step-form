import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";

const StepThankYou = () => {
  const { watch } = useFormContext();
  const { name } = watch();
  console.log(name);
  return (
    <Styled.Wrapper>
      <img src="src/assets/icon-thank-you.svg" />
      <Styled.Title>{`Thank you, ${name}!`}</Styled.Title>
      <Styled.Subtitle>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Styled.Subtitle>
    </Styled.Wrapper>
  );
};
export default StepThankYou;
