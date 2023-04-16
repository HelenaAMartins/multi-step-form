import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";
import Title from "../Title";
import ContentWrapper from "../ContentWrapper";
import ButtonsBottomWrapper from "../ButtonsBottomWrapper";
import Button from "../Button";
import { Validate } from "../validations";
import { useStore } from "../../store/useStore";

const DataTable = () => {
  const { getValues, reset } = useFormContext();
  const { changeStep } = useStore();
  const { addons, plan, type, ...rest } = getValues();

  const list = Object.entries({ ...rest }).map(([key, value]) => ({
    name: key,
    value,
  }));

  const addonList = Object.values(addons).map(
    (item) => item
  ) as SummaryAddons[];

  const finalPrice = (value: number) => {
    return type === "monthly" ? value : value * 10;
  };

  const totalPrice =
    addonList?.map(({ price }) => price)?.reduce((a, b) => a + b, 0) +
    plan?.price;

  return (
    <>
      <ContentWrapper>
        <Title
          title="Table data"
          subtitle="List of data to be sent to bank data."
        />
        <Styled.Grid>
          {list?.map(({ name, value }, index) => (
            <Styled.Header key={`data-table-${index}`}>
              <b>{name}</b>
              <span>{value}</span>
            </Styled.Header>
          ))}
          <Styled.SubHeader>Plan</Styled.SubHeader>
          <Styled.Header>
            <b>Type</b>
            <span>{type}</span>
          </Styled.Header>
          <Styled.Header>
            <b>{plan.title}</b>
            <span>${finalPrice(plan?.price)}</span>
          </Styled.Header>

          {addonList.map(({ title, price }, index) => (
            <Styled.Header key={`data-table-addon-${index}`}>
              <p>
                <b>{title}</b>
                <small>add-on</small>
              </p>
              <span>${finalPrice(price)}</span>
            </Styled.Header>
          ))}

          <Styled.Header>
            <b>Total</b>
            <span>${finalPrice(totalPrice)}</span>
          </Styled.Header>
        </Styled.Grid>
      </ContentWrapper>
      <ButtonsBottomWrapper justify="flex-end">
        <Button
          secondary
          text="Back to step 1"
          type="button"
          onClick={() => {
            reset();
            changeStep("info");
          }}
        />
      </ButtonsBottomWrapper>
    </>
  );
};

export default DataTable;
