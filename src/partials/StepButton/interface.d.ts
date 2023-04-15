type StepButton = {
  stepNumber: number;
  title: string;
  subtitle: string;
  active?: boolean;
  onClick?: () => void;
};

type StepButtonStyledProps = {
  active?: boolean;
};
