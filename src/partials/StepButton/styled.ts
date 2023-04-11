import styled from "styled-components";

export const Wrapper = styled.button`
  display: grid;
  grid-template-columns: 3rem auto;
  padding: 1rem;
  grid-gap: 1.5rem;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Number = styled.h3<StepButtonStyledProps>`
  border: solid 1px lightgray;
  border-radius: 50%;
  font-size: 1.4rem;
  padding: 0.5rem;
  align-self: center;
  justify-content: center;

  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ active }) => (active ? "#000" : "#FFF")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StepTitle = styled.h5`
  font-size: 1rem;
  font-weight: 300;
`;

export const StepSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
