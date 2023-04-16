import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";
import ContentWrapper from "../ContentWrapper";
import { useStore } from "../../store/useStore";
import Button from "../Button";
import ButtonsBottomWrapper from "../ButtonsBottomWrapper";

const StepThankYou = () => {
  const { watch } = useFormContext();
  const { changeStep } = useStore();
  const { name } = watch();

  return (
    <>
      <ContentWrapper justify="center">
        <Styled.ThanksWrapper>
          <img src="/icon-thank-you.svg" />
          <Styled.Title>{`Thank you, ${name}!`}</Styled.Title>
          <Styled.Subtitle>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </Styled.Subtitle>
        </Styled.ThanksWrapper>
      </ContentWrapper>
      <ButtonsBottomWrapper justify="flex-end">
        <Button
          text="See data table"
          type="button"
          onClick={() => changeStep("dataTable")}
        />
      </ButtonsBottomWrapper>
    </>
  );
};
export default StepThankYou;
