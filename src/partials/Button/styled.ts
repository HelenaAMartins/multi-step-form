import styled from "styled-components";

export const Button = styled.button<ButtonStyledProps>`
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  font-size: 1rem;
  transition: all 0.5s;
  border: none;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: ${({ secondary }) => (secondary ? "#7600bc" : "#e96977")};

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#8a00c2" : "#d85b69")};
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;
