import styled from "styled-components";

export const Box = styled.div<PlanStyleProps>`
  border-radius: 0.5rem;
  border: 1px solid ${({ active }) => (active ? "#8be9fd" : "#ccc")};
  padding: 1.5rem;
  text-align: start;
  min-width: 10.5rem;
  cursor: pointer;
  transition: all 0.5s;
  background-color: ${({ active }) => (active ? "#4e5266" : "transparent")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 0.2rem;
  &:hover {
    border-color: #8be9fd;
  }
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0.4rem;
`;

export const Price = styled.h5`
  font-size: 1.2rem;
  opacity: 0.4;
  font-weight: 300;
`;

export const Discount = styled.span`
  font-size: 1rem;
  color: #bd93f9;
  padding-top: 5px;
`;
