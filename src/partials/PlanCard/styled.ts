import styled from "styled-components";

export const Box = styled.div<PlanStyleProps>`
  border-radius: 0.5rem;
  border: 1px solid ${({ active }) => (active ? "#8be9fd" : "#ccc")};
  padding: 1rem;
  text-align: start;
  min-width: 10.5rem;
  cursor: pointer;
  transition: all 0.5s;
  background-color: ${({ active }) => (active ? "#4e5266" : "transparent")};
  display: grid;
  grid-template-columns: 60px auto;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 0.2rem;
  &:hover {
    border-color: #8be9fd;
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.4rem;
  }
`;

export const Price = styled.h5`
  font-size: 1rem;
  opacity: 0.4;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Discount = styled.span`
  font-size: 0.8rem;
  color: #bd93f9;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding-top: 5px;
  }
`;
