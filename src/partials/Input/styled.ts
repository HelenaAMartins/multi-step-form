import styled from "styled-components";
import { StyledInputProps } from "./interface";

export const InputWrapper = styled.div``;

export const LabelWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const InputField = styled.input<StyledInputProps>`
  padding: 1rem 0.8rem;
  font-size: 1.4rem;
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? "#ff5555" : "#ccc")};
  width: 100%;
  overflow: hidden;
  &:focus {
    border: 1px solid blue;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: #ff5555;
`;
