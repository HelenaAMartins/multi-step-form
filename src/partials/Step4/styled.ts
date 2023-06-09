import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  width: 100%;
  border-radius: 20px;
  background-color: #5e6070;
  padding: 20px;

  @media (min-width: 768px) {
    border-radius: 0;
    padding: 0;
    background: none;
  }
`;
