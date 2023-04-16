import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding-top: 20px;
  flex-direction: column;
  grid-gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    grid-gap: 0;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 1rem;
  color: #ff5555;
  position: absolute;
  top: -10px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
