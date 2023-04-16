import styled from "styled-components";

export const Wrapper = styled.div<ContentWrapperStyledProps>`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ gap }) => gap};
  width: 100%;
  border-radius: 20px;
  background-color: #5e6070;
  padding: 20px;
  justify-content: ${({ justify }) => justify};
  height: 100%;

  @media (min-width: 768px) {
    border-radius: 0;
    padding: 0;
    background: none;
  }
`;
