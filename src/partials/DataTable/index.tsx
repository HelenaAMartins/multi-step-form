import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";
import Title from "../Title";
import ContentWrapper from "../ContentWrapper";

const DataTable = () => {
  const { getValues } = useFormContext();
  const { addons, plan, ...rest } = getValues();

  const list = Object.entries({ ...rest }).map(([key, value]) => ({
    name: key,
    value,
  }));

  const addonList = Object.values(addons).map(
    (item) => item
  ) as SummaryAddons[];

  const finalPrice = (value: number) => {
    return rest.type === "monthly" ? value : value * 10;
  };

  const totalPrice =
    addonList?.map(({ price }) => price)?.reduce((a, b) => a + b, 0) +
    plan?.price;

  return (
    <ContentWrapper>
      <Title
        title="Table data"
        subtitle="List of data to be sent to bank data through an endpoint."
      />
      <Styled.Grid>
        {list?.map(({ name, value }, index) => (
          <Styled.Header key={`data-table-${index}`}>
            <b>{name}:</b>
            <span>{value}</span>
          </Styled.Header>
        ))}
        <Styled.SubHeader>Plan</Styled.SubHeader>
        <Styled.Header>
          <b>{plan.title}:</b>
          <span>${finalPrice(plan?.price)}</span>
        </Styled.Header>

        {addonList.map(({ title, price }, index) => (
          <Styled.Header key={`data-table-addon-${index}`}>
            <b>{title} (add-on):</b>
            <span>${finalPrice(price)}</span>
          </Styled.Header>
        ))}

        <Styled.Header>
          <b>Total:</b>
          <span>${finalPrice(totalPrice)}</span>
        </Styled.Header>
      </Styled.Grid>
    </ContentWrapper>
  );
};

export default DataTable;
