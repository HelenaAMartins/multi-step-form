import { useFormContext } from "react-hook-form";
import { useStore } from "../../store/useStore";
import AddOnBox from "../AddOnBox";
import BackButton from "../BackButton";
import Button from "../Button";
import Title from "../Title";
import { Step3Validation, Validate } from "../validations";
import { services } from "./data";
import ButtonsBottomWrapper from "../ButtonsBottomWrapper";
import ContentWrapper from "../ContentWrapper";

const Step3 = () => {
  const { changeStep } = useStore();
  const { getValues, setError } = useFormContext();

  return (
    <>
      <ContentWrapper gap="1rem">
        <Title
          title="Pick add-ons"
          subtitle="Add-ons help enhance your gaming experience."
        />
        {services.map(({ id, title, subtitle, price }) => (
          <AddOnBox
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            price={price}
          />
        ))}
      </ContentWrapper>
      <ButtonsBottomWrapper>
        <BackButton onClick={() => changeStep("plan")}>Go back</BackButton>
        <Button
          text="Next Step"
          type="button"
          onClick={() =>
            Validate(Step3Validation, getValues(), setError, () =>
              changeStep("summary")
            )
          }
        />
      </ButtonsBottomWrapper>
    </>
  );
};

export default Step3;
