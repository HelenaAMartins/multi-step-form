import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  font-size: 1.2rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bd93f9;

  b {
    padding: 8px 4px;
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const Grid = styled.div`
  width: 100%;
  font-size: 1.2rem;
`;

export const GridHead = styled(Grid)`
  font-size: 1.2rem;
`;

export const SubHeader = styled.h4`
  padding: 1.5rem;
  text-transform: uppercase;
`;
