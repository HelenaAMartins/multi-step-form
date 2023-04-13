import { useFormContext } from "react-hook-form";
import { useStore } from "../../store/useStore";
import AddOnBox from "../AddOnBox";
import BackButton from "../BackButton";
import Button from "../Button";
import Title from "../Title";
import { Step3Validation, Validate } from "../validations";
import * as Styled from "./styled";
import { services } from "./data";
import { useState } from "react";

const Step3 = () => {
  const { changeStep } = useStore();
  const [addonList, setAddonList] = useState([]);

  const { getValues, setError } = useFormContext<any>();

  console.log(addonList);

  return (
    <>
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
          setAddonList={setAddonList}
        />
      ))}
      <Styled.ButtonsWrapper>
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
      </Styled.ButtonsWrapper>
    </>
  );
};

export default Step3;
