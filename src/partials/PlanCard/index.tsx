import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";

const PlanCard = ({ src, title, price, onClick, active }: PlanCardProps) => {
  const { watch } = useFormContext();

  const { type } = watch();

  return (
    <Styled.Box onClick={onClick} active={active}>
      <img src={`/${src}`} />
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Price>
          ${type === "monthly" ? price : price * 10}/
          {type === "monthly" ? "mo" : "yr"}
        </Styled.Price>
        {type === "yearly" && <Styled.Discount>2 months free</Styled.Discount>}
      </Styled.Content>
    </Styled.Box>
  );
};

export default PlanCard;
