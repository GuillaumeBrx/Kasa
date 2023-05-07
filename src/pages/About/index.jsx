import styled from "styled-components";
import Banner from "../../components/Banner";
import AboutDropdown from "../../components/AboutDropdown";

const StyledMain = styled.main`
  padding-inline: 100px;
`;

function About() {
  return (
    <StyledMain>
      <Banner />
      <AboutDropdown />
    </StyledMain>
  );
}

export default About;
