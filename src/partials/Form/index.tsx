import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Step1 from "../Step1";
import { Step1Validation } from "../validations";
import * as Styled from "./styled";

const Form = () => {
  const methods = useForm({
    resolver: yupResolver(Step1Validation),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Styled.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <Step1 />
      </Styled.FormWrapper>
    </FormProvider>
  );
};

export default Form;
