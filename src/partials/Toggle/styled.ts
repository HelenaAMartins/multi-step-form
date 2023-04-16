import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #4e5266;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  grid-gap: 0.6rem;
  align-items: center;
`;

export const Type = styled.span<TypeStyleProps>`
  font-size: 1rem;
  color: ${({ active }) => (active ? "#00254d" : "#ccc")};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ToggleWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }
`;

export const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 25px;
  background: #00254d;
  display: block;
  border-radius: 100px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 3px;
    left: 5px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;
