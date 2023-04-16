import styled from "styled-components";

export const Container = styled.div`
  background-color: #44475a;
  color: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 1400px;

  @media (min-width: 768px) {
    padding: 16px;
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: 20px;
    min-height: 600px;
  }
`;
