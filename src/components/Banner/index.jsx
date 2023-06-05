import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import BannerHome from "../../assets/Banner/banner_home.png";
import BannerAbout from "../../assets/Banner/banner_about.png";

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 223px;
  width: 100%;
  background-image: ${({ bannerImg }) => `url(${bannerImg})`};
  background-position: center;
  border-radius: 25px;
  position: relative;
  margin-top: 28px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    border-radius: 25px;
  }

  @media (max-width: 680px) {
    margin-top: 0px;
    margin-bottom: 9px;
    background-size: cover;
  }

  ${(props) =>
    props.isHome &&
    css`
      @media (max-width: 600px) {
        height: 111px;
        width: 100%;
      }
    `}
`;

const BannerText = styled.p`
  font-size: 48px;
  color: white;
  z-index: 1;

  @media (max-width: 880px) and (min-width: 645px) {
    text-align: center;
  }

  @media (max-width: 644px) {
    font-size: 24px;
    padding-left: 16px;
  }
`;

function Banner() {
  const location = useLocation();

  const bannerImg = location.pathname === "/" ? BannerHome : BannerAbout;
  const isHome = location.pathname === "/";

  return location.pathname === "/" ? (
    <BannerWrapper bannerImg={bannerImg} isHome={isHome}>
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerWrapper>
  ) : (
    <BannerWrapper bannerImg={bannerImg}></BannerWrapper>
  );
}

export default Banner;
