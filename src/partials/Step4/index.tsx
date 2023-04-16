import { useStore } from "../../store/useStore";
import BackButton from "../BackButton";
import Button from "../Button";
import Title from "../Title";

import SummaryBox from "../SummaryBox";
import * as Styled from "./styled";
import ButtonsBottomWrapper from "../ButtonsBottomWrapper";
import ContentWrapper from "../ContentWrapper";

const Step4 = () => {
  const { changeStep } = useStore();

  return (
    <>
      <ContentWrapper gap="2rem">
        <Title
          title="Finishing up"
          subtitle="Double-check everything looks OK before confirming."
        />

        <SummaryBox />
      </ContentWrapper>

      <ButtonsBottomWrapper>
        <BackButton onClick={() => changeStep("addons")}>Go back</BackButton>
        <Button text="Next Step" type="submit" />
      </ButtonsBottomWrapper>
    </>
  );
};

export default Step4;
