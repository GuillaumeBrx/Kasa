import styled from "styled-components";
import Banner from "../../components/Banner";

const StyledMain = styled.main`
  padding-inline: 100px;
`;

function About() {
  return (
    <StyledMain>
      <Banner />
    </StyledMain>
  );
}

export default About;
