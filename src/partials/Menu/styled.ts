import styled from "styled-components";
import MenuSvg from "../../assets/bg-sidebar-desktop.svg";
import MenuSvgMobile from "../../assets/bg-sidebar-mobile.svg";

export const Background = styled.div`
  display: flex;
  background-image: url(${MenuSvgMobile});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  min-height: 225px;
  align-items: center;
  padding: 20px 45px 145px;
  margin-bottom: -130px;

  @media (min-width: 768px) {
    flex-direction: column;
    background-image: url(${MenuSvg});
    background-size: cover;
    padding: 20px 0 0;
    border-radius: 20px;
    margin: 0;
  }
`;
