import styled from "styled-components";
import { Link } from "react-router-dom";
import KLOGO from "../../assets/HeaderLogo/KLOGO.png";
import AHOUSELOGO from "../../assets/HeaderLogo/AHOUSELOGO.png";
import SLOGO from "../../assets/HeaderLogo/SLOGO.png";
import ALOGO from "../../assets/HeaderLogo/ALOGO.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 100px;
  padding-block: 40px;

  @media (max-width: 680px) {
    padding: 20px 20px;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 57px;
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;

  @media (max-width: 680px) {
    transform: scale(0.5);
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  color: #ff6060;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 680px) {
    font-size: 12px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <img src={KLOGO} alt="K Logo" height={62.26} width={54.33} />
        <img src={AHOUSELOGO} alt="House Logo" height={46.04} width={46.04} />
        <img src={SLOGO} alt="S Logo" height={48} width={39.41} />
        <img src={ALOGO} alt="A Logo" height={48.17} width={40.89} />
      </Logo>
      <HeaderNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </HeaderNav>
    </HeaderWrapper>
  );
}

export default Header;
