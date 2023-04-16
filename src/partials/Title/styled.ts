import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 0.8rem;

  text-align: left;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const subTitle = styled.p`
  opacity: 0.3;
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
