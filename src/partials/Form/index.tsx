import { useStore } from "../../store/useStore";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import StepThankYou from "../StepThankYou";
import * as Styled from "./styled";

const Form = (props: any) => {
  const { step } = useStore();

  const steps = {
    info: <Step1 />,
    plan: <Step2 />,
    addons: <Step3 />,
    summary: <Step4 />,
    thanks: <StepThankYou />,
  };

  return <Styled.FormWrapper {...props}>{steps[step]}</Styled.FormWrapper>;
};

export default Form;
