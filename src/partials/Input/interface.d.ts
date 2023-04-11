import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  label: string;
  name: string;
  placeholder: string;
  error: any;
  type: string;
  inputRef?: any;
  className?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type StyledInputProps = {
  hasError: boolean;
};
