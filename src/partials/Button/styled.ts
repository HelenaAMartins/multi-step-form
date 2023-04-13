import styled from "styled-components";

export const Button = styled.button<ButtonStyledProps>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  transition: all 0.5s;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ secondary }) => (secondary ? "#7600bc" : "#e96977")};

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#8a00c2" : "#d85b69")};
  }
`;
