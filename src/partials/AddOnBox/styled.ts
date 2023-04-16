import styled from "styled-components";

export const Box = styled.label`
  display: grid;
  width: 100%;
  grid-template-columns: 20px auto 3rem;
  font-size: 1rem;
  padding: 0.5rem;
  align-items: center;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  grid-gap: 10px;
  transition: all 0.5s;
  min-height: 80px;

  &:hover {
    border-color: #bd93f9;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem;
    grid-gap: 20px;
    grid-template-columns: 40px auto 5.5rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CustomCheck = styled.div`
  display: flex;
`;

export const Check = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + div {
    font-size: 15px;
    background: #bd93f9;
    border: 1px solid #bd93f9;
    color: #ffffff;

    svg {
      opacity: 1;
    }
  }
`;

export const Ticked = styled.div`
  padding: 2px;
  width: 20px;
  height: 20px;
  display: block;
  pointer-events: none;

  background: white;
  border: 1px solid #dddddd;
  border-radius: 5px;

  transition: 0.05s linear;

  svg {
    opacity: 0;
    fill: #fff;
  }

  @media (min-width: 768px) {
    padding: 5px;
    width: 25px;
    height: 25px;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 12px;
  font-weight: 300;
  opacity: 0.4;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Price = styled.span`
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
