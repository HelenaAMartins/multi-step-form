import { Controller, useFormContext } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import Title from "../Title";
import { Step1Validation, Validate } from "../validations";
import * as Styled from "./styled";
import { useStore } from "../../store/useStore";

const Step1 = () => {
  const { changeStep } = useStore();
  const {
    formState: { errors },
    getValues,
    setError,
    control,
  } = useFormContext<Step1Errors>();

  return (
    <>
      <Styled.Wrapper>
        <Title
          title="Personal Info"
          subtitle="Please, provide your name, email address and phone number."
        />
        <Styled.InputsWrapper>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value, ref } }) => (
              <Input
                inputRef={ref}
                name="name"
                error={errors?.name}
                label="Name"
                placeholder="e.g. John Doe"
                type="text"
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setError("name", { message: "" });
                }}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                name="email"
                error={errors?.email}
                label="Email Address"
                placeholder="e.g. johnDoe@email.com"
                type="email"
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setError("email", { message: "" });
                }}
              />
            )}
          />

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                name="phoneNumber"
                label="Phone Number"
                error={errors?.phoneNumber}
                placeholder="e.g. +55 11 980687353"
                type="text"
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setError("phoneNumber", { message: "" });
                }}
              />
            )}
          />
        </Styled.InputsWrapper>
      </Styled.Wrapper>
      <Styled.ButtonsWrapper>
        <Button
          text="Next Step"
          type="button"
          onClick={() =>
            Validate(Step1Validation, getValues(), setError, () =>
              changeStep("plan")
            )
          }
        />
      </Styled.ButtonsWrapper>
    </>
  );
};

export default Step1;
