import { useStore } from "../../store/useStore";
import BackButton from "../BackButton";
import Button from "../Button";
import Title from "../Title";

import SummaryBox from "../SummaryBox";
import * as Styled from "./styled";

const Step4 = () => {
  const { changeStep } = useStore();

  return (
    <>
      <Title
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />

      <SummaryBox />

      <Styled.ButtonsWrapper>
        <BackButton onClick={() => changeStep("addons")}>Go back</BackButton>
        <Button text="Next Step" type="submit" />
      </Styled.ButtonsWrapper>
    </>
  );
};

export default Step4;
