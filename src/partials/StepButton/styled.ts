import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    justify-content: start;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: 3rem auto;
    padding: 1rem;
  }
`;

export const Number = styled.h3<StepButtonStyledProps>`
  border: solid 1px lightgray;
  border-radius: 50%;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  align-self: center;
  justify-content: center;

  background-color: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ active }) => (active ? "#000" : "#FFF")};

  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 0.5rem;
  }
`;

export const Content = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StepTitle = styled.h5`
  display: initial;
  font-size: 1rem;
  font-weight: 300;
`;

export const StepSubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
