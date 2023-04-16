import { useFormContext } from "react-hook-form";
import * as Styled from "./styled";

const AddOnBox = ({ id, title, subtitle, price }: AddOnBoxProps) => {
  const { watch, setValue, unregister } = useFormContext();
  const { type } = watch();
  const finalPrice = type === "monthly" ? price : price * 10;

  return (
    <Styled.Box htmlFor={id}>
      <Styled.CustomCheck>
        <Styled.Check
          type="checkbox"
          id={id}
          onChange={(e) => {
            if (!e.target.checked) return unregister(`addons.${id}`);
            setValue(`addons.${id}`, { title, price: finalPrice });
          }}
        />

        <Styled.Ticked>
          <svg viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </Styled.Ticked>
      </Styled.CustomCheck>
      <Styled.Description>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.Description>
      <Styled.Price>
        +${finalPrice}/{type === "monthly" ? "mo" : "yr"}
      </Styled.Price>
    </Styled.Box>
  );
};

export default AddOnBox;
