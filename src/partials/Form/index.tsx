import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "../Step1";
import { Step1Validation } from "../validations";
import * as Styled from "./styled";
import { useStore } from "../../store/useStore";
import Step2 from "../Step2";
import Step3 from "../Step3";

const Form = () => {
  const { step } = useStore();

  const methods = useForm({
    defaultValues: {
      type: "monthly",
      addons: [],
    },
    resolver: yupResolver(Step1Validation),
  });

  const onSubmit = (data: any) => console.log(data);

  const steps = {
    info: <Step1 />,
    plan: <Step2 />,
    addons: <Step3 />,
  } as any;

  return (
    <FormProvider {...methods}>
      <Styled.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        {steps[step]}
      </Styled.FormWrapper>
    </FormProvider>
  );
};

export default Form;
