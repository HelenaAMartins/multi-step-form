import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  padding-top: 20px;
`;

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: #ff5555;
  position: absolute;
  top: -10px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3rem;
  width: 100%;
`;
