import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-gap: 2rem;
  }
`;

export const Box = styled.div`
  border-radius: 1rem;
  background-color: #4e5266;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  padding: 2rem 1.5rem;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FirstLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.5rem;
  padding-bottom: 1.4rem;
`;

export const TypeAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Type = styled.h3`
  font-weight: 400;
`;

export const Change = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ccc;
  font-size: 12px;
  transition: all 0.5s;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    color: #bd93f9;
  }
`;

export const AddonLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddonTitle = styled.span`
  opacity: 0.4;
`;

export const AddonPrice = styled.span``;

export const TotalWrapper = styled.div`
  font-size: 14px;
  padding: 0 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Total = styled.p``;

export const TotalPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #bd93f9;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const WarningMessage = styled.span`
  text-align: left;
  font-size: 1rem;
  font-weight: 300;
`;
