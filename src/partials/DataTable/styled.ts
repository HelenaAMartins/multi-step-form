import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  font-size: 0.8rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bd93f9;
  padding: 10px 0;

  p {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  b {
    text-transform: uppercase;
    font-weight: 800;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Grid = styled.div`
  width: 100%;
`;

export const GridHead = styled(Grid)`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SubHeader = styled.h4`
  padding: 1.5rem 0;
  text-transform: uppercase;
  font-size: 1rem;
  text-align: left;
  border-bottom: 1px solid #4c4f5e;
  margin-bottom: 5px;
`;
