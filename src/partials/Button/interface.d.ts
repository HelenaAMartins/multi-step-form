type ButtonStyledProps = {
  secondary?: boolean;
};

type ButtonProps = {
  text: string;
  secondary?: boolean;
  type: "button" | "submit";
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};
