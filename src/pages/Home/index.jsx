import styled from "styled-components";
import Banner from "../../components/Banner";

const StyledMain = styled.main`
  padding-inline: 100px;
`;

function Home() {
  return (
    <StyledMain>
      <Banner />
    </StyledMain>
  );
}

export default Home;
