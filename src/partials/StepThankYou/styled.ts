import styled from "styled-components";

export const ThanksWrapper = styled.div`
  padding: 80px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  img {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 768px) {
    padding: 20px;
    grid-gap: 2rem;

    img {
      width: 80px;
      height: 80px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  opacity: 0.8;
  font-weight: 300;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
