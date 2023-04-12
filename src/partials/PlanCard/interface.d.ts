type PlanCardProps = {
  src: string;
  title: string;
  price: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  active: boolean;
};

type PlanStyleProps = {
  active: boolean;
};
