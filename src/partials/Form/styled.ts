import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  grid-gap: 1.2rem;
  height: 100%;
  justify-content: space-between;
  min-height: 85vh;

  @media (min-width: 768px) {
    min-height: 600px;
  }
`;
