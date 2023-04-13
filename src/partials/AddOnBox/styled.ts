import styled from "styled-components";

export const Box = styled.label`
  display: grid;
  width: 100%;
  grid-template-columns: 40px auto 5.5rem;
  font-size: 1.2rem;
  padding: 1rem;
  align-items: center;
  border-radius: 0.4rem;
  border: 1px solid #ccc;
  grid-gap: 20px;
  transition: all 0.5s;

  &:hover {
    border-color: #bd93f9;
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
  padding: 5px;
  width: 25px;
  height: 25px;
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
`;

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const Subtitle = styled.span`
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.4;
`;
