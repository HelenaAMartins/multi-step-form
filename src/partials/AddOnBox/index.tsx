import { Controller, useFormContext } from "react-hook-form";
import * as Styled from "./styled";

const AddOnBox = ({
  id,
  title,
  subtitle,
  price,
  setAddonList,
}: AddOnBoxProps) => {
  const { watch, setValue } = useFormContext();
  const { type, addons } = watch();
  const finalPrice = type === "monthly" ? price : price * 10;

  console.log(addons);
  return (
    <Styled.Box
      htmlFor={id}
      onClick={() =>
        setAddonList((prev: AddonList[]) => {
          const newArray = [...prev];
          const item = {
            title,
            price: finalPrice,
          };

          //Ensure array isnt empty
          if (newArray.length > 0) {
            //Attempt to find an item in array with matching id
            const index = newArray.findIndex(
              (addon) => addon.title === item.title
            );

            // If theres no match add item to the array
            if (index === -1) {
              newArray.push(item);
            } else {
              //If there is a match and the value is empty, remove the item from the array
              newArray.splice(index, 1);
            }
          } else {
            //If the array is empty, add the item to the array
            newArray.push(item);
          }

          return newArray;
        })
      }
    >
      <Styled.CustomCheck>
        <Styled.Check type="checkbox" id={id} />
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
      +${finalPrice}/{type === "monthly" ? "mo" : "yr"}
    </Styled.Box>
  );
};

export default AddOnBox;
