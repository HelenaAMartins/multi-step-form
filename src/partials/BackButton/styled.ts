import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.5s;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  color: #ccc;

  &:hover {
    color: #00254d;
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;
