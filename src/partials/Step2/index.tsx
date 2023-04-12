import { useFormContext } from "react-hook-form";
import { useStore } from "../../store/useStore";
import Title from "../Title";
import PlanCard from "../PlanCard";
import * as Styled from "./styled";
import Button from "../Button";
import { Step2Validation, Validate } from "../validations";
import { plans } from "./data";
import Toggle from "../Toggle";
import BackButton from "../BackButton";

const Step2 = () => {
  const { changeStep } = useStore();

  const {
    formState: { errors },
    getValues,
    watch,
    setError,
    setValue,
  } = useFormContext<Step2Errors>();
  const { plan } = watch();

  return (
    <>
      <Styled.Wrapper>
        <Title
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        />
        {errors.plan?.title?.message && (
          <Styled.ErrorMessage>
            {errors.plan?.title?.message}
          </Styled.ErrorMessage>
        )}
        <Styled.CardsWrapper>
          {plans?.map(({ src, title, price }, index) => (
            <PlanCard
              src={src}
              title={title}
              price={price}
              key={`plans-${index}`}
              onClick={() => {
                setError("plan", {});
                setValue("plan", { title, price });
              }}
              active={plan?.title === title}
            />
          ))}
        </Styled.CardsWrapper>

        <Toggle />
      </Styled.Wrapper>

      <Styled.ButtonsWrapper>
        <BackButton onClick={() => changeStep("info")}>Go back</BackButton>
        <Button
          text="Next Step"
          type="button"
          onClick={() =>
            Validate(Step2Validation, getValues(), setError, () =>
              changeStep("addons")
            )
          }
        />
      </Styled.ButtonsWrapper>
    </>
  );
};
export default Step2;
