import { useLocation } from "react-router-dom";
import styled from "styled-components";
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
`;

const BannerText = styled.p`
  font-size: 48px;
  color: white;
  z-index: 1;
`;

function Banner() {
  const location = useLocation();

  const bannerImg = location.pathname === "/" ? BannerHome : BannerAbout;

  return location.pathname === "/" ? (
    <BannerWrapper bannerImg={bannerImg}>
      <BannerText>Chez vous, partout et ailleurs</BannerText>
    </BannerWrapper>
  ) : (
    <BannerWrapper bannerImg={bannerImg}></BannerWrapper>
  );
}

export default Banner;
