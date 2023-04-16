import styled from "styled-components";

export const Wrapper = styled.div<ContentStyledProps>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  grid-column: ${({ full }) => (full ? "1 / -1" : "2 / -1")};

  @media (min-width: 768px) {
    padding: 2.2rem 8rem;
  }
`;
