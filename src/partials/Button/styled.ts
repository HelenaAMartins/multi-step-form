import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button<ButtonStyledProps>`
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  transition: all 0.5s;
  border: none;
  cursor: pointer;
  background-color: ${({ secondary }) => (secondary ? "#7600bc" : "#00254d")};

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#8a00c2" : "#003166")};
  }
`;
