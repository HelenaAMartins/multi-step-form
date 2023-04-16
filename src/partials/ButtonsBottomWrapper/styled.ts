import styled from "styled-components";

export const ButtonsWrapper = styled.div<ButtonsBottomStyledProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ justify }) => justify};
  background-color: #5e6070;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px 10px;

  @media (min-width: 768px) {
    background: none;
    position: initial;
    padding: 0;
  }
`;
