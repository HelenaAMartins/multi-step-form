import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";
import { useStore } from "../../store/useStore";

const SummaryBox = () => {
  const { changeStep } = useStore();

  const { watch } = useFormContext();
  const { type, plan, addons } = watch();

  const addonList = Object.values(addons).map(
    (item) => item
  ) as SummaryAddons[];

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const totalPrice =
    addonList?.map(({ price }) => price)?.reduce((a, b) => a + b, 0) +
    plan?.price;

  return (
    <Styled.Wrapper>
      <Styled.Box>
        <Styled.FirstLineWrapper>
          <Styled.TypeAndButton>
            <Styled.Type>
              {plan?.title} ({capitalizeFirstLetter(type)})
            </Styled.Type>
            <Styled.Change onClick={() => changeStep("plan")}>
              Change
            </Styled.Change>
          </Styled.TypeAndButton>
          {`$${type === "monthly" ? plan?.price : plan?.price * 10}/${
            type === "monthly" ? "mo" : "yr"
          } `}
        </Styled.FirstLineWrapper>
        {addonList?.length > 0 ? (
          addonList?.map(({ title, price }: SummaryAddons) => (
            <Styled.AddonLineWrapper key={`summary-addon-${title}`}>
              <Styled.AddonTitle>{title}</Styled.AddonTitle>
              <Styled.AddonPrice>
                +${type === "monthly" ? price : price * 10}/
                {type === "monthly" ? "mo" : "yr"}
              </Styled.AddonPrice>
            </Styled.AddonLineWrapper>
          ))
        ) : (
          <Styled.WarningMessage>No addons added</Styled.WarningMessage>
        )}
      </Styled.Box>
      <Styled.TotalWrapper>
        <Styled.Total>
          Total ({type === "monthly" ? "per month" : "per year"})
        </Styled.Total>
        <Styled.TotalPrice>
          +${type === "monthly" ? totalPrice : totalPrice * 10}
        </Styled.TotalPrice>
      </Styled.TotalWrapper>
    </Styled.Wrapper>
  );
};

export default SummaryBox;
