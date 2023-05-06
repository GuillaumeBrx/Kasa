import styled from "styled-components";
import KLOGO from "../../assets/FooterLogo/KLOGO.png";
import AHOUSELOGO from "../../assets/FooterLogo/AHOUSELOGO.png";
import SLOGO from "../../assets/FooterLogo/SLOGO.png";
import ALOGO from "../../assets/FooterLogo/ALOGO.png";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  background-color: black;
  color: white;
  padding-top: 66px;
  padding-bottom: 29px;
  font-size: 20px;
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
`;

function Footer() {
  return (
    <div>
      <FooterWrapper>
        <LogoDiv>
          <img src={KLOGO} alt="K Logo" height={36.11} width={31.51} />
          <img src={AHOUSELOGO} alt="House Logo" height={30.95} width={26.71} />
          <img src={SLOGO} alt="S Logo" height={27.84} width={22.86} />
          <img src={ALOGO} alt="A Logo" height={27.94} width={23.72} />
        </LogoDiv>
        <p>© 2020 Kasa. All rights reserved</p>
      </FooterWrapper>
    </div>
  );
}

export default Footer;
